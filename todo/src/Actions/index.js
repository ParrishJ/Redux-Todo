export const ADD_ITEM = "ADD_ITEM";

export const addItem = itemName => {
  return {
    type: ADD_ITEM,
    payload: itemName
  };
};

export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";

export const toggleComplete = id => {
  return {
    type: TOGGLE_COMPLETE,
    payload: id
  };
};
