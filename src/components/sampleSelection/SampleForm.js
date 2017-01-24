import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTables } from '../../actions/tablesData';
import find from 'lodash/find';
import GridForm from '../common/GridForm';

class SampleForm extends Component {
  componentWillMount(){  	    
    this.props.tablesData.isFetching = true;
    this.props.fetchTables([`sample_values?form_id=eq.${this.context.router.params.formId}&sample_id=eq.${this.context.router.params.sampleId}`]);                
  }

  componentDidMount(){
    
  }
  
  render() {

    let scopeData = null;
    
    if(!this.props.tablesData.isFetching){
      scopeData = find(this.props.tablesData.tables,{ tableName: 'sample_values' });
    }

    
    return (    	
    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8">
        {
          !this.props.tablesData.isFetching ?  
          <GridForm scopeData={scopeData} />
          : null
        }
      </div>    	
      <div className="col-md-2"></div>
    </div> 
    );
  }
}

SampleForm.propTypes = {	
  fetchTables : React.PropTypes.func.isRequired
}

SampleForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

function mapStateToProps(state){    
  return {    
    tablesData: state.tablesData
  }
}

export default connect(mapStateToProps, { fetchTables })(SampleForm);
