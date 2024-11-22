import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteTodo } from "../../axios/fetchApi";
import {
  useGetPriorityIcon,
  useGetStatusColor,
} from "../../hooks/useGetStatusPriority";
import {
  useFormatDateLong,
  useShowRemainingDays,
} from "../../hooks/useDateFormating";

function TodoInfo({ todo }) {
  const { id, title, description, status, createdAt, priority, dueDate } = todo;

  const navigate = useNavigate();

  const deleteButtonHandler = async (id) => {
    const confirmDelete = await deleteTodo(id);
    if (confirmDelete) {
      navigate("/todos");
    }
  };

  return (
    <div className="bg-primary-subtle px-5 d-flex justify-content-center py-5">
      <div className="col-11 col-sm-8 col-md-6 bg-white shadow rounded-4 py-4 px-4 text-black">
        <h3 className="my-3 fw-semibold">{title}</h3>
        <h6 className="text-primary fw-semibold">Description</h6>
        <p>{description}</p>
        <p className="py-2">
          <span
            className={`${useGetStatusColor(status)} ${
              status === "Completed" ? "text-white" : "text-black"
            } py-2 px-5 rounded-pill`}
          >
            {status}
          </span>
        </p>
        <hr />
        <h6 className="text-primary fw-semibold">Priority</h6>
        <p className="mb-1">
          {useGetPriorityIcon(priority)} {priority} priority
        </p>
        <h6 className="text-primary fw-semibold">Due Date</h6>
        <p>{useFormatDateLong(dueDate)}</p>
        <h6 className="text-primary fw-semibold">Remaining Days</h6>
        <p>{useShowRemainingDays(dueDate)}</p>
        <h6 className="text-primary fw-semibold">Last Updated at</h6>
        <p>{useFormatDateLong(createdAt)}</p>
        <div className="d-flex justify-content-end">
          <Link to={`/todos/edit/${id}`} state={{ todo }}>
            <button className="btn btn-warning rounded-4 px-5 fw-semibold">
              Edit
            </button>
          </Link>
          <button
            className="btn btn-danger ms-2 rounded-4 px-5 fw-semibold"
            onClick={() => deleteButtonHandler(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoInfo;
