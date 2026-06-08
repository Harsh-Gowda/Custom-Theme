import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <section className="hero">
        <img src="../assets/led.jpg" alt="Hero Image" />
      </section>

      <div style={{ height: "2000px" }}></div>
    </>
  );
}

export default App;