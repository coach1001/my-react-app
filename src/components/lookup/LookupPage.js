import React from 'react';
import { fetchGrids } from '../../actions/gridData';
import { fetchSelects } from '../../actions/cascadeSelect';
import CascadeSelect from '../common/CascadeSelect';
import { connect } from 'react-redux';

//import SingleSelect from '../common/SingleSelect';


class LookupPage extends React.Component {

  componentWillMount(){
  	this.props.fetchGrids([
        { name: 'provinces' },
        { name: 'cities'  },
        { name: 'suburbs' }       
    ]);

    this.props.fetchSelects([
        { name: 'provinces', value: 'id', display: 'name'},
        { name: 'cities', value: 'id', display: 'name', filter: 'province'},
        { name: 'suburbs', value: 'id', display: 'name', filter: 'city'}   
    ]);
  }

  render() {
    return (
      <div>
      	<h1>Look up Tables</h1>        
    	  <CascadeSelect />
      </div>
    );
  }
}

LookupPage.propTypes = {
	fetchGrids : React.PropTypes.func.isRequired
}

export default connect(null, { fetchGrids, fetchSelects })(LookupPage); 