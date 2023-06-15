import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoActions';
import '../components/AddTodo.css';

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      addTodo(text);
      setText('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        placeholder="Add a new todo"
        value={text}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default connect(null, { addTodo })(AddTodo);