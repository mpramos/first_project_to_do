// import logo from "./logo.svg";
import React from 'react';
import TodoCounter from './TodoCounter'
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import TodoSearch from "./TodoSearch";
import CreateTodoButton from "./CreateTodoButton";
// import "./App.css";
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
    <>
      <TodoCounter 
        total={todoTotal}
        completed={todosCompleted}
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
          onComplete={()=>completeTodos(todo.text)}
          onDelete={()=>deleteTodos(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}
export default App;
