import React from 'react';
import '../../index.css'

const Todo = () => {
  return (
    <>
      <div className="card mb-3 ms-5 " id="card">
        <div className="row g-0"  id="priority">
          <div className="col-1 bg-warning">
          </div>
          <div className="col-11">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural
              </p>
              <p className="card-text"><small className="text-muted">Last updated 3 min ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
