# **All Test Cases**

## **Web UI Tests - The Weather App**

### **1. Verify Default Location Weather Display**

**Description:** Ensure that the weather app displays the weather for the default location when opened.

- **Steps:** Open the weather app - No input required - Weather for the default location ("Timișoara") should be displayed.

---

### **2. Verify Temperature Unit Toggle (°C/°F)**

**Description:** Ensure that the user can switch between Celsius and Fahrenheit.

- **Steps:** Click on the °C/°F toggle button - Toggle to Fahrenheit - Temperature values should convert from °C to °F.
- **Steps:** Click on the °C/°F toggle button again - Toggle back to Celsius - Temperature values should revert to °C.

---

### **3. Verify Theme Toggle (Light/Dark Mode)**

**Description:** Ensure that the user can switch between light and dark mode.

- **Steps:** Click on the moon/sun icon in the top-right corner - Switch to dark mode - The app should apply a dark theme.
- **Steps:** Click on the icon again - Switch back to light mode - The app should apply a light theme.

---

### **4. Verify Hourly Weather Data Display**

**Description:** Ensure that hourly weather forecast data is displayed correctly.

- **Steps:** Open the weather app - No input required - The app should display hourly weather data with temperature and icons.
- **Steps:** Compare the displayed hourly forecast with the default values - 9:00 (21°C, sunny), 10:00 (21°C, sunny), etc. - Data should match expected default values.

---

## **API Tests - The Smartphone C# API**

### **1. Add a Valid Processor**

**Description:** Test the successful addition of a new smartphone processor with valid input data.

- **Steps:** Send a POST request to the `AddProcessor` endpoint - `processorID`: 101, `processorName`: "Snapdragon 888" - Response should return a success string, status code 200 OK, and the processor should be present in the database.

---

### **2. Add Processor with Duplicate ID**

**Description:** Test adding a processor with a processorID that already exists.  
**Negative**

- **Steps:** Send a POST request to the `AddProcessor` endpoint - `processorID`: 101, `processorName`: "Exynos 2100" - Response should return a duplicate ID error, status code 400 Bad Request, and no changes in the database.

---

### **3. Add Processor with Invalid Data Types**

**Description:** Test the addition of a processor with invalid data types for fields.  
**Negative**

- **Steps:** Send a POST request to the `AddProcessor` endpoint - `processorID`: "InvalidID", `processorName`: 12345 - Response should return a data type error, status code 400 Bad Request, and no changes in the database.

### **4. Retrieve All Processors with Valid Request**

**Description:** Verify that all smartphone processors are retrieved when the database contains records.

- **Steps:** Populate the in-memory database with multiple processor records - Send a GET request to the `GetAllProcessors` endpoint - The response should return a list of all processors with correct `processorID` and `processorName` values.

---

### **5. Verify Response Schema Integrity**

**Description:** Ensure that the response schema is consistent and matches the expected structure.

- **Steps:** Send a GET request to the `GetAllProcessors` endpoint - No specific input required - The response should match the expected schema with correct data types.

### **6. Retrieve All Brands with Valid Request**

**Description:** Verify that all smartphone brands are retrieved when the database contains records.

- **Steps:** Send a GET request to the `GetAllBrands` endpoint - No specific input required - The response should return a list of all brands with correct `brandID`, `brandName`, and `brandNetWorth` values.

### **7. Verify Response Schema Integrity**

**Description:** Ensure that the response schema is consistent and matches the expected structure.

- **Steps:** Send a GET request to the `GetAllBrands` endpoint - No specific input required - The response should match the expected schema with correct data types.

### **8. Retrieve All Smartphones with Valid Request**

**Description:** Verify that all smartphone information is retrieved when the database contains records.

- **Steps:** Send a GET request to the `/GetAllSmartphones` endpoint - No specific input required - The response should return a list of all smartphones with correct details, including `modelID`, `modelName`, `specID`, `brandID`, `price`, `brandName`, `brandNetWorth`, `storageSpace`, `memory`, `batterySize`, `processorID`, `numberOfCameras`, `hasWirelessCharging`, and `processorName`.

---

### **9. Verify Response Schema Integrity**

**Description:** Ensure that the response schema is consistent and matches the expected structure.

- **Steps:** Send a GET request to the `/GetAllSmartphones` endpoint - No specific input required - The response should match the expected schema with correct data types for all fields.

### **10. Validate the Smartphone Properties**

**Description:** Ensure that the response schema has correct values for each field

- **Steps:** Send a GET request to the `/GetAllSmartphones` endpoint - No specific input required - The response should return a list of smart phones with correct details, and valid data, i.e., price should contain currency symbol, brand worth should also contain currency symbol, storage should either be in Gigabytes (GB), Megabytes (MB) or Kilobytes (KB), memory should only be in GB, or MB and battery size should me in Milliampere (mAp)

---
