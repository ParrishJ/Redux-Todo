import { ADD_ITEM, TOGGLE_COMPLETE } from "../Actions";

const initialState = {
  todos: [{ name: "", completed: false, id: 999 }]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        todos: [...state.todos, { name: action.payload, completed: false }]
      };
    case TOGGLE_COMPLETE:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed
            };
          }
          return todo;
        })
      };
    default:
      return state;
  }
};
