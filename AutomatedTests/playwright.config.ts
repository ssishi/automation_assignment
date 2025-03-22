import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  timeout: 10000,
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [["line"], ["html"]],
  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
    permissions: ["geolocation"],
    video: {
      mode: "on",
    },
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
