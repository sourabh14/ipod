import './App.css';
import React from 'react';
import Screen from './Screen'
import Wheel from './Wheel';

class App extends React.Component {
  constructor() {
      super();
      this.state = {
        page: "Menu",
        activeIndex: 0
      }
  }

  // increase active index
  increaseState = () => {
    if (this.state.page == "Menu") {
      var currentIndex = this.state.activeIndex;
      this.setState({
        activeIndex: ((currentIndex + 1)%4)
      })
    }
  }

  // decrease active index
  decreaseState = () => {
    if (this.state.page == "Menu") {
      var currentIndex = this.state.activeIndex;
      this.setState({
        activeIndex: ((currentIndex + 3)%4)
      })
    }
  }

  // enter into selected option
  enterState = () => {
      if (this.state.page == "Menu") {
        var currentIndex = this.state.activeIndex;
        switch(currentIndex) {
          case 0: this.setState({page: "CoverFlow"})
            break;
          case 1: this.setState({page: "Music"})
            break;
          case 2: this.setState({page: "Games"})
            break;
          case 3: this.setState({page: "Settings"})
            break;
        }
      }
  }

  // go to menu page
  goToMenu = () => {
    this.setState({page: "Menu"})
  }
  
  // Render app
  render() {
    return (
        <div className="App">
            <Screen 
              page={this.state.page}
              activeIndex={this.state.activeIndex}
            />
            <Wheel 
              activeIndex={this.state.activeIndex}
              increaseState={this.increaseState}
              decreaseState={this.decreaseState}
              enterState={this.enterState}
              goToMenu={this.goToMenu}
            />
        </div>
    );
  }
  
}

export default App;
