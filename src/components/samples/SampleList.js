import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSamples } from '../../actions/samples';
import { setLoader } from '../../actions/loader';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';  
import moment from 'moment';

class SampleList extends Component {

  componentWillMount(){        
    this.props.setLoader(true);
    this.props.fetchSamples().then( (res)=>{
      this.props.setLoader(false);
    },( (err)=>{
      this.props.setLoader(false);
    }));
  }

  rowClick(row){    
    this.context.router.push(`${this.context.router.location.pathname}/${row.id}`);    
  }

  addSample(){
    this.context.router.push(`${this.context.router.location.pathname}/new`); 
  }

  dateFormatter(cell,row){        
    return cell ? moment(cell).format('DD/MM/YYYY') : null ;            
  }

  render() {        
    return (          
    <div className="container" >      
      <h2>Samples <span className="label label-primary" style={{borderRadius: '10px !important'}}>{this.props.samples.samples.length}</span><button className="btn btn-lg btn-primary pull-right" onClick={this.addSample.bind(this)}>Add Sample</button></h2>
      <br/>
      <div className="">
      <BootstrapTable tableStyle={{height: "69vh"}} data={ this.props.samples.samples } striped hover options={ { onRowClick : this.rowClick.bind(this) } }>
        <TableHeaderColumn dataField='id' width='10%' isKey hidden>Sample ID</TableHeaderColumn>
        <TableHeaderColumn dataField='sample' width='25%' dataSort={ true }  filter={ { type: 'RegexFilter', delay: 100 } } >Sample Number</TableHeaderColumn>
        {/*<TableHeaderColumn dataField='sample_set' width='20%' dataSort={ true } >Sample Set</TableHeaderColumn>*/}
        <TableHeaderColumn dataField='latitude'>Latitude</TableHeaderColumn>
        <TableHeaderColumn dataField='longitude'>Longitude</TableHeaderColumn>
        <TableHeaderColumn dataField='start_depth'>Latitude</TableHeaderColumn>
        <TableHeaderColumn dataField='end_depth'>Longitude</TableHeaderColumn>

        {/*<TableHeaderColumn dataField='created_on' width='23%' dataSort={ true } filter={{type: 'DateFilter', delay: 100 }}  dataFormat={ this.dateFormatter }>Created On</TableHeaderColumn>
        <TableHeaderColumn dataField='created_by'>Created By</TableHeaderColumn>*/}
      </BootstrapTable></div>      
    </div> 
    );
  }
}

SampleList.propTypes = { 
  fetchSamples : React.PropTypes.func.isRequired,
  setLoader : React.PropTypes.func.isRequired,
}

function mapStateToProps(state){        
  return {    
    samples: state.samples          
  }
}

SampleList.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect(mapStateToProps, { fetchSamples, setLoader })(SampleList);