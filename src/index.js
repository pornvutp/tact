import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import NavBar from './components/navbar';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}

ReactDOM.render(
  <App />
  , document.querySelector('.container'));
