import React from 'react'
import './CreateTodoButton.css'
export default function CreateTodoButton() {
  const onClickButton=(msg)=>{
    alert('Aqui se deberia abrir el modal')
  }
  return (
    <button className="CreateTodoButton"
    onClick={onClickButton}
    >+</button>
  );
}
