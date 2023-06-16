import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import '../css/TodoList.css';

const TodoList = () => {
  const todos = useSelector(state => state.todos);

  if (!Array.isArray(todos)) {
    return (
      <div className="todo-list">
        <p>No todos available.</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
