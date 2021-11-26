import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Categories.css";
import { useDispatch, useSelector } from 'react-redux';
import { loadCategories } from '../../redux/features/todo';

const Categories = () => {

  const categories = useSelector(state => state.categories)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadCategories())
  }, [dispatch])

  return (<>
    {categories.map((item) => {
      return (
        <div className="main row d-flex">
          <div className="card col mx-1">
            <h5 className="card-header text-center">{item.text}</h5>
            <div className="card-body"></div>
          </div>
        </div>
      )
      })}
    </>
  );
};

export default Categories;
