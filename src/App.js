import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/header';
import TodoList from './containers/todo-list.container';
import Auth from './containers/auth.container';

function App() {
  return (
    <>
      <Header />
      <Auth />
      <TodoList />
    </>
  );
}

export default App;
