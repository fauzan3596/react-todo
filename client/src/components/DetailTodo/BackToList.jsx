import React from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function BackToList() {
  return (
    <div className="my-3 px-4 text-primary">
      <Link to="/todos" className="text-decoration-none">
        <FaArrowCircleLeft size={20} className="mb-1 me-2" />
        Back to Todos List
      </Link>
    </div>
  );
}

export default BackToList;
