import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../actions/todoActions';

const initialState = {
  todos: getTodosFromLocalStorage(),
};

function getTodosFromLocalStorage() {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = action.payload;
      const updatedTodos = [...state.todos, newTodo];
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return {
        ...state,
        todos: updatedTodos,
      };

    case TOGGLE_TODO:
      const toggleTodoId = action.payload;
      const toggledTodos = state.todos.map(todo =>
        todo.id === toggleTodoId ? { ...todo, completed: !todo.completed } : todo
      );
      localStorage.setItem('todos', JSON.stringify(toggledTodos));
      return {
        ...state,
        todos: toggledTodos,
      };

    case DELETE_TODO:
      const deleteTodoId = action.payload;
      const filteredTodos = state.todos.filter(todo => todo.id !== deleteTodoId);
      localStorage.setItem('todos', JSON.stringify(filteredTodos));
      return {
        ...state,
        todos: filteredTodos,
      };

    default:
      return state;
  }
};

export default todoReducer;
