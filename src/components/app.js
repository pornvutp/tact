import React, { Component } from 'react';
import NavBar from '../containers/navbar';
import Jumbotron from '../containers/jumbotron';

export default class App extends Component {
  render(){
    return(
      <div>
        <NavBar />
        <Jumbotron />
      </div>
    );
  }
}
