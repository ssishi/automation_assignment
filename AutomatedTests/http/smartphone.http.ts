import { APIRequestContext } from "@playwright/test";

const HEADERS = {
  Accept: "*/*",
  "Content-Type": "application/json",
};

/**
 * A POST method to add a processor
 * @param context Playwright APIRequestContext
 * @param body The body of the request
 * @returns Adds a new processor to the database
 */
const postAddProcessorHttp = async (
  context: APIRequestContext,
  body: { processorId: any; processorName: any }
) => {
  return await context.post("/AddProcessor", {
    data: { ...body },
    headers: HEADERS,
  });
};

/**
 * A GET method to get all brands
 * @param context Playwright APIRequestContext
 * @returns All brands in the database
 */
const getAllBrandsHttp = async (context: APIRequestContext) => {
  return await context.get("/GetAllBrands", {
    headers: HEADERS,
  });
};

/**
 * A GET method to get all processors
 * @param context Playwright APIRequestContext
 * @returns All processors in the database
 */
const getAllProcessorsHttp = async (context: APIRequestContext) => {
  return await context.get("/GetAllProcessors", {
    headers: HEADERS,
  });
};

/**
 * A GET method to get all smartphones
 * @param context Playwright APIRequestContext
 * @returns All smartphones in the database
 */
const getAllSmartphonesHttp = async (context: APIRequestContext) => {
  return await context.get("/GetAllSmartphones", {
    headers: HEADERS,
  });
};

export {
  postAddProcessorHttp,
  getAllBrandsHttp,
  getAllProcessorsHttp,
  getAllSmartphonesHttp,
};
