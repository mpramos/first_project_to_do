// import logo from "./logo.svg";
import React from 'react';
import { AppUI } from './AppUI';

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el curso intro de React", completed: false },
  { text: "Llorar con la llorona", completed: true },
];

function App(props) {
  let parsedTodos;
  const localStorageTodos= localStorage.getItem('TODO_V1')
  if(!localStorageTodos){
    localStorage.setItem('TODO_V1', JSON.stringify([]))
    parsedTodos=[]
  }else{
    parsedTodos=JSON.parse(localStorageTodos)
  }
  const [todos,setTodos]=React.useState(parsedTodos)
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
  const saveTodos=(newTodos)=>{
    const stringifyTodos=JSON.stringify(newTodos)
    localStorage.setItem('TODO_V1',stringifyTodos);
    setTodos(newTodos)
  }
  const completeTodos=(text)=>{
    const todoIndex= todos.findIndex(todo=>todo.text===text);
    let newTodos=[...todos];
    newTodos[todoIndex]={
      text:todos[todoIndex].text,
      completed:true
    }
    saveTodos(newTodos)
  }
  const deleteTodos=(text)=>{
      const todoIndex= todos.findIndex(todo=> todo.text===text)
      let newTodos=[...todos];
      newTodos.splice(todoIndex,1)
      saveTodos(newTodos)
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
