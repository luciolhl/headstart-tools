export const getBot = (itemKey) => {
  let item = localStorage.getItem(itemKey);
  return JSON.parse(item);
};

export const setBot = (itemKey, itemValue) => {
  localStorage.setItem(itemKey, JSON.stringify(itemValue));
};
