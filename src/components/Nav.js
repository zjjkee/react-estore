import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <h3>Jingke's Store</h3>
      <ul>
        <li>
          <Link to="/">Home🏠</Link>
        </li>
        <li>
          <Link to="/mycart">My Cart🛒</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
