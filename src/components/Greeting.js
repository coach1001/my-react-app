import React, { Component } from 'react';
import { fetchSelects } from '../actions/cascadeSelect';
import { connect } from 'react-redux';
import {methods} from  '../components/common/constants/gridFormConstants.js';

class Greetings extends Component {
  componentWillMount(){
    console.log(methods);
  }

  render() {
      return ( 
        <div>
                       
              <div className="container">
                <h1> Greetings! </h1>
              </div>
            
        </div> 

      );
  }
}

Greetings.propTypes = {
    fetchSelects: React.PropTypes.func.isRequired
}



export default connect(null, { fetchSelects })(Greetings);
