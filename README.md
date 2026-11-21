# Eco-Consumo

[Português](#português) · [English](#english)

## Português

### Sobre o projeto

O **Eco-Consumo** é uma plataforma educativa sobre consumo consciente, preservação ambiental e participação cidadã. O site transforma temas ambientais em conteúdos simples e aplicáveis ao cotidiano, com foco especial em Florianópolis, SC.

A experiência apresenta notícias e iniciativas locais, práticas para reduzir impactos ambientais, materiais educativos e projetos que protegem a biodiversidade da ilha, como o Projeto Tamar e o Projeto Lontra.

### Objetivos

- Incentivar escolhas de consumo mais responsáveis.
- Divulgar iniciativas ambientais de Florianópolis.
- Aproximar educação ambiental da rotina das pessoas.
- Valorizar a conservação de praias, matas, rios e fauna costeira.
- Organizar conteúdos confiáveis em uma experiência acessível e responsiva.

### Tecnologias utilizadas

- **React 18** — construção da interface por componentes.
- **Vite 4** — desenvolvimento local e build de produção.
- **JavaScript / JSX** — lógica e composição das páginas.
- **CSS3** — layout responsivo, design system e acessibilidade visual.
- **React Slick** — componentes de carrossel quando necessários.
- **Node.js 24.x** — runtime definido para o projeto e para o deploy.
- **Vercel** — hospedagem e publicação da aplicação.

### Como executar

```bash
yarn install --frozen-lockfile
yarn dev
```

Para gerar a versão de produção:

```bash
yarn build
yarn preview
```

Para verificar o código:

```bash
yarn lint
```

### Configurar e validar o PostHog

Use Node 24 (`nvm install && nvm use`, se você usa nvm) e Yarn 1:

```bash
yarn install --frozen-lockfile
```

Crie um arquivo `.env.local` na raiz do projeto. Preencha `VITE_POSTHOG_KEY` com o project token público e
`VITE_POSTHOG_HOST` com o host de ingestão do projeto (neste projeto,
`https://us.i.posthog.com`). Reinicie o servidor depois de alterar variáveis.
As variáveis `POSTHOG_CLI_*` não são necessárias para desenvolvimento local.

```bash
yarn build
yarn lint
yarn eslint src/posthog.js src/posthog-logger.js src/main.jsx src/components/Header.jsx src/components/MainContent.jsx --max-warnings 0
yarn dev
```

A suíte de interface abaixo valida a navegação sem enviar dados ao PostHog.
Para confirmar a ingestão real, valide também as integrações no navegador:

- Clique nos dois CTAs para dicas: `practice_guidance_started`, com `entry_point` igual a `hero` e `closing_banner`.
- Abra as três referências locais: `local_reference_opened`.
- Abra “Aprofundar no tema”: `educational_resource_opened`.
- Abra os dois projetos: `conservation_project_opened`.
- Abra os três recursos da comunidade: `community_resource_opened`.
- Em PostHog → Activity, confira os cinco nomes e suas propriedades.
- Em Logs, filtre por `service.name = eco-consumo-web` e ambiente `development`.
  A inicialização gera `eco-consumo web application started`; os CTAs geram
  `practice guidance started`; os links externos geram `outbound resource opened`.
  Todos usam severidade `INFO`.
- Apenas no servidor de desenvolvimento, acesse `/?posthog_test=error` e depois
  `/?posthog_test=rejection`. Cada URL gera uma falha controlada após três segundos.
  Confira os eventos `$exception` e as ocorrências “Eco-Consumo PostHog smoke test”
  em Error Tracking. Volte para `/` para sair do teste. O código do teste é removido
  do build de produção.

#### Vercel e source maps

Em Vercel → projeto Eco-Consumo → Settings → Environment Variables, configure
`VITE_POSTHOG_KEY` e `VITE_POSTHOG_HOST` em **Production, Preview e Development**.
Esses valores entram no JavaScript durante o build; alterar as variáveis exige
um novo deploy. O arquivo `.env.local` não configura a Vercel.

Para o upload dos source maps, configure também no servidor de build:

- `POSTHOG_CLI_HOST=https://us.posthog.com` (host da API, diferente do host de ingestão).
- `POSTHOG_CLI_PROJECT_ID`: ID numérico em PostHog → Project settings.
- `POSTHOG_CLI_API_KEY`: chave pessoal com escopos `error tracking write` e
  `organization read`. Guarde como segredo na Vercel; nunca use prefixo `VITE_`.

Depois de configurar os valores, defina o **Build Command** da Vercel como
`yarn build:deploy`, mantenha Node **24.x** e Output Directory **dist**.
Esse comando valida as cinco variáveis, gera source maps ocultos, injeta os IDs
nos bundles, faz upload e remove os `.map` após o sucesso. Uma falha no upload
interrompe o deploy. O build local `yarn build` continua disponível sem credenciais
de upload. Publique os mesmos arquivos de `dist` processados pela CLI, sem rodar
outro build por cima.

Após o deploy, confira o upload em Error Tracking → Symbol sets e repita os cliques
no site publicado. Não use o teste de erro em produção.
Referência: [upload de source maps com a CLI oficial](https://posthog.com/docs/error-tracking/upload-source-maps/cli).

### Testes de interface e regressão visual

Use Node 24 e instale o Chromium do Playwright uma vez:

```bash
yarn install --frozen-lockfile
yarn playwright install chromium
yarn test
```

`yarn test` inicia um build de produção em uma porta separada e testa Chromium
em desktop (1440 px), celular (390 px) e celular pequeno (320 px). Verifica
carregamento da página e da imagem, ausência de erros JavaScript e assets locais
faltando, layout sem rolagem horizontal da página, títulos dos projetos, navegação
pelas seções, CTAs, abertura dos nove links externos em novas abas, menu mobile e
acesso aos cards com rolagem horizontal.

As requisições externas são interceptadas: esses testes conferem os destinos dos
links, sem validar a disponibilidade dos sites de terceiros ou a ingestão do
PostHog. Fontes de teste vêm de pacotes locais para evitar variações de rede.

```bash
yarn test:visual         # compara página completa e menu aberto com as referências
yarn test:ui             # abre a interface interativa do Playwright
yarn test:report         # abre o relatório HTML da última execução
```

As imagens de referência ficam em `tests/site.spec.js-snapshots/`. Foram geradas
no macOS com o Chromium da versão fixada do Playwright. Execute a comparação no
mesmo sistema: renderização de fontes pode variar entre sistemas operacionais.
Após uma mudança visual intencional, rode `yarn test:visual:update`, inspecione os
PNGs alterados e inclua-os no commit. Não atualize referências apenas para fazer
um teste passar. Os relatórios e traces de falhas ficam fora do Git.

O GitHub Actions executa os testes funcionais e responsivos, instalação com
lockfile congelado e lint em cada PR e push na main. As comparações por screenshot
ficam separadas, pois as referências locais são do macOS e o CI usa Ubuntu 24.04.
Playwright está fixado em 1.56.1 para permitir a execução neste macOS 13.

### Estrutura principal

```text
src/
├── components/
│   ├── Header.jsx
│   ├── MainContent.jsx
│   └── Navigation.jsx
├── App.jsx
├── App.css
└── main.jsx
```

### Conteúdo e referências

O conteúdo local é organizado por temas: Florianópolis em movimento, educação ambiental, práticas de consumo consciente, conservação da biodiversidade e histórias inspiradoras. Links externos devem apontar para páginas reais das instituições, projetos e veículos responsáveis pelas informações.

## English

### About the project

**Eco-Consumo** is an educational platform about conscious consumption, environmental preservation, and civic participation. The website turns environmental topics into simple, practical content for everyday life, with a special focus on Florianópolis, Santa Catarina, Brazil.

The experience features local news and initiatives, practical ways to reduce environmental impact, educational resources, and projects that protect the island’s biodiversity, including Projeto Tamar and Projeto Lontra.

### Goals

- Encourage more responsible consumption choices.
- Highlight environmental initiatives in Florianópolis.
- Bring environmental education closer to everyday life.
- Promote the preservation of beaches, forests, rivers, and coastal wildlife.
- Organize trusted content in an accessible and responsive experience.

### Technologies

- **React 18** — component-based interface development.
- **Vite 4** — local development and production builds.
- **JavaScript / JSX** — application logic and page composition.
- **CSS3** — responsive layout, design system, and visual accessibility.
- **React Slick** — carousel components when needed.
- **Node.js 24.x** — runtime defined for the project and deployment.
- **Vercel** — application hosting and deployment.

### Running locally

```bash
yarn install --frozen-lockfile
yarn dev
```

To create a production build:

```bash
yarn build
yarn preview
```

To check the code:

```bash
yarn lint
```

### Configure and validate PostHog

Use Node 24 (`nvm install && nvm use` if you use nvm) and Yarn 1:

```bash
yarn install --frozen-lockfile
```

Create `.env.local` at the project root. Set `VITE_POSTHOG_KEY` to the public
project token and `VITE_POSTHOG_HOST` to the project's ingestion host
(`https://us.i.posthog.com` for this project). Restart the server after changing
variables. `POSTHOG_CLI_*` variables are not required for local development.

```bash
yarn build
yarn lint
yarn eslint src/posthog.js src/posthog-logger.js src/main.jsx src/components/Header.jsx src/components/MainContent.jsx --max-warnings 0
yarn dev
```

The UI suite below checks navigation without sending data to PostHog. To confirm
actual ingestion, also validate the integration in a browser:

- Click both guidance CTAs: `practice_guidance_started`, with `entry_point` set to `hero` and `closing_banner`.
- Open all three local references: `local_reference_opened`.
- Open “Aprofundar no tema”: `educational_resource_opened`.
- Open both conservation projects: `conservation_project_opened`.
- Open all three community resources: `community_resource_opened`.
- In PostHog → Activity, check all five event names and their properties.
- In Logs, filter by `service.name = eco-consumo-web` and environment `development`.
  Startup emits `eco-consumo web application started`; guidance CTAs emit
  `practice guidance started`; external links emit `outbound resource opened`.
  All use `INFO` severity.
- On the development server only, visit `/?posthog_test=error` and then
  `/?posthog_test=rejection`. Each URL triggers a controlled failure after three
  seconds. Check `$exception` events and “Eco-Consumo PostHog smoke test” issues in
  Error Tracking. Return to `/` to leave the test. The test code is removed from
  production builds.

#### Vercel and source maps

In Vercel → Eco-Consumo project → Settings → Environment Variables, configure
`VITE_POSTHOG_KEY` and `VITE_POSTHOG_HOST` for **Production, Preview and Development**.
These values are embedded in JavaScript at build time; changing them requires a
new deployment. `.env.local` does not configure Vercel.

For source map uploads, also configure these build-server variables:

- `POSTHOG_CLI_HOST=https://us.posthog.com` (API host, different from ingestion).
- `POSTHOG_CLI_PROJECT_ID`: numeric project ID from PostHog → Project settings.
- `POSTHOG_CLI_API_KEY`: personal API key with `error tracking write` and
  `organization read` scopes. Store it as a Vercel secret; never prefix it with `VITE_`.

Once the values are configured, set Vercel's **Build Command** to
`yarn build:deploy`, Node to **24.x**, and Output Directory to **dist**. This
command validates all five variables, generates hidden source maps, injects IDs
into bundles, uploads maps, and deletes `.map` files after success. Upload failures
stop deployment. Local `yarn build` remains available without upload credentials.
Deploy the same CLI-processed `dist` files without rebuilding them afterwards.

After deployment, verify uploads in Error Tracking → Symbol sets and repeat the
clicks on the published site. Do not run error smoke tests in production.
Reference: [official CLI source map upload documentation](https://posthog.com/docs/error-tracking/upload-source-maps/cli).

### UI and visual regression tests

Use Node 24 and install Playwright's Chromium once:

```bash
yarn install --frozen-lockfile
yarn playwright install chromium
yarn test
```

`yarn test` starts a production build on a separate port and tests Chromium at
desktop (1440 px), mobile (390 px), and small mobile (320 px) sizes. It checks page
and image loading, uncaught JavaScript errors and missing local assets, page
horizontal overflow, project titles, section navigation, CTAs, all nine external
links opening new tabs, the mobile menu, and horizontally scrollable cards.

External requests are intercepted: tests verify link destinations without checking
third-party site availability or PostHog ingestion. Test fonts come from local
packages to avoid network-dependent rendering.

```bash
yarn test:visual         # compares the full page and expanded menu with baselines
yarn test:ui             # opens Playwright's interactive test UI
yarn test:report         # opens the latest HTML report
```

Baseline images are stored in `tests/site.spec.js-snapshots/`. They were generated
on macOS using the pinned Playwright Chromium version. Compare screenshots on the
same operating system, since font rendering can differ across platforms. After
an intentional visual change, run `yarn test:visual:update`, inspect changed PNGs,
and commit them. Do not update baselines just to make a failing test pass.
Failure reports and traces are excluded from Git.

GitHub Actions runs functional and responsive tests, frozen-lockfile installation,
and lint on each PR and push to main. Screenshot comparisons are separate because
local baselines use macOS and CI uses Ubuntu 24.04. Playwright is pinned to 1.56.1 to
allow execution on this machine's macOS 13.

### Main structure

```text
src/
├── components/
│   ├── Header.jsx
│   ├── MainContent.jsx
│   └── Navigation.jsx
├── App.jsx
├── App.css
└── main.jsx
```

### Content and references

Local content is organized around Florianópolis in motion, environmental education, conscious consumption practices, biodiversity conservation, and inspiring stories. External links should point to real pages from the institutions, projects, and publishers responsible for the information.
