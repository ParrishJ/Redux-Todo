export const ADD_ITEM = "ADD_ITEM";

export const addItem = itemName => {
  return {
    type: ADD_ITEM,
    payload: itemName
  };
};
