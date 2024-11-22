import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addTodo } from "../../axios/fetchApi";
import { useFormatDateNumeric } from "../../hooks/useDateFormating";

function AddForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const temp = {
      title,
      description,
      status,
      priority,
      dueDate,
      createdAt: useFormatDateNumeric(new Date()),
    };
    addTodo(temp);
    navigate("/todos");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label fw-semibold">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Input your title here..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label fw-semibold">
          Description
        </label>
        <textarea
          className="form-control"
          id="description"
          placeholder="Add any details here..."
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="mb-3 row mx-0 g-3">
        <div className="col-12 col-sm-6">
          <label htmlFor="status" className="form-label p-0 fw-semibold">
            Status
          </label>
          <select
            className="form-select"
            id="status"
            required
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="" disabled>
              Select a Status
            </option>
            <option>Not Started</option>
            <option>In Progress</option>
          </select>
        </div>
        <div className="col-12 col-sm-6">
          <label htmlFor="priority" className="form-label p-0 fw-semibold">
            Priority
          </label>
          <select
            className="form-select"
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            required
          >
            <option value="" disabled>
              Select a Priority
            </option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="dueDate" className="form-label fw-semibold">
          Due Date
        </label>
        <input
          type="date"
          className="form-control"
          id="dueDate"
          placeholder="name@example.com"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
      </div>
      <div className="mb-3 py-3">
        <button
          type="submit"
          className="btn btn-primary w-100 rounded-pill fw-semibold"
        >
          Add Todo
        </button>
      </div>
    </form>
  );
}

export default AddForm;
