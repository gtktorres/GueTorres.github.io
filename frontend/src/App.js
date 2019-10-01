import React from 'react';
import './App.css';
import Me from './boston.PNG';

export default class App extends React.Component {
  
  render() {

  return (
    <div className="App">
      <h1 className="Header">Guevara Torres</h1>
      <img src={Me} className="App-port" alt="logo" />      
    <div className="Card">
        <p className="About-Me"> I'm a senior at Lehman college pursuing a Bachelor of Science in Computer Science. With an interest in mobile applications as well as Web applicatons.</p>
    </div>
    </div>
  );
  }
}

