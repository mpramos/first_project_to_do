// import './App.css';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton.js';


const defaultTodos = [
  { text: "cortar cebolla", completed: true },
  { text: "Tomar cursos", completed: true },
  { text: "Llorar con la llorona", completed: false }
]
function App() {
  const [todos,setTodos]=React.useState(defaultTodos)
  const [searchValue, setSearchValue]=React.useState('')
  // const completedTodos=todos.filter(todo=>todo.completed==true)
  const completedTodos=todos.filter(todo=>!!todo.completed).length//otra forma de hacerlo 
  const totalTodos=todos.length;
  let searchedTodos=[];//creando un array vacio **
  if(!searchValue.length>=1){//vamos a ver si es mayor a uno para ver 
    //si han escrito o no han escrito nada
    searchedTodos=todos;// si no es cierto entonces va a mostrar la lista de todos que ya tenia
  }else{//pero si esta condicion no se cumple, osea si los usuarios ya escribieron aunq sea una
    //letra entonces vamos a filtrar los "todos" que ya guardamos en esa lista de **
    searchedTodos=todos.filter(todo=>{
      //llamamos a cada uno de los todos y estamos convirtiendo a minusculas
      const todoText=todo.text.toLowerCase();
      //lo que sea que escriban nuestros usuarios tiene que estar en minuscula
      const searchText=searchValue.toLowerCase();
      return todoText.includes(searchText);//estamos filtrando cual de estos TODOs incluyen en alguna 
      //parte el texto que escribimos en nuestro input de busqueda
      //es el criterio de evaluacion que dice que "todos" muestra y que "todos" no
    })
  }
  // el text es el identificador de nuestro TODOs
  //cada TODO debe tener un texto diferente
  const completeTodo=(text)=>{
    const todoIndex=todos.findIndex(todo=>todo.text===text);//dentro de todos los TODOs como encontramos ese TODO
    const newTodos=[...todos];//inyectamos todos los todos que teniamos antes 
    newTodos[todoIndex].completed=true
    setTodos(newTodos);
  };
  const deleteTodo=(text)=>{
    const todoIndex=todos.findIndex(todo=>todo.text===text);//dentro de todos los TODOs como encontramos ese TODO
    const newTodos=[...todos];//inyectamos todos los todos que teniamos antes 
    newTodos.splice(todoIndex,1)
    setTodos(newTodos);
  };
  

  return (
    <React.Fragment>
      <TodoCounter
      total={totalTodos}
      completed={completedTodos}
      />
      <TodoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onComplete={()=>completeTodo(todo.text)}
          onDelete={()=>deleteTodo(todo.text)}
          />
          ))} 
      </TodoList>
     <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;
