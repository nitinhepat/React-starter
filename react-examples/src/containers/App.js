import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './App.css';
import Person from '../components/person/Person';
import ErrorBoundary from '../components/errorBoundary/ErrorBoundary';
export default class App extends Component { 
  render() {
   return (<div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ErrorBoundary>
        <Person></Person>
        </ErrorBoundary>
        Learn React
      </a>
    </header>
  </div>)
}
}

