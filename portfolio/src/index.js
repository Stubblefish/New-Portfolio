import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Portfolio from "./components/Portfolio/Portfolio";
import Bio from "./components/Bio/Bio";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="main">
        <Bio></Bio>
        <Portfolio />
        <Footer />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
