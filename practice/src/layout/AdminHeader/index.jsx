import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./index.module.scss";
const Adminheader = () => {
  return (
    <header>
      <div className="container">
        <div className={styles.header}>
          <h1>Admin</h1>

          <nav >
            <ul>
              <li>
                <NavLink to={"/admin"}>Admin</NavLink>
                <NavLink to={"/admin/addproduct"}>Add Product</NavLink>
                <NavLink to={"/admin"}>Dashboard</NavLink>
                <NavLink to={"/admin/contact"}>Contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Adminheader;
