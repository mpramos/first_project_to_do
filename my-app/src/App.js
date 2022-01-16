import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import {TodoSearch} from "./TodoSearch";
// import './App.css';
// creamos una lista por defecto por mientras
const defaultTodos = [
  { text: "Ordenar el cuarto", completed: true },
  { text: "Limpiar la cocina", completed: true },
  { text: "Lavar la ropa", completed: false },
  {text: "Lavar los platos", completed: false}
];
function App() {
  // creamos un hook de estados para guardar nuestras listas de tareas  en todos 
  const [todos, setTodos]= React.useState(defaultTodos)
  // creamos un hook de estado para mandar como prop al componenteSetSearch 
  const [searchValue,setSearchValue] = React.useState('')
  // completedTodos cuenta los todos completados 
  const completedTodos = todos.filter(todo=>!!todo.completed).length;
  // cuenta el total de todos
  const totalTodos= todos.length
  return (
    <React.Fragment>
      <TodoCounter 
       totalTodos={totalTodos}
       completedTodos={completedTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem 
          key={todo.text}
          text={todo.text}
          completed={todo.completed} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
