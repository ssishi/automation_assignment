import { Page, type Locator } from "@playwright/test";

/**
 * WeatherHome class Page Object Model that contains all the locators and 
 * methods for the Weather Home page
 */
export class WeatherHome {
  readonly page: Page;
  readonly cityName: Locator;
  readonly countryName: Locator;
  readonly currentTempData: Locator;
  readonly temperatureUnitToggleF: Locator;
  readonly temperatureUnitToggleC: Locator;
  readonly themeButton: Locator;
  readonly locationField: Locator;
  readonly hourlyWeatherData: Locator;
  readonly hourlyWeatherText: Locator;
  readonly dailyItemsData: Locator;
  readonly main: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cityName = page.locator(".city");
    this.countryName = page.locator(".country");
    this.temperatureUnitToggleF = page.locator(
      "//span[normalize-space()='°F']"
    );
    this.temperatureUnitToggleC = page.locator(
      "//span[normalize-space()='°C']"
    );
    this.currentTempData = page.locator(
      "div[class='details'] label[class='temp']"
    );
    this.themeButton = page.locator(".button-theme");
    this.locationField = page.locator(
      "input[placeholder='Enter your location']"
    );
    this.hourlyWeatherData = page.locator(".hourly-items-container");
    this.hourlyWeatherText = page.locator(
      "div[class='hourly'] label[class='title']"
    );
    this.dailyItemsData = page.locator("//div[@class='daily-items-container']");
    this.main = page.locator("main");
  }

  /**
   * Toggles the theme of the application
   */
  async toggleTheme() {
    await this.themeButton.click();
  }

  /**
   * Toggle the theme of the application
   * @returns true if the theme is light, false otherwise
   */
  async isThemeLight() {
    const mainClass = await this.main.getAttribute("class");
    return mainClass?.includes("light") ?? false;
  }

  /**
   * Toggle the temperature unit
   * @param tempUnit F or C
   */
  async toggleTemperatureUnit(tempUnit: string) {
    if (tempUnit === "F") {
      await this.temperatureUnitToggleF.click();
      return;
    }
    await this.temperatureUnitToggleC.click();
  }

  /**
   * Gets all hourly weather data
   * @returns an array of hourly weather data
   */
  async getAllHourlyWeatherData() {
    const weatherData: { timeHour: string; temperature: string }[] = [];
    const hourlyItems = this.hourlyWeatherData.locator(".hourly-item");

    const count = await hourlyItems.count();

    for (let i = 0; i < count; i++) {
      const timeHour = await hourlyItems
        .nth(i)
        .locator("label.hour")
        .innerText();

      const temperature = await hourlyItems
        .nth(i)
        .locator("label.temp")
        .innerText();

      weatherData.push({ timeHour, temperature });
    }

    return weatherData;
  }
}
