import React, { Component } from 'react';
import { connect } from 'react-redux';
import selectMenu from '../actions/index';
import {bindActionCreators} from 'redux';

class NavBar extends Component{

  renderList(){
    return this.props.menus.map((menu) => {

      return(
        <li
          key={menu.title}
          onClick={() => this.props.selectMenu(menu)}
          className="nav-item">
          <a className="nav-link-tact px-3 py-3" href="">
            {menu.title}
          </a>
        </li>
      );
    });
  }

  render(){

    return(

      <div>

      <nav className="navbar navbar-expand-lg navbar-light bg-t-white py-3">

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

function mapDispatchToProps(dispatch){
  return bindActionCreators({selectMenu: selectMenu},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
