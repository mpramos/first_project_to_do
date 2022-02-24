import React from 'react';
import './CreateTodoButton.css';
const CreateTodoButton = (props) => {
    const onClickButton=(msg)=>{
        //funcion que envuelve al alert
        alert(msg)
    }
    return (
            <button className="CreateTodoButton"
            onClick={()=>onClickButton('Aqui se deberia abrir el modal')}
            >+</button>
    );
}

export {CreateTodoButton};