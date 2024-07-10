/**
 * Set `Key-Value` pair in browser storage
 * @param {String} key
 * @param {Object} value
 * @returns {void}
 */
export const setLocalStorage = (key: string, value: object): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

/**
 * Get Object Data according to corresponding key
 * @param {String} key
 * @returns {undefined | Object}
 */
export const getLocalStorage = (key: string): any => {
  if (!key) return "";
  const data = localStorage.getItem(key);
  if (!data) return "";
  const parsedData = JSON.parse(data);
  return parsedData;
};
