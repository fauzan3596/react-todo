import React from "react";
import AddForm from "../components/AddTodo/AddForm";

function AddTodoPage() {
  return (
    <section className="container-fluid px-0 row mx-0 bg-primary-subtle py-5 d-flex justify-content-center">
      <div className="col-11 col-sm-8 col-md-6 bg-white shadow rounded-3">
        <h2 className="text-center mt-4 fw-semibold">Add Todo</h2>
        <AddForm />
      </div>
    </section>
  );
}

export default AddTodoPage;
