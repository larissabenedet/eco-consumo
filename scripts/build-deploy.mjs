import { spawnSync } from "node:child_process";
import { build, loadEnv } from "vite";

// Vite exposes only VITE_* to the browser; CLI credentials stay in the build process.
const env = { ...loadEnv("production", process.cwd(), ""), ...process.env };
const required = [
  "VITE_POSTHOG_KEY",
  "VITE_POSTHOG_HOST",
  "POSTHOG_CLI_API_KEY",
  "POSTHOG_CLI_PROJECT_ID",
  "POSTHOG_CLI_HOST",
];
const missing = required.filter((name) => !env[name]?.trim());
if (missing.length) {
  throw new Error(`Configure the deployment variables: ${missing.join(", ")}`);
}

await build({ build: { sourcemap: "hidden" } });
const result = spawnSync("node_modules/.bin/posthog-cli", [
  "sourcemap", "process", "--directory", "dist/assets",
  "--release-name", "eco-consumo-web", "--delete-after",
], { env, stdio: "inherit" });
if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);
