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
  // filtramos en una array las tareas o todos completados 
  const completedTodos = todos.filter(todo=>!!todo.completed).length;
  const totalTodos= todos.length;
  let searchedTodos =[];
  if(!searchValue.length >=1){
    searchedTodos=todos;
  }else{
    searchedTodos=todos.filter(todo=> (todo.text.toLowerCase().includes(searchValue.toLowerCase())));
  }
  const completeTodos = (text) => { 
    const todoIndex = todos.findIndex(todo => todo.text == text)
    // crear una [nueva lista] de TODOS para enviarle el cambio de los todos 
    // no olvidemos que debemos setear los todos en const [todos, setTodos]
    const newTodos = [...todos]; // con el spread Operator inyectamos a la [nueva lista] todos los elementos de la lista [todo]
    newtodos[todoIndex].completed=true;// marcamos con true ese todo que cumple con la condicion de tener el mismo texto
    setTodos(newTodos);//vamos a causar un rerender donde vamos a enviar los nuevos cambios en la nueva lista
  
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
          completed={todo.completed}
          onComplete={()=>completeTodos(todo.text)}// llama a nuestra funcion de la linea 27 y le manda el texto de ese todo
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
