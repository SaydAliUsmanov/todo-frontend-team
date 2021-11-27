import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";

const Todos = ({ id }) => {
  const todos = useSelector((state) => state.todos);
  const sortTodos = useSelector(state => state.sortTodos)
  const todosLoading = useSelector((state) => state.todosLoading);

  return (
    <div className="card mb-3 ms-5 " id="card">
      {todosLoading
        ? "Loading todos ..."
        : sortTodos.length > 0 ? sortTodos.map((item) => {
          if (item.category === id) {
            return (
              <Todo key={item._id} important={item.important.text} title={item.title} text={item.text} dateCreate={item.createdAt}/>
          )}
        }) : todos.map((item) => {
            if (item.category === id) {
              return (
                <Todo key={item._id} important={item.important.text} title={item.title} text={item.text}  dateCreate={item.createdAt}/>
            )}
          })}
    </div>
  );
};

export default Todos;
