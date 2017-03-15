import React, { Component } from 'react';
import { fetchSelects } from '../actions/cascadeSelect';
import { connect } from 'react-redux';
import image1 from '../dot.svg';

class Greetings extends Component {
  render() {
      return ( 
        <div > 
              <div style={{height: '20vh'}}/>                     
              <div className="container" style={{height: '60vh', verticalAlign: 'middle', textAlign: 'center'}}>
                <img role="presentation" src={image1} style={{height: '200'}}/>
                <h1 style={{fontSize: '45'}}> Laboratory Calculation Software</h1>
              </div>            
        </div> 

      );
  }
}

Greetings.propTypes = {
    fetchSelects: React.PropTypes.func.isRequired
}



export default connect(null, { fetchSelects })(Greetings);
