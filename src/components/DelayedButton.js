// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends Component {

  handleDelayClick = (evt) => {
    let {onDelayedClick, delay} = this.props
    setTimeout(this.props.onDelayedClick(evt.type), this.props.delay)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleDelayClick}></button>
      </div>
    );
  }

}

export default DelayedButton;
