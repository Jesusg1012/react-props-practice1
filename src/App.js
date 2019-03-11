import React, { Component } from "react";
import "./App.css";
import Header from './Components/Header';

// console.log("help")
class App extends Component {
  render() {
    return <Header imgURL={require('./bed.png')}/>;
  }
}

export default App;
