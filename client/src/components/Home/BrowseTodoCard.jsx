import React from "react";

function BrowseTodoCard({ children, bg }) {
  return (
    <div
      className={`card border-0 ${bg} rounded-4 py-2 h-100`}
      style={{ boxShadow: "3px 3px 8px gray" }}
    >
      {children}
    </div>
  );
}

export default BrowseTodoCard;
