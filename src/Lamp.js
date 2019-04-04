// Lamp.js
import React, { Component } from 'react';

class Lamp extends Component {
  state= {
    on:true
  }
  
  handleClick = () => {
    this.setState({ on: !this.state.on });
  };
  
  render() {
    
    const on = this.state.on ? 'Working' : 'On break';
    const animation = this.state.on ? 'on' : 'off';
    return (
      <div className="Lamp">
        <button onClick={this.handleClick} 
        className={light}>{light.toUpperCase()}
        
        </button>
        <figure className={on} />
      </div>
    );
  }
}

export default Lamp;
