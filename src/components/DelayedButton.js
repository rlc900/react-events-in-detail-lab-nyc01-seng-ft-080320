// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends Component

  handleDelayClick = (evt) => {
    setTimeout(this.props.onDelayedClick(evt.type), this.props.delay)
  }

  render() {
    return (
      <div>
        <button></button>
      </div>
    );
  }

}

export default DelayedButton;
