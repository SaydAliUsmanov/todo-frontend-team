import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'

function Header(props) {
  const [search, setSearch] = useState('')

  const handleSearch = (ev) => {
    setSearch(ev.target.value)
  }

  return (
    <div className='header-wrapper bg-secondary w-100'>
      <span className='header-logo'>E-Todos</span>
      <input value={search} onChange={handleSearch} placeholder='Поиск по todo..' type="text" size='70'/>
      <button className='btn btn-warning'>Добавить</button>
    </div>
  );
}

export default Header;
