import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Timeline from "./components/Timeline";
import PageNotFound from "./components/PageNotFound";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Timeline}/>
            <Route component={PageNotFound} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
