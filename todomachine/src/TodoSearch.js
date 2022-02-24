import React from 'react'
import './TodoSearch.css'

function TodoSearch({searchvalue,setSearchValue}) {
    const onSearchValueChange=(event) => {
        console.log(event.target.value)
        setSearchValue(event.target.value)
    }
  return [
    <input
     className="TodoSearch"
     placeholder="Cebolla"
     value ={searchvalue}
     onChange={onSearchValueChange}></input>,
  ]
}
export {TodoSearch}