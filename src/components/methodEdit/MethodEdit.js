import React, { Component } from 'react';
import { connect } from 'react-redux';
import GridForm from '../common/GridFormV2';
import { FaArrowCircleLeft } from 'react-icons/lib/fa/';
import { fetchSampleVariables } from '../../actions/sampleVariables';


class MethodEdit extends Component {
  
  componentWillMount(){     	    
    this.props.fetchSampleVariables(this.props.params.sampleId);
  }

  goBack(){
    this.context.router.goBack();      
  }
  
  render() {    
    return <div className="container">
      <span style={{fontSize: '2em', cursor: 'pointer'}}>
      <FaArrowCircleLeft  onClick={this.goBack.bind(this)}  className="text-info" size="2em"/>
      </span>
      <h2>Sample Method</h2>
      {this.props.sampleVariables.length > 0 ?
        <GridForm style={{width: '90vh'}} scopeData={this.props.sampleVariables} sampleId={parseInt(this.props.params.sampleId,10)} methodCode={this.props.params.methodCode}/> : null}
    </div>    
  }
}

MethodEdit.propTypes = {	
  fetchSampleVariables: React.PropTypes.func.isRequired,
}

MethodEdit.contextTypes = {
  router: React.PropTypes.object.isRequired
}

function mapStateToProps(state){
  return {    
    isFetching: state.sampleVariables.isFetching,
    sampleVariables: state.sampleVariables.sampleVariables,          
  }
}
export default connect(mapStateToProps, { fetchSampleVariables })(MethodEdit);
