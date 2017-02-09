import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSamples } from '../../actions/samples';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';  

class SampleList extends Component {

  componentWillMount(){        
    this.props.fetchSamples();
  }

  rowClick(row){    
    this.context.router.push(`${this.context.router.location.pathname}/${row.id}`);    
  }

  addSample(){
    this.context.router.push(`${this.context.router.location.pathname}/new`); 
  }

  render() {        
    return (          
    <div className="container">      
      <h2>Samples <button className="btn btn-lg btn-primary pull-right" onClick={this.addSample.bind(this)}>Add Sample</button></h2>
      <br/>
      <BootstrapTable data={ this.props.samples.samples } striped hover options={ { onRowClick : this.rowClick.bind(this) } }>
        <TableHeaderColumn dataField='id' width='10%' isKey hidden>Sample ID</TableHeaderColumn>
        <TableHeaderColumn dataField='sample' width='25%' filter={ { type: 'RegexFilter', delay: 100 } } >Sample Number</TableHeaderColumn>
        <TableHeaderColumn dataField='sample_set' width='25%' >Sample Set</TableHeaderColumn>
        <TableHeaderColumn dataField='latitude'>Latitude</TableHeaderColumn>
        <TableHeaderColumn dataField='longitude'>Longitude</TableHeaderColumn>
        <TableHeaderColumn dataField='created_on'>Created On</TableHeaderColumn>
        <TableHeaderColumn dataField='created_bt'>Created By</TableHeaderColumn>
      </BootstrapTable>      
    </div> 
    );
  }
}

SampleList.propTypes = { 
  fetchSamples : React.PropTypes.func.isRequired
}

function mapStateToProps(state){        
  return {    
    samples: state.samples          
  }
}

SampleList.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect(mapStateToProps, { fetchSamples })(SampleList);