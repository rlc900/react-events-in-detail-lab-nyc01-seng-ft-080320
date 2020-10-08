// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component {

  state = {
    x: 0,
    y: 0
  }

  handleClick = (evt) => {
    let xCoordinate = evt.screenX;
    let yCoordinate = evt.screenY;
    onReceiveCoordinates(xCoordinate, yCoordinate)
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
