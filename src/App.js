import './App.css';
import React from 'react';
import Screen from './Screen'
import Wheel from './Wheel';

class App extends React.Component {

  render() {
    return (
        <div className="App">
            <Screen />
            <Wheel />
        </div>
    );
  }
    
  
    
}

export default App;
