import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSampleSets } from '../../actions/sampleSets';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';  

class SampleSetList extends Component {

  componentWillMount(){        
    this.props.fetchSampleSets();
  }

  rowClick(row){    
    this.context.router.push(`${this.context.router.location.pathname}/${row.id}`);      
  }

  render() {        
    return (    	    
    <div className="container">      
      <h2>Sample Sets</h2>
      <BootstrapTable data={ this.props.sampleSets.sampleSets } striped hover options={ { onRowClick : this.rowClick.bind(this) } } >
        <TableHeaderColumn dataField='id' isKey width='10%'>Set ID</TableHeaderColumn>
        <TableHeaderColumn dataField='sample_set' width='50%' filter={ { type: 'RegexFilter', delay: 100 } }>Set Identifier</TableHeaderColumn>
        <TableHeaderColumn dataField='created_on'>Created On</TableHeaderColumn>
        <TableHeaderColumn dataField='created_bt'>Created By</TableHeaderColumn>
      </BootstrapTable>      
    </div> 
    );
  }
}

SampleSetList.propTypes = {	
  fetchSampleSets : React.PropTypes.func.isRequired  
}

function mapStateToProps(state){        
  return {    
    sampleSets: state.sampleSets          
  }
}

SampleSetList.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect(mapStateToProps, { fetchSampleSets })(SampleSetList);