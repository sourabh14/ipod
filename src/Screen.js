import React from 'react';
import Menu from './screens/Menu'
import CoverFlow from './screens/CoverFlow'
import Music from './screens/Music'
import Games from './screens/Games'
import Settings from './screens/Settings'

import './Screen.css'

class Screen extends React.Component {

    render() {
        // Conditional rendering according to page selected
        switch(this.props.page) {
            case "Menu": return (
                    <div id="screen-container">
                        <Menu activeIndex={this.props.activeIndex}/>
                    </div>);
                break;

            case "CoverFlow": return (
                    <div id="screen-container">
                        <CoverFlow />
                    </div>); 
                break;

            case "Music": return (
                <div id="screen-container">
                    <Music />
                </div>); 
                break;

            case "Games": return (
                <div id="screen-container">
                    <Games />
                </div>); 
                break;

            case "Settings": return (
                <div id="screen-container">
                    <Settings />
                </div>);  
                break;
        }
    }

}

export default Screen;