import axios from "axios";
import Swal from "sweetalert2";

const getTodos = async (cb) => {
  try {
    const todos = await axios({
      method: "GET",
      url: "/api/todos",
    });
    cb(todos.data);
  } catch (error) {
    console.log(error);
  }
};

const addTodo = async (temp) => {
  const { title, description, status, priority, dueDate, createdAt } = temp;
  try {
    const response = await axios({
      method: "GET",
      url: "/api/todos",
    });
    const todos = response.data;

    await axios({
      method: "POST",
      url: "/api/todos",
      data: {
        id: todos.length > 0 ? (Math.max(...todos.map((todo) => todo.id)) + 1).toString() : "1",
        title,
        description,
        status,
        priority,
        dueDate,
        createdAt,
      },
    });
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Your data has been added",
    });
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error Add Todo",
      text: error.message,
    });
  }
};

const getTodoById = async (id, cb) => {
  try {
    const todo = await axios({
      method: "GET",
      url: `/api/todos/${id}`,
    });
    cb(todo.data);
  } catch (error) {
    console.log(error);
  }
};

const deleteTodo = async (id) => {
  try {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    if (result.isConfirmed) {
      await axios.delete(`/api/todos/${id}`);
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
      return true;
    } else {
      return false;
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error Delete Todo",
      text: error.message,
    });
  }
};

const editTodo = async (temp) => {
  const { id, title, description, status, priority, dueDate, createdAt } = temp;
  try {
    await axios({
      method: "PUT",
      url: `/api/todos/${id}`,
      data: {
        title,
        description,
        status,
        priority,
        dueDate,
        createdAt,
      },
    });
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Your data has been edited",
    });
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error Edit Todo",
      text: error.message,
    });
  }
};

export { getTodos, addTodo, getTodoById, deleteTodo, editTodo };
