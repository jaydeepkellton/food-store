export const CONSTANTS = {
  BASE_URL: process.env.REACT_APP_API_BASE_URL as string,
  NO_DATA_FOUND: "No Data Found",
  ERROR_TEXT: "Error",
  WARNING_TEXT: "Warning",
  HTTP_METHOD: {
    GET: "get",
    POST: "post",
    PUT: "put",
    PATCH: "patch",
    DELETE: "delete",
  },
  LISTING_LIMIT_OPTIONS: [
    { label: 10, value: 10 },
    { label: 20, value: 20 },
    { label: 50, value: 50 },
  ],
};
