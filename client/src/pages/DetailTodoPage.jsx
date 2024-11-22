import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import BackToList from "../components/DetailTodo/BackToList";
import TodoInfo from "../components/DetailTodo/TodoInfo";
import { getTodoById } from "../axios/fetchApi";

function DetailTodoPage() {
  const { id } = useParams();
  const [todo, setTodo] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTodoById(id, (data) => {
      setTodo(data);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <section className="container-fluid p-0">
      <BackToList />
      <TodoInfo todo={todo} />
    </section>
  );
}

export default DetailTodoPage;
