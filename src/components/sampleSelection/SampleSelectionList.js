import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTables } from '../../actions/tablesData';
import { DataTable } from '../common/DataTable';
import find from 'lodash/find';

class SampleSelectionList extends Component {
  componentWillMount(){  	
    this.props.fetchTables([`sample_forms?form_id=eq.${this.context.router.params.formId}`,`forms?id=eq.${this.context.router.params.formId}`]);
  }
  render() {          
    const forms = find(this.props.tablesData.tables,{ tableName: 'forms'});    
    
    return (    	
    <div className="row">
      <div className="col-md-1"></div>
      <div className="col-md-10">
        {
          !this.props.tablesData.isFetching ?  
          <div>
            <h3>{forms.data[0].name} -  Samples</h3><br></br>          
            <DataTable tableName={'sample_forms'} tablesData={this.props.tablesData}/>
          </div>
          : null
        }
      </div>    	
      <div className="col-md-1"></div>
    </div> 
    );
  }
}

SampleSelectionList.propTypes = {	
  fetchTables : React.PropTypes.func.isRequired
}

SampleSelectionList.contextTypes = {
  router: React.PropTypes.object.isRequired
}

function mapStateToProps(state){    
  return {    
    tablesData: state.tablesData
  }
}

export default connect(mapStateToProps, { fetchTables })(SampleSelectionList);