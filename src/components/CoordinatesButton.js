// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component {

  handleClick = (evt) => {
    let targetEvent = evt.target;
    onReceiveCoordinates(targetEvent)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}></button>
      </div>
    );
  }

}

export default CoordinatesButton;
