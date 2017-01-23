import React, { Component } from 'react';
import MultiSelect from '../common/MultiSelect';
import { connect } from 'react-redux';
import { fetchTables } from '../../actions/tablesData';

class SampleEditCreate extends Component {

  componentWillMount(){
  	
  }

  render() {
    return (
    	<div className="container">
    		<h3>Sample</h3>
    		<MultiSelect/>
    	</div>
    );
  }
}

SampleEditCreate.propTypes = {
	fetchTables: React.PropTypes.func.isRequired	
}

function mapStateToProps(state){
	return {
		auth : state.auth
	}
}

SampleEditCreate.contextTypes = {
	router: React.PropTypes.object.isRequired
}

export default connect(mapStateToProps, {fetchTables:fetchTables} )(SampleEditCreate);
