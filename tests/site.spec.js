import { test, expect } from "./fixtures.js";

test("renders the page, loads its hero image and fits the viewport", async ({ page }) => {
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Consumir menos.Viver melhor.");
  await expect(page.getByRole("contentinfo")).toContainText("Eco-Consumo");
  for (const id of ["floripa", "entenda", "pratica", "projetos", "historias"]) {
    await expect(page.locator(`#${id}`).getByRole("heading", { level: 2 })).toBeVisible();
  }
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  const imageUrl = await page.locator(".hero").evaluate((hero) =>
    getComputedStyle(hero).backgroundImage.match(/url\(["']?([^"')]+)/)?.[1]);
  expect(imageUrl).toBeTruthy();
  expect((await page.request.get(imageUrl)).ok()).toBe(true);
  for (const card of await page.locator(".project-card").all()) {
    expect((await card.boundingBox()).width, "Project cards must remain readable on narrow screens").toBeGreaterThanOrEqual(240);
  }
  for (const title of await page.locator(".project-card h3").all()) {
    expect(await title.evaluate((element) => element.scrollWidth <= element.clientWidth)).toBe(true);
  }
});

test("navigates to every section and closes the mobile menu", async ({ page, isMobile }) => {
  const nav = page.getByRole("navigation");
  if (isMobile) await expect(nav.getByRole("link", { name: "Floripa", exact: true })).toBeHidden();
  else await expect(nav.getByRole("button", { name: "Abrir menu" })).toBeHidden();
  for (const [name, id] of [["Floripa", "floripa"], ["Consumo", "entenda"], ["Práticas", "pratica"], ["Projetos", "projetos"], ["Recursos", "historias"]]) {
    // The navigation is at the top of the document, rather than fixed.
    await page.evaluate(() => window.scrollTo(0, 0));
    if (isMobile) {
      await nav.getByRole("button", { name: "Abrir menu" }).click();
      await expect(nav.getByRole("button", { name: "Fechar menu" })).toHaveAttribute("aria-expanded", "true");
    }
    await nav.getByRole("link", { name, exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`#${id}$`));
    await expect(page.locator(`#${id}`).getByRole("heading", { level: 2 })).toBeInViewport();
    if (isMobile) await expect(nav.getByRole("button", { name: "Abrir menu" })).toHaveAttribute("aria-expanded", "false");
  }
});

for (const [label, section] of [["Começar pelas dicas", "pratica"], ["Por que importa?", "entenda"], ["Escolher um próximo passo", "pratica"]]) {
  test(`CTA: ${label}`, async ({ page }) => {
    await page.getByRole("link", { name: label }).click();
    await expect(page).toHaveURL(new RegExp(`#${section}$`));
    await expect(page.locator(`#${section}`).getByRole("heading", { level: 2 })).toBeInViewport();
  });
}

const externalLinks = [
  [".news-card:nth-child(1) a", "https://www.pmf.sc.gov.br/"],
  [".news-card:nth-child(2) a", "https://minhocacabeca.pmf.sc.gov.br/"],
  [".news-card:nth-child(3) a", "https://www.ima.sc.gov.br/"],
  ["#entenda a", "https://www.gov.br/mma/pt-br"],
  [".project-card:nth-child(1)", "https://www.projetotamar.org.br/"],
  [".project-card:nth-child(2)", "https://instagram.com/projetolontraekko"],
  [".resource-list a:nth-child(1)", "https://www.pmf.sc.gov.br/"],
  [".resource-list a:nth-child(2)", "https://www.ima.sc.gov.br/"],
  [".resource-list a:nth-child(3)", "https://www.gov.br/mma/pt-br"],
];

for (const [selector, url] of externalLinks) {
  test(`opens the resource ${selector} in a new tab`, async ({ page }) => {
    const link = page.locator(selector);
    await expect(link).toHaveAttribute("href", url);
    await expect(link).toHaveAttribute("rel", /noreferrer|noopener/);
    const popupPromise = page.waitForEvent("popup");
    await link.click();
    const popup = await popupPromise;
    await expect(popup).toHaveURL(url);
    await popup.close();
    await expect(page).toHaveURL("/");
  });
}

test("horizontal cards remain reachable on mobile", async ({ page, isMobile }) => {
  test.skip(!isMobile, "Horizontal scrolling is a mobile layout");
  for (const selector of [".news-card", ".cycle-grid article"]) {
    const lastCard = page.locator(selector).last();
    await lastCard.scrollIntoViewIfNeeded();
    await expect(lastCard).toBeInViewport({ ratio: 0.9 });
  }
});

test("mobile menu can be opened and closed without navigating", async ({ page, isMobile }) => {
  test.skip(!isMobile, "Desktop uses inline navigation");
  await page.getByRole("button", { name: "Abrir menu" }).click();
  await expect(page.getByRole("navigation").getByRole("link", { name: "Recursos", exact: true })).toBeVisible();
  await page.getByRole("button", { name: "Fechar menu" }).click();
  await expect(page.getByRole("navigation").getByRole("link", { name: "Recursos", exact: true })).toBeHidden();
});

test("page appearance @visual", async ({ page }) => {
  await expect(page).toHaveScreenshot("home.png", { fullPage: true, animations: "disabled" });
});

test("expanded mobile menu appearance @visual", async ({ page, isMobile }) => {
  test.skip(!isMobile, "Desktop does not have a dropdown menu");
  await page.getByRole("button", { name: "Abrir menu" }).click();
  await expect(page).toHaveScreenshot("menu-open.png", { animations: "disabled" });
});
