import React from 'react';
import './TodoCounter.css';

export default function TodoCounter({total, completed}) {
  return (
    <h2 className="TodoCounter" >Has completado {completed} de {total} TODOs</h2>
  );

}
