import React, { Component } from 'react';

class SampleSelectionPage extends Component {
  render() {
    return (
      <div>        
        {this.props.children}              
      </div>
    );
  }
}

export default SampleSelectionPage;
