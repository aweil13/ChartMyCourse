import React from 'react';

const ButtonToolbar = props => {
    return (
        <div className='button-toolbar-container'>
            <div className='distance-container'>
                <span className='literal-distance'>DISTANCE</span>
                <span className='distance-text'>{props.distance}</span>
            </div>
            <div className='toolbar-buttons'>
            <div className='undo-container' onClick={props.undoWaypoint}>
                <span id='undo-circle' className="fas fa-undo-alt"></span>
                <span className='clear-text'>UNDO</span>
            </div>
            <div className='return-container' onClick={props.returnToOrigin}>
                <span id='return-circle' className='fas fa-circle-notch'></span>
                <span className='clear-text'>RETURN</span>
            </div>
            <div className='clear-container' onClick={props.clearMarkers}>
                <span id='clear-x' className='fas fa-times'></span>
                <span className='clear-text'>CLEAR</span>
            </div>
            </div>
        </div>
    )
}

export default ButtonToolbar;