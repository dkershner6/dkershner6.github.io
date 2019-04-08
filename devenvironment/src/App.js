import React, { Component } from 'react';
import './bootstrap.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import Navigation from './components/Navigation';

import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Blog from './pages/blog/Blog';
import Post from './pages/blog/Post';

class App extends Component {
  render() {
    return (      
      <Router>        
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/blog/posts/:handle" component={Post} />
      </Router>
    );
  }
}

export default App;
