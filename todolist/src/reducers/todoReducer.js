import { ADD_TODO, TOGGLE_TODO } from '../actions/todoActions';

const initialState = {
  todos: []
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload]
      };
    case TOGGLE_TODO:
      return {
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        })
      };
    default:
      return state;
  }
};

export default todoReducer;