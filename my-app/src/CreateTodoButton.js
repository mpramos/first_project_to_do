import React from 'react';
import './CreateTodoButton.css';
const CreateTodoButton = () => {
    return (
            <button className="CreateTodoButton"
            onClick={()=>console.log('Aqui hubo un click')}
            
            >
                +
            </button>
    );
};

export {CreateTodoButton} ;