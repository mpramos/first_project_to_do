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
  const [error,setError]= React.useState(false)
  const [loading,setLoading]=React.useState(true)
  const [item,setItem]=React.useState(initialValue)
  React.useEffect(()=>{
    setTimeout(()=>{
      try{
        const localStorageItem= localStorage.getItem(itemName)
        let parsedItem;
        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem=[];
        }else{
          parsedItem=JSON.parse(localStorageItem)
        }
        setItem(parsedItem);
        setLoading(false)
      } catch(error){
          setError(error)
      }
      }, 1000)
  });
  const saveItem=(newItem)=>{
    try{
      const stringifyItem=JSON.stringify(newItem)
      localStorage.setItem('ITEM_V1',stringifyItem);
      setItem(newItem)
    }catch(error){
      setError(error)
    }
  };
  return {
    item,
    saveItem,
    loading,
    error
}
}
function App(props) {
  const {
    item:todos,
    saveItem:saveTodos,
    loading,
    error
  }=useLocalStorage('TODOS_V1',[])
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
  };

  return (
    <AppUI
    error={error}
    loading={loading}
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
