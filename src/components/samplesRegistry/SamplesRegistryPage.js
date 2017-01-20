import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSamplesRequest } from '../../actions/samples';
import { fetchTable, fetchTables } from '../../actions/tablesData';
import { DataTable } from '../common/DataTable';
  
class SamplesRegistryPage extends Component {
  componentWillMount(){  	
    this.props.fetchTables(['samples'])
  }
  render() {        
    return (    	
    <div className="row">
      <div className="col-md-1"></div>
      <div className="col-md-10">
        {
          !this.props.tablesData.isFetching ?  
          <div>          
            <DataTable tableName={'samples'} tablesData={this.props.tablesData}/>
          </div>
          : null
        }
      </div>    	
      <div className="col-md-1"></div>
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