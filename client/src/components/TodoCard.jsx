import React from "react";
import { Link } from "react-router-dom";
import {
  useFormatDateLong,
  useShowRemainingDays,
} from "../hooks/useDateFormating";
import {
  useGetPriorityIcon,
  useGetStatusColor,
} from "../hooks/useGetStatusPriority";

function TodoCard({ todo }) {
  const { id, title, description, status, createdAt, priority, dueDate } = todo;

  return (
    <div className="col-12 col-sm-12 col-md-12 col-lg-4">
      <div className="card h-100 shadow border-0">
        <div className="card-body">
          <div className="card-header bg-transparent border-0 px-0 text-center">
            <p
              className={`${useGetStatusColor(status)} ${
                status === "Completed" ? "text-white" : "text-black"
              } py-2 px-4 rounded-pill`}
            >
              {status}
            </p>
          </div>
          <h5 className="card-title fw-bold">{title}</h5>
          <div className="card-text pt-2">
            <p>{description}</p>
            <p className="pt-3">
              {useGetPriorityIcon(priority)} {priority} priority
            </p>
            <p>Remaining days: {useShowRemainingDays(dueDate)}</p>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center py-3 bg-transparent">
          <small className="text-body-secondary">
            {useFormatDateLong(createdAt)}
          </small>
          <Link to={`/todos/${id}`} className="btn btn-primary rounded-3">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TodoCard;
