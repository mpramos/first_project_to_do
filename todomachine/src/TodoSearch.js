import React from 'react'
import './TodoSearch.css'

function TodoSearch() {
    const [searchvalue,setSearchValue]=React.useState('')
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
    <p>{searchvalue}</p>
  ]
}
export {TodoSearch}