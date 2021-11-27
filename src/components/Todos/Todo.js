import React from "react";
import "../../index.css";

const Todo = ({ important, title, text, dateCreate }) => {
  const date = new Date(dateCreate).toLocaleString();

  return (
    <div className="row g-0" >
      <div className="col-1 bg-warning" id={important}></div>
      <div className="col-11">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <p className="card-text">
            <small className="text-muted">
              Date: {date}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Todo;
