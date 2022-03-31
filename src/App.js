// import logo from "./logo.svg";
import TodoCounter from './TodoCounter'
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import TodoSearch from "./TodoSearch";
import CreateTodoButton from "./CreateTodoButton";
// import "./App.css";
const todos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el curso intro de React", completed: false },
  { text: "Llorar con la llorona", completed: true },
];
function App(props) {
  return (
    <>
      <TodoCounter />
     
      <TodoSearch />
      
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text}/>
        ))}
      </TodoList>
      <CreateTodoButton />
      
    </>
  );
}

export default App;
