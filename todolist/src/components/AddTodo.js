import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/todoActions";
import "../css/AddTodo.css";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState("");

  const handleInputChange = (event) => {
    setTodoText(event.target.value);
  };

  const handleAddTodo = () => {
    if (todoText.trim() !== "") {
      dispatch(addTodo(todoText));
      setTodoText("");
    }
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        placeholder="Enter todo..."
        value={todoText}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
