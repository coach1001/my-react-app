import React, { Component } from 'react';
import { connect } from 'react-redux';
import GridForm from '../common/GridFormV2';
import { FaArrowCircleLeft } from 'react-icons/lib/fa/';
import { fetchSampleVariables } from '../../actions/sampleVariables';
import { fetchSampleMethod } from '../../actions/sampleMethods';
import { fetchSample } from '../../actions/samples';

class MethodEdit extends Component {
  
  componentWillMount(){     	    
    
    this.props.fetchSampleVariables(this.props.params.sampleId);
    this.props.fetchSampleMethod(this.props.params.methodId);
    this.props.fetchSample(this.props.params.sampleId);    
    
  }

  goBack(){
    this.context.router.goBack();      
  }
  
  printWindow(){
    window.print()
  }

  render() {    
    return <div className="container-print">
      <span style={{fontSize: '2em', cursor: 'pointer'}}>
      <FaArrowCircleLeft  onClick={this.goBack.bind(this)}  className="text-info hidden-print" size="2em"/>
      &nbsp;{this.props.sample.sample} - {this.props.sampleMethod.label}
      </span>        
      <button onClick={this.printWindow.bind(this)} className="pull-right btn btn-lg btn-primary hidden-print">Print</button>
      {this.props.sampleVariables.length > 0 && Object.keys(this.props.sampleMethod).length > 0 && Object.keys(this.props.sample).length > 0 ?        
        <div>                    
          {                         
            <GridForm empty={this.props.params.empty ? true : false} style={{width: '90vh'}} sampleMethod={this.props.sampleMethod} scopeData={this.props.sampleVariables} sampleId={parseInt(this.props.params.sampleId,10)} methodCode={this.props.params.methodCode}/> 
          }
          
        </div>
        : null}
    </div>    
  }
}

MethodEdit.propTypes = {	
  fetchSampleVariables: React.PropTypes.func.isRequired,
  fetchSampleMethod: React.PropTypes.func.isRequired,
  fetchSample: React.PropTypes.func.isRequired,
}

MethodEdit.contextTypes = {
  router: React.PropTypes.object.isRequired
}

function mapStateToProps(state){
  return {    
    isFetching: state.sampleVariables.isFetching,
    sampleVariables: state.sampleVariables.sampleVariables,
    sampleMethod: state.sampleMethods.sampleMethod,
    sample: state.samples.sample,          
  }
}
export default connect(mapStateToProps, { fetchSampleVariables, fetchSampleMethod, fetchSample })(MethodEdit);
