import React from 'react';
import ZingTouch from 'zingtouch';
import './Wheel.css'

class Wheel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        var target = document.getElementById('wheel-container');
        var region = new ZingTouch.Region(target);
        var currentAngle = 0;
        var countClockwise = 0;
        var countAntiClockwise = 0;
        var rotationSensitivity = 20;
        var self = this;
    
        // Bind rotate event on wheel
        region.bind(target, 'rotate', function(e) {
            var rotatable = document.getElementById('wheel-container');
            currentAngle += e.detail.distanceFromLast;
            rotatable.style.transform = 'rotate(' + currentAngle + 'deg)';
            
            // Clockwise rotation
            if (e.detail.distanceFromLast > 0) {
              countClockwise++;
              countAntiClockwise = 0;
              if ((countClockwise % rotationSensitivity) === 0) {
                self.props.increaseState();
              }
            } 
            else {  // Anti clockwise rotation
              countClockwise = 0;
              countAntiClockwise++;
              if ((countAntiClockwise % rotationSensitivity) === 0) {
                self.props.decreaseState();
              }
            }
    
        });
    }

    render() {
        // Wheel options
        return (
            <>
            <div id="wheel-container">
                <div id="menu" role="button" className="action-item" onClick={() => {this.props.goToMenu()}}>MENU</div>
                <div id="enter" role="button" className="action-item" onClick={() => {this.props.enterState()}}></div>
                <div id="fwd" role="button" className="action-item">
                    <i className="fas fa-forward" onClick={() => {this.props.increaseState()}}></i>
                </div>
                <div id="bkwd" role="button" className="action-item" onClick={() => {this.props.decreaseState()}}>
                    <i className="fas fa-backward"></i>
                </div>
                <div id="pause-play" role="button" className="action-item">
                    <i className="fas fa-play"></i>
                    <i className="fas fa-pause"></i>
                </div>
            </div>
            </>
        );
    }

}

export default Wheel;