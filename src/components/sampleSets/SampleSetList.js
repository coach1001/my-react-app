import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSampleSets } from '../../actions/sampleSets';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';  
import moment from 'moment';

class SampleSetList extends Component {

  componentWillMount(){        
    this.props.fetchSampleSets();
  }

  rowClick(row){    
    this.context.router.push(`${this.context.router.location.pathname}/${row.id}`);      
  }

  addSampleSet(){
    this.context.router.push(`${this.context.router.location.pathname}/new`); 
  }

  dateFormatter(cell,row){    
    return cell ? moment(cell).format('DD/MM/YYYY') : null ;
  }

  render() {        
    return (    	    
    <div className="container">      
      <h2>Samples Sets<button className="btn btn-lg btn-primary pull-right" onClick={this.addSampleSet.bind(this)}>Add Sample Set</button></h2><br/>
      <BootstrapTable data={ this.props.sampleSets.sampleSets } striped hover options={ { onRowClick : this.rowClick.bind(this) } } >
        <TableHeaderColumn dataField='id' isKey width='10%' hidden>Set ID</TableHeaderColumn>
        <TableHeaderColumn dataField='sample_set' dataSort={ true } width='44%' filter={ { type: 'RegexFilter', delay: 100 } }>Set Identifier</TableHeaderColumn>
        <TableHeaderColumn dataField='created_on' dataSort={ true } width='23%' dataFormat={ this.dateFormatter } filter={{type: 'DateFilter'}}>Created On</TableHeaderColumn>
        <TableHeaderColumn dataField='created_by' width='23%'>Created By</TableHeaderColumn>
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