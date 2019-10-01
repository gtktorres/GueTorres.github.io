import React from 'react';
import './App.css';
import Me from './boston.PNG';
//import Bike from './bikepic.jpg';
//import Tabletop from './tablrtop.jpg'

export default class App extends React.Component {
  
  render() {

  return (
    <div className="App">
      <div className="Border">
        <h1 className="Header">Guevara Torres</h1>
        <img src={Me} className="App-port" alt="logo" />      
      </div>
    <div><h2>About Me</h2></div>
    <div><p className="About-Me"> I'm a senior at Lehman college pursuing 
          a Bachelor of Science in Computer Science. With an interest in 
          mobile applications as well as Web applicatons.
        </p>
    </div>
       <h2>Projects</h2>
       <div className="Card"> 
       <h3>ParkGenie</h3>                                 <h4> May 2019 - Present</h4>
       <ul>
        <li>Created an Android application that allows drivers to check parking 
            regulations for a desired location
        </li>
        <li>Developed the user interface using XML and Java to create a searchable 
            map that provides information on street cleaning and observed holidays.
        </li> 
        </ul>
        </div>
        <div className="Card"> 
        <h3>Wasted </h3>                                 <h4> June 2019</h4>
       <ul>
        <li>Worked in a team of 4 to implement an Android application, which allows
         users to understand how to categorize and recycle different forms of waste.         
        </li>
        <li>Created and formed a database using Room, ViewModel, and LiveData to store
        different forms of waste such as compost, plastics, and biodegradable materials.  
        </li> 
        </ul>
        </div>
        <div className="Card"> 
       <h3>RePayCycle, Tech Create HER Hackathon</h3>         <h4> May 2019 </h4>
       <ul>
        <li>Built with a team of 4 a Javascript web application which educated users on 
          the importance of building sustainability locally to prevent global environmental 
         issues related to pollution.
        </li>
        <li>Implemented the Google Maps API in order to find the nearest recycle machine 
        station.    
        </li> 
        </ul>
        </div>
    </div>
  );
  }
}

