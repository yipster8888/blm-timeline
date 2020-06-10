import React from "react";

import Timeline from "./components/Timeline";

import "./App.css";

function App() {
  return (
    <div>
      <h1>Black Lives Matter Timeline</h1>
      <p className="tagline">~ Keep fighting for justice. It's working. ~</p>
      <hr />
      <Timeline />
    </div>
  );
}

export default App;
