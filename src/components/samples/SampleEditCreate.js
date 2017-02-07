import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSample } from '../../actions/samples';
import { FaArrowCircleLeft } from 'react-icons/lib/fa/';

class SampleEditCreate extends Component {

  componentWillMount(){    
    this.props.fetchSample(this.props.params.sampleId);
  }

  componentWillUpdate(nextProps){    
    const cP = this.props;
    const nP = nextProps;
    console.log(cP.samples.isFetching,nP.samples.isFetching);
    if(!nP.samples.isFetching && cP.samples.isFetching !== nP.samples.isFetching){      
      this.setState(nP.samples.sample);
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
          <h3>{this.state.sample}</h3>       
          {JSON.stringify(this.state)}
        </div>
        : null
      }
      </div>
    );
  }
}

SampleEditCreate.contextTypes = {
  router: React.PropTypes.object.isRequired
}

SampleEditCreate.propTypes = { 
  fetchSample : React.PropTypes.func.isRequired  
}

function mapStateToProps(state){
  return {    
    samples: state.samples          
  }
}

export default connect(mapStateToProps, { fetchSample })(SampleEditCreate);