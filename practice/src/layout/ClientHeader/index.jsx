import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./index.module.scss";
const ClientHeader = () => {
  return (
    <header>
      <div className="container">
        <div className={styles.header}>
          <h1>Farid Chef's Menu</h1>

          <nav >
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/product"}>Products</NavLink>
                <NavLink to={"/wishlist"}>Wishlist</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default ClientHeader;
