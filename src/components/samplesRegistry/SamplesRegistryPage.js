import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSamplesRequest } from '../../actions/samples';
import { fetchTable, fetchTables } from '../../actions/tablesData';
import { DataTable } from '../common/DataTable';
  
class SamplesRegistryPage extends Component {
  componentWillMount(){  	
    this.props.fetchTables(['samples','value_definitions','methods' ])
  }
  render() {        
    return (    	
    	<div className="container">
    		{/*      	      	
      	 this.props.tablesData.isFetching ? <div> : null
        */}
        {
          !this.props.tablesData.isFetching ?  
          <div>          
            <DataTable tableName={'value_definitions'} tablesData={this.props.tablesData}/>
          </div>
          : null
        }
      </div>    	
    );
  }
}

SamplesRegistryPage.propTypes = {
	fetchSamplesRequest : React.PropTypes.func.isRequired,
  fetchTable : React.PropTypes.func.isRequired,
  fetchTables : React.PropTypes.func.isRequired
}

function mapStateToProps(state){    
  return {    
    tablesData: state.tablesData
  }
}

export default connect(mapStateToProps, { fetchSamplesRequest, fetchTable, fetchTables })(SamplesRegistryPage);