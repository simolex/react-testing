import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/" data-testid="main-link">
        main
      </Link>
      <Link to="/about" data-testid="about-link">
        About
      </Link>
      <Link to="/users" data-testid="users-link">
        Users
      </Link>
      <Link to="/hello" data-testid="hello-link">
        Hello
      </Link>
      <Link to="/user-test" data-testid="ut-link">
        UFT
      </Link>
    </div>
  );
};

export default Navbar;
