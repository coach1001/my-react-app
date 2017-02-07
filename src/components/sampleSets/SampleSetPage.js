import React, { Component } from 'react';

class SampleSetPage extends Component {
  render() {
    return (
      <div>        
        {this.props.children}              
      </div>
    );
  }
}

export default SampleSetPage;
