// import logo from "./logo.svg";
import React from 'react';
import { AppUI } from './AppUI';

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Tomar el curso intro de React", completed: false },
//   { text: "Llorar con la llorona", completed: true },
// ];
// itemName es el nombre del elemento que voy a trabajar, al que voy a recoger y guardar
const useLocalStorage=(itemName, initialValue)=>{
  const localStorageItem= localStorage.getItem(itemName)
  let parsedItem;
  if(!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItem=[];
  }else{
    parsedItem=JSON.parse(localStorageItem)
  }
  const [item,setItem]=React.useState(parsedItem)
  const saveItem=(newItem)=>{
    const stringifyItem=JSON.stringify(newItem)
    localStorage.setItem('ITEM_V1',stringifyItem);
    setItem(newItem)
  };
  return [
    item,
    saveItem
  ]
}
function App(props) {
  const [todos,saveTodos]=useLocalStorage('TODOS_V1',[])
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
