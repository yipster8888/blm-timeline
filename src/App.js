import React from "react";

import Timeline from "./components/Timeline";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Timeline />
      <Footer />
    </div>
  );
}

export default App;
