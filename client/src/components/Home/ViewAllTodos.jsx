import React from "react";
import { Link } from "react-router-dom";

function ViewAllTodos() {
  return (
    <div className="row d-flex justify-content-center mt-5 mb-3">
      <div className="col-5">
        <Link to="/todos">
          <button className="btn btn-dark w-100 py-2 rounded-3">
            View All Todos
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ViewAllTodos;
