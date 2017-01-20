import React, { Component } from 'react';

class SamplePage extends Component {
  render() {
    return (
      <div>        
        {this.props.children}              
      </div>
    );
  }
}

export default SamplePage;
