import React from "react";
import TodoCounter from "../TodoCounter";
import TodoItem from "../TodoItem";
import TodoList from "../TodoList";
import TodoSearch from "../TodoSearch";
import CreateTodoButton from "../CreateTodoButton";
import "./App.css";
import { App } from "./index";
function AppUI({
  todoTotal,
  todosCompleted,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodos,
  deleteTodos,
}) {
  return (
    <>
      <TodoCounter total={todoTotal} completed={todosCompleted} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodos(todo.text)}
            onDelete={() => deleteTodos(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export { AppUI };
