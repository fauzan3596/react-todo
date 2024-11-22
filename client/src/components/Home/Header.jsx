import React from "react";
import headerImage from "../../assets/header-img.jpg";

function Header() {
  return (
    <header
      className="d-flex bg-primary flex-column justify-content-center align-items-center text-center text-white position-relative"
      style={{
        background: `url(${headerImage}) center/cover no-repeat`,
        height: "50vh",
      }}
    >
      <div
        className="overlay h-100 w-100 z-1 position-absolute top-0 start-0 z-1"
        style={{
          backgroundColor: "rgba(0, 0, 0, .5)",
        }}
      ></div>
      <div className="z-2">
        <h1>Productivity at Your Fingertips</h1>
        <p className="my-3 fs-4">The Essential Todo List App</p>
      </div>
    </header>
  );
}

export default Header;
