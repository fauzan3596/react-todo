import React from "react";
import EditForm from "../components/EditTodo/EditForm";
import { useLocation } from "react-router-dom";

function EditTodoPage() {
  const location = useLocation();
  const todo = location.state.todo || "";

  return (
    <section className="container-fluid px-0 row mx-0 bg-primary-subtle py-5 d-flex justify-content-center">
      <div className="col-11 col-sm-8 col-md-6 bg-white shadow rounded-3">
        <h2 className="text-center mt-4 fw-semibold">Update Todo</h2>
        <EditForm todo={todo} />
      </div>
    </section>
  );
}

export default EditTodoPage;
