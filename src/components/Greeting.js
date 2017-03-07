import React, { Component } from 'react';
import { fetchSelects } from '../actions/cascadeSelect';
import { connect } from 'react-redux';
class Greetings extends Component {
  render() {
      return ( 
        <div>                      
              <div className="container">
                <h1>Welcome</h1>
              </div>            
        </div> 

      );
  }
}

Greetings.propTypes = {
    fetchSelects: React.PropTypes.func.isRequired
}



export default connect(null, { fetchSelects })(Greetings);
