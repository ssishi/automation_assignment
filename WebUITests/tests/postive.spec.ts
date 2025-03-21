import { test, expect, type Page } from "@playwright/test";
import { WeatherHome } from "../pom/home.pom";

test.describe("Positive tests", () => {
  let home: WeatherHome;

  test.beforeEach(async ({ page }) => {
    home = new WeatherHome(page);
    await page.goto("/React-WeatherApp");
  });

  test("Verify Default Location Weather Display", async ({ page }) => {
    await expect(home.countryName).toHaveText("Romania");
    await expect(home.currentTempData).toHaveText(/°C|°F/);
    await expect(home.cityName).toHaveText("Timișoara");
  });

  test("Verify Temperature Unit Toggle (°C/°F)", async ({ page }) => {
    await home.toggleTheme();
    expect(await home.isThemeLight()).toBe(false);
  });

  test("Verify Theme Toggle (Light/Dark Mode)", async ({ page }) => {
    await home.toggleTheme();
    expect(await home.isThemeLight()).toBe(false);

    await home.toggleTheme();
    expect(await home.isThemeLight()).toBe(true);
  });

  test("Verify Hourly Weather Data Display", async ({ page }) => {});

  test("Verify Daily Weather Forecast Display", async ({ page }) => {});
});
