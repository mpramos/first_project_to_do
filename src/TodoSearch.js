import React from 'react';
import './TodoSearch.css';



const TodoSearch = ({searchValue, setSearchValue}) => {
    const onSearchValuesChange=(event)=>{
        console.log(event.target.value);
        setSearchValue(event.target.value)
    };

    return (
            <input  
            className="TodoSearch"
            placeholder='cebolla' 
            value={searchValue}//VALOR DEL INPUT 
            onChange={onSearchValuesChange}
            />  
    
    );
}

export {TodoSearch};