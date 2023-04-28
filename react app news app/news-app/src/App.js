
import './App.css';

import React, { Component } from 'react'

import Navbar from './components/Navbar'
import News from './components/News'

export default class App extends Component {
  // c="john"
  render() {
    return (
      <>
     
      <div>
        {/* hello my first class component app {this.c} */}
        <Navbar/>
        <News/>
      </div>
      </>
    )
  }
}


