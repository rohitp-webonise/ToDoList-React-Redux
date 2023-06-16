import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../actions/todoActions';
import '../css/TodoItem.css';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggleTodo = () => {
    dispatch(toggleTodo(todo.id));
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggleTodo}
      />
      <span>{todo.text}</span>
    </div>
  );
};

export default TodoItem;
