import React from "react";
import "../../index.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../../redux/features/todo";

const Todo = ({ important, id, title, text, dateCreate }) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const todo = todos.find(item => item._id === id)

  const date = new Date(dateCreate).toLocaleString();

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="row g-0" id="wrap-todo">
      {todo.deleting ?
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
       :
        <button className="delete-btn" onClick={handleDeleteTodo}>
          x
        </button>
      }
      <div className="col-1 bg-warning" id={important}></div>
      <div className="col-11">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <p className="card-text">
            <small className="text-muted">Date: {date}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Todo;
