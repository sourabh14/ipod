import React from 'react';

class Menu extends React.Component {

    render() {
        return (
            <>
                {/* Screen options */}
                <div id="screen" className="list-group w-50 h-100 bg-white opacity-75">
                    <h4 className="mx-auto my-2">iPod.js</h4>
                    <div 
                        className={
                            "list-group-item border-0 py-2" + ((this.props.activeIndex === 0)?" active" : "")
                        }
                    > Cover Flow</div>
                    <div 
                        className={
                            "list-group-item border-0 py-2" + ((this.props.activeIndex === 1)?" active" : "")
                        }
                    > Music</div>
                    <div 
                        className={
                            "list-group-item border-0 py-2" + ((this.props.activeIndex === 2)?" active" : "")
                        }
                    > Games</div>
                    <div 
                        className={
                            "list-group-item border-0 py-2" + ((this.props.activeIndex === 3)?" active" : "")
                        }
                    > Settings</div>
                </div>
                <div className="d-inline-block text-white m-1"> {(new Date()).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</div>
            </>
        );
    }

}

export default Menu;