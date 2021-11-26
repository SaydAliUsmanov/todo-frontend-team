import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTodos } from '../../redux/features/todo';

const Todo = () => {

  const todos = useSelector(state => state.todos)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadTodos())
  }, [dispatch])

  return (
    <>
      {todos.map(item => {
        return (
          <div className="card mb-3 ms-5" id="card">
            <div className="row g-0"  id="priority">
              <div className="col-1 bg-warning">
              </div>
              <div className="col-11">
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.text}
                  </p>
                  <p className="card-text"><small className="text-muted">Last updated 3 min ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      })}

    </>
  );
};

export default Todo;