import React from 'react';
import ZingTouch from 'zingtouch';
import './Wheel.css'

class Wheel extends React.Component {
    componentDidMount() {
        var target = document.getElementById('wheel-container');
        var region = new ZingTouch.Region(target);
        var currentAngle = 0;
        var countClockwise = 0;
        var countAntiClockwise = 0;
        var rotationSensitivity = 20;
    
        region.bind(target, 'rotate', function(e) {
            var rotatable = document.getElementById('wheel-container');
            currentAngle += e.detail.distanceFromLast;
            rotatable.style.transform = 'rotate(' + currentAngle + 'deg)';
    
            if (e.detail.distanceFromLast > 0) {
              countClockwise++;
              countAntiClockwise = 0;
              if ((countClockwise % rotationSensitivity) === 0) {
                console.log("clockwise ", countClockwise);
              }
            } 
            else {
              countClockwise = 0;
              countAntiClockwise++;
              if ((countAntiClockwise % rotationSensitivity) === 0) {
                console.log("anti-clockwise ", countAntiClockwise)
              }
            }
    
        });
    }

    render() {
        return (
            <div id="wheel-container">
                <div id="menu" className="action-item">MENU</div>
                <div id="enter" className="action-item">Enter</div>
                <div id="fwd" className="action-item">
                    <i className="fas fa-forward"></i>
                </div>
                <div id="bkwd" className="action-item">
                    <i className="fas fa-backward"></i>
                </div>
                <div id="pause-play" className="action-item">
                    <i className="fas fa-play"></i>
                    <i className="fas fa-pause"></i>
                </div>
            </div>
        );
    }

}

export default Wheel;