import React from 'react';
import './style.css';
import store from './store/store';
import { Provider } from 'react-redux';
import Todolist from './Todolist';
export default function App() {
  return (
    <Provider store={store}>
      <div className="betterview">
        <h1>To-do App!</h1>
        <Todolist></Todolist>
      </div>
    </Provider>
  );
}
