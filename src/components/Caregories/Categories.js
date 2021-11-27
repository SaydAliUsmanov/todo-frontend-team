import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import {loadCategories, loadTodos} from "../../redux/features/todo";
import Category from "./Category";

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(loadCategories());
    dispatch(loadTodos())
  }, [dispatch]);

  return (
    <div className="main row d-flex ">
      {loading
        ? "Loading content ..."
        : categories.map((item) => {
            return <Category key={item._id} id={item._id} text={item.text} />;
          })}
    </div>
  );
};

export default Categories;
