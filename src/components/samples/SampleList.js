import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTables } from '../../actions/tablesData';
import { DataTable } from '../common/DataTable';
  
class SampleList extends Component {
  componentWillMount(){  	
    this.props.fetchTables(['samples']);
  }
  render() {        
    return (    	
    <div className="row">
      <div className="col-md-1"></div>
      <div className="col-md-10">
        {
          !this.props.tablesData.isFetching ?  
          <div>
            <h3>Samples Registry</h3><br></br>          
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

SampleList.propTypes = {	
  fetchTables : React.PropTypes.func.isRequired
}

function mapStateToProps(state){    
  return {    
    tablesData: state.tablesData
  }
}

export default connect(mapStateToProps, { fetchTables })(SampleList);