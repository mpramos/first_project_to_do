import React from 'react';
import './TodoCounter.css';

const TodoCounter = ({total,completed}) => {
    //los props son un objeto y van a tener las propiedades total y completed

    return (
        <h2 className='TodoCounter' >
            Has completado{completed} de {total}TODOs
        </h2>
    );
};

export  {TodoCounter}; 