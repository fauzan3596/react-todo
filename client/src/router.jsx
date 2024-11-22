import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/HomePage";
import TodosPage from "./pages/TodosPage";
import AddTodoPage from "./pages/AddTodoPage";
import DetailTodoPage from "./pages/DetailTodoPage";
import EditTodoPage from "./pages/EditTodoPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/todos",
                element: <TodosPage />
            },
            {
                path: "/todos/add",
                element: <AddTodoPage />
            },
            {
                path: "/todos/:id",
                element: <DetailTodoPage />
            },
            {
                path: "/todos/edit/:id",
                element: <EditTodoPage />
            }
        ]
    }
])

export default router;