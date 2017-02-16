import React, { Component } from 'react';

class MethodPage extends Component {
  render() {
    return (
      <div>        
        {this.props.children}              
      </div>
    );
  }
}

export default MethodPage;
