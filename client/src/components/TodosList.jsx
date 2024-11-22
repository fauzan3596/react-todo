import React, { useEffect, useState } from "react";
import TodoCard from "./TodoCard";
import ViewAllTodos from "./Home/ViewAllTodos";
import Spinner from "./Spinner";
import { getTodos } from "../axios/fetchApi";

function TodosList({ isHome = false }) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTodos((data) => {
      setTodos(data);
      setLoading(false);
    });
  }, [todos]);

  let completedTodos = todos.filter((todo) => todo.status === "Completed");
  let incompleteTodos = todos.filter((todo) => todo.status !== "Completed");

  const compare = (a, b) => {
    if (a.createdAt < b.createdAt) {
      return 1;
    }
    if (a.createdAt > b.createdAt) {
      return -1;
    }
    return 0;
  };

  completedTodos.sort(compare);
  incompleteTodos.sort(compare);

  if (isHome) {
    completedTodos = completedTodos.slice(0, 3);
    incompleteTodos = incompleteTodos.slice(0, 3);
  }

  return (
    <section className="row bg-primary-subtle mx-0 py-4">
      <h2 className="text-center fw-bold">
        {isHome ? "Recent Todos" : "My Todos List"}
      </h2>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <>
          <h4 className="px-4">Todos List</h4>
          <div className="row mt-0 mb-5 row-cols-1 px-3 mx-0 row-cols-md-3 g-3">
            {incompleteTodos.map((todo) => (
              <TodoCard key={todo.id} todo={todo} />
            ))}
          </div>
          <h4 className="px-4">Completed Todos List</h4>
          <div className="row my-0 row-cols-1 px-3 mx-0 row-cols-md-3 g-3">
            {completedTodos.map((todo) => (
              <TodoCard key={todo.id} todo={todo} />
            ))}
          </div>
        </>
      )}
      {isHome && <ViewAllTodos />}
    </section>
  );
}

export default TodosList;
