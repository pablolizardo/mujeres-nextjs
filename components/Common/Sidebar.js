import React from "react";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <aside className={styles.container}>
      <h2>Proximamente</h2>
      <ul>
        <li>
          <figure />
          Elida Dehezas
          <small>Detenida en Dictadura</small>
        </li>
        <li>
          <figure />
          Isabel Varela
          <small>Madre y abuela </small>
        </li>
        <li>
          <figure />
          Leda Soto
          <small>Cantante y Locutora</small>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
