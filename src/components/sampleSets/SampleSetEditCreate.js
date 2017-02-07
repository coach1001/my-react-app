import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSampleSet } from '../../actions/sampleSets';
import { FaArrowCircleLeft } from 'react-icons/lib/fa/';

class SampleSetEditCreate extends Component {

  componentWillMount(){    
  	this.props.fetchSampleSet(this.props.params.sampleSetId);
  }

  componentWillUpdate(nextProps){    
    const cP = this.props;
    const nP = nextProps;
    console.log(cP.sampleSets.isFetching,nP.sampleSets.isFetching);
    if(!nP.sampleSets.isFetching && cP.sampleSets.isFetching !== nP.sampleSets.isFetching){      
      this.setState(nP.sampleSets.sampleSet);
    }
  }

  goBack(e){
    this.context.router.goBack();
  }

  render() {    
    return (
    	<div>
      {
        this.state ?
        <div className="container">
        <span onClick={this.goBack.bind(this)} style={{fontSize: '2em', cursor: 'pointer'}}><FaArrowCircleLeft className="text-info" size="2em"/></span>
      		<h3>{this.state.sample_set}</h3>    		
      	  {JSON.stringify(this.state)}
        </div>
        : null
      }
      </div>
    );
  }
}

SampleSetEditCreate.contextTypes = {
  router: React.PropTypes.object.isRequired
}

SampleSetEditCreate.propTypes = { 
  fetchSampleSet : React.PropTypes.func.isRequired  
}

function mapStateToProps(state){
  return {    
    sampleSets: state.sampleSets          
  }
}

export default connect(mapStateToProps, { fetchSampleSet })(SampleSetEditCreate);