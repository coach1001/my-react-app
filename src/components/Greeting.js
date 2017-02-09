import React, { Component } from 'react';
//import { fetchGrids } from '../actions/gridData';
import { fetchSelects } from '../actions/cascadeSelect';
import { connect } from 'react-redux';
/*import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';*/
class Greetings extends Component {
  
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
