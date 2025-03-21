### **Positive Test Cases**

#### **1. Verify Default Location Weather Display**  
**Description:** Ensure that the weather app displays the weather for the default location when opened.  
**Positive**  
- **Steps:** Open the weather app - No input required - Weather for the default location (e.g., "Timișoara") should be displayed.

#### **2. Verify Temperature Unit Toggle (°C/°F)**  
**Description:** Ensure that the user can switch between Celsius and Fahrenheit.  
**Positive**  
- **Steps:** Click on the °C/°F toggle button - Toggle to Fahrenheit - Temperature values should convert from °C to °F.  
- **Steps:** Click on the °C/°F toggle button again - Toggle back to Celsius - Temperature values should revert to °C.

#### **3. Verify Search Functionality for a Valid Location**  
**Description:** Ensure that users can search for a valid city and see its weather.  
**Positive**  
- **Steps:** Enter "New York" in the search bar - Submit search - Weather details for "New York" should be displayed.

#### **4. Verify Hourly Weather Data Display**  
**Description:** Ensure that hourly weather forecast data is displayed correctly.  
**Positive**  
- **Steps:** Open the weather app - No input required - The app should display hourly weather data with temperature and icons.

#### **5. Verify Daily Weather Forecast Display**  
**Description:** Ensure that daily weather data is shown correctly.  
**Positive**  
- **Steps:** Open the weather app - No input required - The app should display daily forecast information for at least 7 days.

---

### **Negative Test Cases**

#### **6. Verify Error Message for an Invalid Location Search**  
**Description:** Ensure that searching for an invalid location displays an appropriate error message.  
**Negative**  
- **Steps:** Enter "XYZ123" in the search bar - Submit search - An error message like "Location not found" should appear.

#### **7. Verify Application Behavior with No Internet Connection**  
**Description:** Ensure the app handles internet connectivity loss gracefully.  
**Negative**  
- **Steps:** Disconnect the internet - Open the weather app - An error message like "No internet connection" should be displayed.

#### **8. Verify Temperature Unit Toggle Without Weather Data Loaded**  
**Description:** Ensure that the temperature toggle does not break the app when no weather data is available.  
**Negative**  
- **Steps:** Open the app with no internet connection - Try toggling °C/°F - The app should not crash, and an appropriate message should appear.

#### **9. Verify Empty Search Input Handling**  
**Description:** Ensure that clicking search with an empty input does not break the app.  
**Negative**  
- **Steps:** Click on the search button without entering a location - No input used - An error message like "Please enter a location" should appear.

#### **10. Verify UI Behavior for Extremely Large Location Names**  
**Description:** Ensure that entering an excessively long city name does not break the UI.  
**Negative**  
- **Steps:** Enter a very long city name (e.g., 200 characters) in the search bar - Submit search - The UI should remain responsive, and an error message should be displayed if necessary.
