import React from 'react';
import './Screen.css'
//import ZingTouch from 'zingtouch';

class Screen extends React.Component {
    componentDidMount() {
       
    }

    render() {
        return (
            <div id="screen-container">
                <div id="screen" className="list-group w-50 h-100 bg-white opacity-75">
                    <h4 class="mx-auto my-2">iPod.js</h4>
                    <div className="list-group-item border-0 py-2 active">Cover Flow</div>
                    <div className="list-group-item border-0 py-2">Music</div>
                    <div className="list-group-item border-0 py-2">Games</div>
                    <div className="list-group-item border-0 py-2">Settings</div>
                </div>
            </div>
        );
    }

}

export default Screen;