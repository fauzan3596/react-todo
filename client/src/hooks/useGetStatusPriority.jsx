import React from "react";
import {
  FcHighPriority,
  FcLowPriority,
  FcMediumPriority,
} from "react-icons/fc";

function useGetStatusColor(statusTodo) {
  switch (statusTodo) {
    case "Completed":
      return "bg-success fw-semibold";
    case "In Progress":
      return "bg-info fw-semibold";
    case "Not Started":
      return "bg-warning fw-semibold";
    default:
      break;
  }
}

function useGetPriorityIcon(priority) {
  switch (priority) {
    case "Low":
      return <FcLowPriority className="me-1 mb-1" size="25" />;
    case "Medium":
      return <FcMediumPriority className="me-1 mb-1" size="25" />;
    case "High":
      return <FcHighPriority className="me-1 mb-1" size="25" />;
    default:
      return null;
  }
}

export { useGetPriorityIcon, useGetStatusColor };
