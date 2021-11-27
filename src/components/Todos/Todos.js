import React, { useEffect } from "react";
import Todo from "./Todo";
import { useDispatch, useSelector } from "react-redux";
import { loadTodos } from "../../redux/features/todo";

const Todos = ({ id }) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const sortTodos = useSelector(state => state.sortTodos)
  const todosLoading = useSelector((state) => state.todosLoading);

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  return (
    <div className="card mb-3 ms-5 " id="card">
      {todosLoading
        ? "Loading todos ..."
        : sortTodos.length > 0 ? sortTodos.map((item) => {
          if (item.category === id) {
            return <Todo key={item._id} important={item.important.text} title={item.title} text={item.text} dateCreate={item.createdAt}/>;
          }
        }) : todos.map((item) => {
            if (item.category === id) {
              return <Todo key={item._id} important={item.important.text} title={item.title} text={item.text}  dateCreate={item.createdAt}/>;
            }
          })}
    </div>
  );
};

export default Todos;
