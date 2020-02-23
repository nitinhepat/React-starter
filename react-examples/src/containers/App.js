import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './App.css';
import Person from '../components/person/Person';
import Persons from '../components/persons/persons'
import ErrorBoundary from '../components/errorBoundary/ErrorBoundary';

export default class App extends Component { 
  render() {
   return (<div className="App">
    
    <ErrorBoundary>
        <Persons/>
        </ErrorBoundary>
  </div>)
}
}

