import React, { Component } from 'react';
import './bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';

import Navigation from './components/Navigation';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Blog from './pages/blog/Blog';
import Post from './pages/blog/Post';
import Error from './Error';

class App extends Component {
  componentDidMount() {
    ReactGA.initialize('UA-10014066-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  render() {
    return (
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/blog' component={Blog} />
          <Route path='/blog/:handle' component={Post} />
          <Route component={Error} status={404} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
