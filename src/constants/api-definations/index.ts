import { CONSTANTS } from "../constant";

export const MENU = {
  GET_MENU: () => ({
    url: "/categories.php",
    method: CONSTANTS.HTTP_METHOD.GET,
    params: {},
  }),
  GET_CATEGORY: (keyName: any) => ({
    url: `/filter.php?c=${keyName}`,
    method: CONSTANTS.HTTP_METHOD.GET,
    params: {},
  }),
  GET_RANDOM_MEAL: () => ({
    url: `/random.php`,
    method: CONSTANTS.HTTP_METHOD.GET,
    params: {},
  }),
};
