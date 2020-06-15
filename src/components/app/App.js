import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Timeline from "../timeline/Timeline";
import AdminPage from "../admin/AdminPage";
import PageNotFound from "../page-not-found/PageNotFound";

import "./App.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import CommunityGuidelines from "../guidelines/CommunityGuidelines";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Timeline} />
            <Route exact path="/admin" component={AdminPage} />
            <Route
              exact
              path="/community-guidelines"
              component={CommunityGuidelines}
            />
            <Route component={PageNotFound} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
