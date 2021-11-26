import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const Categories = () => {
  return (
    <div className="main row d-flex ">
      <div className="card col mx-1">
        <h5 className="card-header text-center">New</h5>
        <div className="card-body"></div>
      </div>
      <div className="card col mx-1">
        <h5 className="card-header text-center">Assigned</h5>
        <div className="card-body"></div>
      </div>
      <div className="card col mx-1">
        <h5 className="card-header text-center">in Progress</h5>
        <div className="card-body"></div>
      </div>
      <div className="card col mx-1">
        <h5 className="card-header text-center">On Hold</h5>
        <div className="card-body"></div>
      </div>
      <div className="card col mx-1">
        <h5 className="card-header text-center">Close</h5>
        <div className="card-body"></div>
      </div>
    </div>
  );
};

export default Categories;
