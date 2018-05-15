import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (<div className="card" style={{ width:450 }} >
      <div className="card-body">
        <h4 className="card-title">Card title</h4>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    );
  }
}

export default App;
