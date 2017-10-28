import React, { Component } from 'react';
import { connect } from 'react-redux';

class NavBar extends Component{

  renderList(){
    return this.props.menus.map((menu) => {
      return(
        <li key={menu.title} className="nav-item">
          <a className="nav-link" href="">
            {menu.title}
          </a>
        </li>
      );
    });
  }

  render(){

    return(

      <div>

      <nav className="navbar navbar-expand-lg navbar-light bg-t-white">

      <img src="src/images/main/logo-normal.png" height="30" alt="" />


        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse float-right" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            {this.renderList()}
          </ul>
        </div>
      </nav>

      </div>


    );

  }
}

function mapStateToProps(state){
  return{
    menus: state.menus
  };
}

export default connect(mapStateToProps)(NavBar);
