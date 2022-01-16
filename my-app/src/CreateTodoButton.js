import React from 'react';
import './CreateTodoButton.css';
const CreateTodoButton = () => {
    const OnClickButton =()=>alert('Aqui se deberia abrir el modal')
    return (
            <button className="CreateTodoButton"
            onClick={OnClickButton}
            
            >
                +
            </button>
    );
};

export {CreateTodoButton} ;