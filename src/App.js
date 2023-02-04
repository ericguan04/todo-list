import React, { useEffect, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { Typography } from '@mui/material';

const LOCAL_STOARGE_KEY = "react-todo-list-todos"

function App() {
  const [todos, setTodos] = useState([]);

  //Method used to save tasks after reloading the page
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STOARGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  //todos.length > 0 makes sure that at least task is present before saving
  useEffect(() => {
    if (todos.length > 0) { //Solves issue of returning an empty array upon reloading page
      localStorage.setItem(LOCAL_STOARGE_KEY, JSON.stringify(todos));
    }
  }, [todos]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="App">
      <Typography style={{ padding: 16 }} variant='h1'>TodoList App</Typography>
      <TodoForm addTodo={addTodo} />
      <TodoList 
        todos={todos} 
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
        />
    </div>
  );
}

export default App;
