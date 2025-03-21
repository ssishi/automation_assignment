import { test, expect } from "@playwright/test";
import { WeatherHome } from "../../pom/home.pom";

test.describe("Weather App Tests", () => {
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
    await home.toggleTemperatureUnit("F");
    await expect(home.currentTempData).toHaveText(/°F/);

    const hourlyDataFarenheit = await home.getAllHourlyWeatherData();

    for (const item of hourlyDataFarenheit) {
      expect(item.temperature).toMatch(/°F/);
    }

    await home.toggleTemperatureUnit("C");
    await expect(home.currentTempData).toHaveText(/°F/);

    let hourlyDataCelcius = await home.getAllHourlyWeatherData();

    for (const item of hourlyDataCelcius) {
      expect(item.temperature).toMatch(/°C/);
    }
  });

  test("Verify Theme Toggle (Light/Dark Mode)", async ({ page }) => {
    await home.toggleTheme();
    expect(await home.isThemeLight()).toBe(false);

    await home.toggleTheme();
    expect(await home.isThemeLight()).toBe(true);
  });

  test("Verify Hourly Weather Data Display", async ({ page }) => {
    const items = await home.getAllHourlyWeatherData();
    const timeRegex = /^(0?\d|1\d|2[0-3]):00$/;

    await expect(home.hourlyWeatherText).toHaveText("Hourly");

    expect(items).toHaveLength(24); // 24 hours

    for (const item of items) {
      expect(item.timeHour).toMatch(timeRegex);
    }
  });
});
