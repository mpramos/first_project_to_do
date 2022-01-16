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
  // vamos a preguntar si han escrito algo en nuestra searchValue
  if(!searchValue.length >=1){
    // por if, vamos a mostrar todos los TODOS
    searchedTodos=todos;
  }else{
    // convertimos a minusculas
    // filtramos el texto que escribimos en nuestro input de busqueda
    searchedTodos=todos.filter(todo=> {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      // se evalua si son iguales y si es asi se retorna del metodo filter
      return todoText.includes(searchText);
    });
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
