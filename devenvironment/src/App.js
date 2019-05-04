import React, { Component } from "react";
import "./bootstrap.css";
import { BrowserRouter as Router } from "react-router-dom";
import ReactGA from "react-ga";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import AppRouter from "./components/Router";

class App extends Component {
  componentDidMount() {
    ReactGA.initialize("UA-10014066-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  render() {
    return (
      <Router>
        <Navigation />
        <AppRouter />
        <Footer />
      </Router>
    );
  }
}

export default App;
