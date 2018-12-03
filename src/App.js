import React, { Component } from 'react';
import Navibar from './components/Navibar';
import Home from './components/Home';
import Main from './components/Main';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navibar />
        <Home />
        <Main />
        <Projects />
        <Resume />
        <Footer />
      </div>
    );
  }
}

export default App;
