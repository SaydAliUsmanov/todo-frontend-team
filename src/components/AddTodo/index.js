import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addTodo} from "../../redux/features/todo";
import '../Header/Header.css'

const AddTodo = () => {
  const lowIdFavorite = '61a0e770b6a8fecf29a10cc1'
  const averageIdFavorite = '61a0e75db6a8fecf29a10cbf'
  const highIdFavorite = '61a0e73ab6a8fecf29a10cbd'

  const dispatch = useDispatch()
  const adding = useSelector(state => state.adding)
  const [title, setTitle] = useState('')
  const [name, setName] = useState('')
  const [value, setValue] = useState(lowIdFavorite)

  const handleTitle = (ev) => {
    setTitle(ev.target.value)
  }
  const handleName = (ev) => {
    setName(ev.target.value)
  }
  const handleSelect = (ev) => {
    setValue(ev.target.value)
  }
  const handleAddTodo = () => {
    dispatch(addTodo(title, name, value))
  }

  return (
    <div className='addTodo'>
      <input type='text' placeholder='Title todo' value={title} onChange={handleTitle}/>
      <input type='text' placeholder='Name todo' value={name} onChange={handleName}/>
      <select value={value} onChange={handleSelect} placeholder='sdfposdk'>
        <option value={lowIdFavorite}>Низкий приоритет</option>
        <option value={averageIdFavorite}>Средний приоритет</option>
        <option value={highIdFavorite}>Высокий приоритет</option>
      </select>
      <button className='btn btn-warning' disabled={adding ? true : false} onClick={handleAddTodo}>Добавить</button>
    </div>
  );
};

export default AddTodo;
