import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Todos from "../Todos/Todos";

const Category = ({ id,text}) => {
  return (
    <>
      <div className="card col mx-1">
        <h5 className="card-header text-center">{text}</h5>
        <div className="card-body">
            <Todos
                id={id}
            />
        </div>
      </div>
    </>
  );
};

export default Category;
