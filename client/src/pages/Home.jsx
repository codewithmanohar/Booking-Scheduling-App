import TrainSearch from "../components/TrainSearch";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <TrainSearch />
    </div>
  );
}

export default Home;
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
