
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './css/App.css';

const App = () => {
  return (
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
      <div className="app">
        <h1>Todo List</h1>
        <AddTodo />
        <TodoList />
      </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
