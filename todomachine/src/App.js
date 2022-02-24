// import logo from './logo.svg';
// import './App.css';
import React from "react";
import {CreateTodoButton} from "./CreateTodoButton";
import {TodoCounter} from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import {TodoList} from "./TodoList";
import { TodoSearch } from "./TodoSearch";

const defaulttodos = [
  { text: "cortar cebolla", completed: true },
  { text: "tomar el curso de react", completed: true },
  { text: "llorar con la llorona", completed: false },
];
function App(props) {
  const [todos, setTodos] = React.useState(defaulttodos)
  const [searchvalue, setSearchValue]= React.useState('') 
  const completedTodos = todos.filter(todo=>!!todo.completed).length;
  const totalTodos = todos.length;
  let searchedTodos = [];
  if(!searchvalue.length>=1){
    searchedTodos = todos; 
  } else {
    searchedTodos= todos.filter(todo=>{
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchvalue.toLowerCase();
      return todoText.includes(searchText);
    })
  }
const completeTodos =(text)=>{
    const todoIndex= todos.findIndex(todo =>todo.text == text);
    const newTodos = [...todos]
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
    }

  return (
    <>
      <TodoCounter
      total ={totalTodos}
      completed = {completedTodos}
      />
      <TodoSearch
        searchvalue ={searchvalue}
        setSearchValue ={setSearchValue}
    
      />
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem key={todo.text} text = {todo.text} completed ={todo.completed}/>
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
