import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions/todoActions';
import '../components/TodoItem.css';

const TodoItem = ({ todo, toggleTodo }) => {
  const { id, text, completed } = todo;

  const handleToggle = () => {
    toggleTodo(id);
  };

  return (
    <div className={`todo-item ${completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={completed}
        onChange={handleToggle}
      />
      <label>{text}</label>
    </div>
  );
};

export default connect(null, { toggleTodo })(TodoItem);
