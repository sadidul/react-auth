import { NavLink } from "react-router-dom";
import React from "react";

import classes from "./MainNavigation.module.css";

export default function Mainnavigation() {
  return (
    <header className={classes.header}>
      <NavLink to="/">
        <div className={classes.logo}>React Auth</div>
      </NavLink>
      <nav>
        <ul>
          <li>
            <NavLink to="/auth">Login</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
