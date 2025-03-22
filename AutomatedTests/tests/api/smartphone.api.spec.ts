import { test, expect, APIRequestContext } from "@playwright/test";
import {
  postAddProcessorHttp,
  getAllBrandsHttp,
  getAllProcessorsHttp,
  getAllSmartphonesHttp,
} from "../../http/smartphone.http";

test.describe("Smartphone API Tests", () => {
  let apiContext: APIRequestContext;

  test.beforeEach(async ({ playwright }) => {
    apiContext = await playwright.request.newContext({
      baseURL: "http://localhost:5000",
      extraHTTPHeaders: {
        "Content-Type": "application/json",
      },
      ignoreHTTPSErrors: true,
    });
  });

  test.afterEach(async () => {
    await apiContext.dispose();
  });

  test("Add a Valid Processor - /AddProcessor", async () => {
    const addProcessorRequest = await postAddProcessorHttp(apiContext, {
      processorId: "1",
      processorName: "Snapdragon 888",
    });

    const response = await addProcessorRequest.text();

    expect(response).toBe("New process added.");
    expect(addProcessorRequest.status()).toBe(200);
    expect(addProcessorRequest.statusText()).toBe("OK");
  });

  test("Add Processor with Duplicate ID - /AddProcessor", async () => {
    await postAddProcessorHttp(apiContext, {
      processorId: "5",
      processorName: "Snapdragon 888",
    });

    const addDuplicateProcessorRequest = await postAddProcessorHttp(
      apiContext,
      {
        processorId: "5",
        processorName: "Snapdragon 888",
      }
    );

    const response = await addDuplicateProcessorRequest.text();

    expect(response).toBe("Processor ID already exists.");
    expect(addDuplicateProcessorRequest.status()).toBe(400);
    expect(addDuplicateProcessorRequest.statusText()).toBe("Bad Request");
  });

  test("Add Processor with Invalid Data Types - /AddProcessor", async () => {
    const addProcessorRequest = await postAddProcessorHttp(apiContext, {
      processorId: "InvalidID",
      processorName: 888,
    });

    const response = await addProcessorRequest.text();

    expect(response).toBe("Invalid data types."); // Potential good message to display to the user
    expect(addProcessorRequest.status()).toBe(400);
    expect(addProcessorRequest.statusText()).toBe("Bad Request");
  });

  test("Add Processor with ID greater than 7 - Boundary Value - /AddProcessor", async () => {
    const addProcessorRequest = await postAddProcessorHttp(apiContext, {
      processorId: "8",
      processorName: "Apple A14 Bionic",
    });

    const response = await addProcessorRequest.text();

    expect(response).toBe("Processor Information is not valid.");
    expect(addProcessorRequest.status()).toBe(400);
    expect(addProcessorRequest.statusText()).toBe("Bad Request");
  });

  test("Retrieve All Processors with Valid Request - /GetAllProcessors", async () => {
    const allProcessorsRequest = await getAllProcessorsHttp(apiContext);

    expect(allProcessorsRequest.status()).toBe(200);
    expect(allProcessorsRequest.statusText()).toBe("OK");
  });

  test("Verify Response Schema Integrity - /GetAllProcessors", async () => {
    const allProcessorsRequest = await getAllProcessorsHttp(apiContext);
    const response = await allProcessorsRequest.json();

    expect(Array.isArray(response)).toBe(true);

    response.forEach((processor) => {
      expect(processor).toHaveProperty("processorID");
      expect(processor).toHaveProperty("processorName");

      expect(typeof processor.processorID).toBe("number");
      expect(typeof processor.processorName).toBe("string");
    });
  });

  test("Retrieve All Brands with Valid Request - /GetAllBrands", async () => {
    const allBrandsRequest = await getAllBrandsHttp(apiContext);

    const response = await allBrandsRequest.json();

    expect(response.length).toBeGreaterThan(0);
    expect(allBrandsRequest.status()).toBe(200);
    expect(allBrandsRequest.statusText()).toBe("OK");
  });

  test("Verify Response Schema Integrity - /GetAllBrands", async () => {
    const allBrandsRequest = await getAllBrandsHttp(apiContext);
    const response = await allBrandsRequest.json();

    expect(Array.isArray(response)).toBe(true);

    if (response.length > 0) {
      response.forEach((brand) => {
        expect(brand).toHaveProperty("brandID");
        expect(brand).toHaveProperty("brandName");

        expect(typeof brand.brandID).toBe("number");
        expect(typeof brand.brandName).toBe("string");
      });
    }
  });

  test("Retrieve All Smartphones with Valid Request - /GetAllSmartphones", async () => {
    const allSmartphonesRequest = await getAllSmartphonesHttp(apiContext);

    expect(allSmartphonesRequest.status()).toBe(200);
    expect(allSmartphonesRequest.statusText()).toBe("OK");
  });

  test("Verify Response Schema Integrity - /GetAllSmartphones", async () => {
    const allSmartphonesRequest = await getAllSmartphonesHttp(apiContext);
    const response = await allSmartphonesRequest.json();

    expect(Array.isArray(response)).toBe(true);

    if (response.length > 0) {
      response.forEach((smartphone) => {
        expect(smartphone).toHaveProperty("modelID");
        expect(smartphone).toHaveProperty("modelName");
        expect(smartphone).toHaveProperty("specID");
        expect(smartphone).toHaveProperty("smartphoneName");
        expect(smartphone).toHaveProperty("brandName");
        expect(smartphone).toHaveProperty("brandNetWorth");
        expect(smartphone).toHaveProperty("storageSpace");
        expect(smartphone).toHaveProperty("memory");
        expect(smartphone).toHaveProperty("batterySize");
        expect(smartphone).toHaveProperty("processorID");
        expect(smartphone).toHaveProperty("numberOfCameras");
        expect(smartphone).toHaveProperty("hasWirelessCharging");
        expect(smartphone).toHaveProperty("processorName");

        expect(typeof smartphone.smartphoneID).toBe("number");
      });
    }
  });

  test("Validate Smartphone Properties - /GetAllSmartphones", async () => {
    const allSmartphonesRequest = await getAllSmartphonesHttp(apiContext);
    const response = await allSmartphonesRequest.json();

    expect(Array.isArray(response)).toBe(true);

    if (response.length > 0) {
      response.forEach((smartphone) => {
        // Validate price contains the dollar sign
        expect(smartphone.price).toMatch(/^\$\d+/);

        // Validate brandNetWorth contains the dollar sign
        expect(smartphone.brandNetWorth).toMatch(/^\$\d+/);

        // Validate storageSpace contains GB, MB, KB, or TB
        expect(smartphone.storageSpace).toMatch(/\d+\s?(GB|MB|KB|TB)$/);

        // Validate memory contains GB or MB
        expect(smartphone.memory).toMatch(/\d+\s?(GB|MB)$/);

        // Validate batterySize contains mAh
        expect(smartphone.batterySize).toMatch(/\d+\s?mAh$/);
      });
    }
  });
});
