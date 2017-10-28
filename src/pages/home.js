import React, { Component } from 'react';
import NavBar from '../containers/navbar';
import JumbotronHome from '../containers/jumbotron-home';

export default class Home extends Component {
  render(){
    return(
      <div>
        <NavBar />
        <JumbotronHome />
      </div>
    );
  }
}
