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
  const [todos, setTodos]= React.useState(defaultTodos)
  const [searchValue,setSearchValue] = React.useState('')
  const completedTodos = todos.filter(todo=>!!todo.completed).length;
  const totalTodos= todos.length;
  let searchedTodos =[];
  if(!searchValue.length >=1){
    searchedTodos=todos;
  }else{
    searchedTodos=todos.filter(todo=> (todo.text.toLowerCase().includes(searchValue.toLowerCase())));
  }
  const completeTodos = (text) => { // text es identificador de cada todo
    // extraemos la posicion del todo completado para poder hacer lo que quedramos con el(ejemplo:eliminarlo)
    const todoIndex = todos.findIndex(todo => todo.text == text)
    //SEGUNDA ALTERNATIVA
    todos[todoIndex].completed=true;
    // PRIMERA ALTERNATIVA
    // todos[todoIndex] = {
    //   text : todos[todoIndex].text,
    //   completed: true ,
    // };
  }
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
        {searchedTodos.map((todo) => (
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
