import React from "react";
import BrowseTodoCard from "./BrowseTodoCard";
import { Link } from "react-router-dom";

function BrowseTodo() {
  return (
    <section className="row mx-4 px-3 my-5">
      <div className="col-sm-6 mb-4 mb-sm-0">
        <BrowseTodoCard bg="bg-info-subtle">
          <div className="card-body">
            <h5 className="card-title fw-bold fs-4">For Reminder</h5>
            <p className="card-text">
              Browse your lists and keep track of your tasks
            </p>
            <Link to="/todos" className="btn btn-primary rounded-3">
              Browse Todos
            </Link>
          </div>
        </BrowseTodoCard>
      </div>
      <div className="col-sm-6">
        <BrowseTodoCard bg="bg-secondary-subtle">
          <div className="card-body">
            <h5 className="card-title fw-bold fs-4">For NoteTaker</h5>
            <p className="card-text">
              Organize your thoughts and capture your ideas here
            </p>
            <Link to="/todos/add" className="btn btn-dark rounded-3">
              Add Todo
            </Link>
          </div>
        </BrowseTodoCard>
      </div>
    </section>
  );
}

export default BrowseTodo;
