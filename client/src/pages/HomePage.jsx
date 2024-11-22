import React from "react";
import Header from "../components/Home/Header";
import BrowseTodo from "../components/Home/BrowseTodo";
import TodosList from "../components/TodosList";
import Footer from "../components/Home/Footer";

function HomePage() {
  return (
    <div className="container-fluid p-0">
      <Header />
      <BrowseTodo />
      <TodosList isHome={true} />
      <Footer />
    </div>
  );
}

export default HomePage;
