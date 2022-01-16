import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import {TodoSearch} from "./TodoSearch";
// import './App.css';
const todos = [
  { text: "Ordenar el cuarto", completed: false },
  { text: "Limpiar la cocina", completed: false },
  { text: "Lavar la ropa", completed: false },
];
function App(props) {
  return (
    // <React.Fragment> es una etiqueta invisible se usa para envolver varias etiquetas
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {/* se va a renderizar cada uno de mis todo-Item, desde mi array todos */}
        {todos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
