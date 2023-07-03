import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { deleteTodo } from "../actions/todoActions";
import "../css/TodoList.css";

const TodoList = () => {
  const todos = useSelector((state) => state.todoReducer.todos);
  const dispatch = useDispatch();

  const handleDeleteTodo = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  console.log(todos);
  if (!todos.length) {
    return (
      <div className="todo-list">
        <p>No todos available.</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={handleDeleteTodo} />
      ))}
    </div>
  );
};

export default TodoList;
