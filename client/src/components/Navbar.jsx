import { NavLink } from "react-router";
import styles from "./Navbar.module.css";
export default function Navbar() {
  return (
    <div className={styles.nav}>
      <div className={styles.logoContainer}>
        <img src="/train.jpg" />
        <h1>Welcome to Train Booking and Schudeling app</h1>
      </div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/train-search">Train Search</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Signup</NavLink>
        </li>
      </ul>
    </div>
  );
}

function Bar() {
  return (
    <h1
      style={{
        backgroundColor: "blue",
        color: "white",
        textAlign: "center",
        padding: "8px",
        fontWeight: "500",
      }}
    >
      Welcome to Train Booking and Schudeling app
    </h1>
  );
}
