import './App.css';
import React from 'react'
import Car from "./components/Car";
import Bicycle from './components/Bicycle';
import Truck from './components/Truck';
import Skateboard from './components/Skateboard';
function App() {
  return (
    <div className="App">
    <Car numberOfWheels="4"/> 
    <Bicycle numberOfWheels="2"/> 
    <Truck numberOfWheels="6"/>
    <Skateboard numberOfWheels="4"/> 
    </div>
  );
}

export default App;
