export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";

// Action Creators
export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: {
      id: Date.now(),
      text,
      completed: false,
    },
  };
};

export const toggleTodo = (todoId) => {
  return {
    type: TOGGLE_TODO,
    payload: todoId,
  };
};

export const deleteTodo = (todoId) => {
  return {
    type: DELETE_TODO,
    payload: todoId,
  };
};
