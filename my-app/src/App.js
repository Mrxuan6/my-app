import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoadingPage from './component/loadingPage/index.js';
import { connect } from "react-redux";
import {Route,Link,Switch,BrowserRouter as Router} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        {this.props.children}
      </div>
    );
  }
}
