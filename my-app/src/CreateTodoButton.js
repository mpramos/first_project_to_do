import React from 'react';
import './CreateTodoButton.css';
const CreateTodoButton = (props) => {
    const OnClickButton =(msg)=>alert(msg)
    return (
            <button className="CreateTodoButton"
            onClick={()=>OnClickButton('hey msg')}
            
            >
                +
            </button>
    );
};

export {CreateTodoButton} ;