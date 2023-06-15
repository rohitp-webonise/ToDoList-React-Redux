import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import '../components/TodoList.css';

const TodoList = ({ todos }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(TodoList);
