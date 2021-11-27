import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import AddTodo from "../AddTodo";
import {useDispatch, useSelector} from "react-redux";

function Header(props) {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const todos = useSelector(state => state.todos)

  const handleSearch = (ev) => {
    setSearch(ev.target.value)
  }

  let cartFilteredItems = [...todos]

  if (search.length > 0) {
    cartFilteredItems = todos.filter(item => {
      return item.title.toLowerCase().match(search.toLowerCase())
    })
    dispatch({
      type: 'todos/sort',
      payload: cartFilteredItems
    })
  }else{
    dispatch({type: 'todos/sort/clean'})
  }

  return (
    <div className='header-wrapper bg-secondary w-100'>
      <span className='header-logo'>E-Todos</span>
      <input value={search} onChange={handleSearch} placeholder='Поиск по todo..' type="text" size='70'/>
      <AddTodo />
    </div>
  );
}

export default Header;
