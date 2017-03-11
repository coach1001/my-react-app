import React, { Component } from 'react';
import { connect } from 'react-redux';
import GridForm from '../common/GridFormV3';
import { FaArrowCircleLeft } from 'react-icons/lib/fa/';
import { fetchSampleVariables, fetchSampleVariables2, fetchSampleVariables3 } from '../../actions/sampleVariables';
import { fetchSampleMethod } from '../../actions/sampleMethods';
import { fetchSample } from '../../actions/samples';
import { methods } from '../../components/common/constants/gridFormConstants';
import { setLoader } from '../../actions/loader';

class MethodEdit extends Component {
  
  componentWillMount(){     	        
    
    this.props.setLoader(true);
    this.props.fetchSampleVariables3(this.props.params.sampleId,this.props.params.methodId);
    this.props.fetchSampleMethod(this.props.params.sampleMethodId);
    this.props.fetchSample(this.props.params.sampleId);            
  }

  goBack(){
    this.context.router.goBack();      
  }
  
  printWindow(){
    window.print();
  }

  render() {    
    //console.log(this.props.sampleMethod);
    return <div className="container-print">              
        <span style={{fontSize: '2em', cursor: 'pointer'}}>
        <FaArrowCircleLeft  onClick={this.goBack.bind(this)}  className="text-info hidden-print" size="2em"/>      
        </span>
        <h3>Sample Number : {this.props.sample.sample}</h3>
        <h5>Method: {this.props.sampleMethod.label} - {this.props.sampleMethod.description}</h5> 
      <button onClick={this.printWindow.bind(this)} className="pull-right btn btn-lg btn-primary hidden-print">Print</button>
      {this.props.sampleVariables.length > 0 && Object.keys(this.props.sampleMethod).length > 0 && Object.keys(this.props.sample).length > 0 ?        
        <div>                    
          {                         
            <GridForm methods={methods} empty={this.props.params.empty ? true : false} style={{width: '90vh'}} sampleMethod={this.props.sampleMethod} scopeData={this.props.sampleVariables} sampleId={parseInt(this.props.params.sampleId,10)} methodCode={this.props.params.methodCode}/> 
          }          
        </div>
        : null}

    </div>    
  }
}

MethodEdit.propTypes = {	
  fetchSampleVariables: React.PropTypes.func.isRequired,
  fetchSampleVariables2: React.PropTypes.func.isRequired,
  fetchSampleMethod: React.PropTypes.func.isRequired,
  fetchSample: React.PropTypes.func.isRequired,
  setLoader: React.PropTypes.func.isRequired,  
  fetchSampleVariables3: React.PropTypes.func.isRequired,  
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

export default connect(mapStateToProps, { fetchSampleVariables, fetchSampleVariables2, fetchSampleVariables3, fetchSampleMethod, fetchSample, setLoader })(MethodEdit);
