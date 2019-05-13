import { ADD_ITEM } from "../Actions";

const initialState = {
  todos: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    default:
      return state;
  }
};
