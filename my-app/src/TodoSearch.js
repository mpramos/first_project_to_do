import React from 'react';
import './TodoSearch.css'
const TodoSearch = () => {
    const [searchValue, setSearchValue]=React.useState("search");
    return [
        <input 
        className="TodoSearch"
         placeholder="Cebolla"
         onChange ={()=>setSearchValue("searchValue")}
         />,
         <p>{searchValue}</p>
    ];

};
export {TodoSearch};