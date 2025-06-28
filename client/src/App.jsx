import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

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
    <div classname="hero">
      <div classname="content">hello everyone</div>
    </div>
  );
}
