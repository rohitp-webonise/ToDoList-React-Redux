import React from 'react';
//import { useDispatch } from 'react-redux';
//import { toggleTodo } from '../actions/todoActions';
import '../css/TodoItem.css';

const TodoItem = ({ todo,onDelete }) => {


  const handleDelete = () => {
    onDelete(todo.id);
  };

  return (
    <div className={`todo-item`}>
      {/* <input
        type="checkbox"
        checked={todo.completed}
       // onChange={handleToggleTodo}
      /> */}
      <span>{todo.text}</span>
      <button onClick={handleDelete} className="delete-button">Delete</button>
    </div>
  );
};

export default TodoItem;
