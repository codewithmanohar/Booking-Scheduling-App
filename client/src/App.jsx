import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Main />
    </>
  );
}

function Main() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "gray",
      }}
    >
      <Navbar />
      <Hero />
    </div>
  );
}

function Navbar() {
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
      Welcome to Booking and Schudeling app
    </h1>
  );
}

function Hero() {
  return (
    <div className="hero">
      <div className="content">
        <h1> Booking Menu </h1>
        <hr />
        <p> This is the paragraph.... </p>
        <img src="./schudle.jpg" />
        <button>Confirm The Booking </button>
      </div>
    </div>
  );
}
