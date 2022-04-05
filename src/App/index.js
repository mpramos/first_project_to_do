// import logo from "./logo.svg";
import React from 'react';
import { AppUI } from './AppUI';

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el curso intro de React", completed: false },
  { text: "Llorar con la llorona", completed: true },
];

function App(props) {
  const [todos,setTodos]=React.useState(defaultTodos)
  const [searchValue, setSearchValue]= React.useState('')
  const todosCompleted= todos.filter(todo=>!!todo.completed).length;
  const todoTotal= todos.length;
  let searchedTodos=[]
  if(!searchValue.length>=1){
    searchedTodos=todos;
  }else{
      searchedTodos= todos.filter(todo=>{
      const todoText= todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
       return todoText.includes(searchText)
    });
  }
  const completeTodos=(text)=>{
    const todoIndex= todos.findIndex(todo=>todo.text===text);
    let newTodos=[...todos];
    newTodos[todoIndex]={
      text:todos[todoIndex].text,
      completed:true
    }
    setTodos(newTodos)
  }
  const deleteTodos=(text)=>{
      const todoIndex= todos.findIndex(todo=> todo.text===text)
      let newTodos=[...todos];
      newTodos.splice(todoIndex,1)
      setTodos(newTodos)
  }
  return (
    <AppUI
    todoTotal={todoTotal}
    todosCompleted={todosCompleted}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodos={completeTodos}
    deleteTodos={deleteTodos}
    />

  );
}
export default App;
