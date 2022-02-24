// import logo from './logo.svg';
// import './App.css';
import React from "react";
import {CreateTodoButton} from "./CreateTodoButton";
import {TodoCounter} from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import {TodoList} from "./TodoList";
import { TodoSearch } from "./TodoSearch";

const todos = [
  { text: "cortar cebolla", completed: false },
  { text: "tomar el curso de react", completed: true },
  { text: "llorar con la llorona", completed: false },
];
function App(props) {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.text} text = {todo.text} completed ={todo.completed}/>
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
