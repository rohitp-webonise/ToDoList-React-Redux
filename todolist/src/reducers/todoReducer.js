import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "../actions/todoActions";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  todos: [], 
};

const todoReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case ADD_TODO:
      const newTodo = action.payload;
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    
    case TOGGLE_TODO:
      const toggleTodoId = action.payload;
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === toggleTodoId ? { ...todo, completed: !todo.completed } : todo
        ),
      };

    case DELETE_TODO:
      const deleteTodoId = action.payload;
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== deleteTodoId),
      };

    default:
      return state;
  }
};

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  todoReducer:  todoReducer,

});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
