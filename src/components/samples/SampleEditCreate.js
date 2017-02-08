import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSample } from '../../actions/samples';
import { fetchSampleMethods } from '../../actions/sampleMethods';
import { fetchSampleSets } from '../../actions/sampleSets';
import { FaArrowCircleLeft } from 'react-icons/lib/fa/';
import TextFieldGroup from '../../components/common/TextFieldGroup';
import Datetime from 'react-datetime';

class SampleEditCreate extends Component {

  componentWillMount(){    
    this.setState( {sample: {}, sampleMethods: [], sampleSets: []});

    this.props.fetchSample(this.props.params.sampleId);
    this.props.fetchSampleMethods(this.props.params.sampleId);
    this.props.fetchSampleSets();        
  }

  componentWillUpdate(nextProps){    
    const cP = this.props;
    const nP = nextProps;    
    if(!nP.sampleSets.isFetching && cP.sampleSets.isFetching !== nP.sampleSets.isFetching){            
      this.setState({ sampleSets: nP.sampleSets.sampleSets});
    }
    if(!nP.samples.isFetching && cP.samples.isFetching !== nP.samples.isFetching){      
      nP.samples.sample.errors = {};
      this.setState({ sample: nP.samples.sample});
    }
    if(!nP.sampleMethods.isFetching && cP.sampleMethods.isFetching !== nP.sampleMethods.isFetching){      
      
      nP.sampleMethods.sampleMethods.map( (method,index) => {
        if(method.id){
          method.exists = true;          
        }
        return method;
      })      
      this.setState({ sampleMethods: nP.sampleMethods.sampleMethods});
    }
  }

  goBack(e){
    this.context.router.goBack();
  }

  onChangeMethods(index,e){    
    const oState = this.state;
    oState.sampleMethods[index].exists = !oState.sampleMethods[index].exists;
    this.setState(oState);                      
  }
    
  onChangeSample(e){
    const oState = this.state;
    oState.sample[e.target.name] = e.target.value;
    this.setState(oState);
  }

  render() {    
    return (
      <div>           
            <div className="container">                  
              <span onClick={this.goBack.bind(this)} style={{fontSize: '2em', cursor: 'pointer'}}><FaArrowCircleLeft className="text-info" size="2em"/><button className="btn btn-lg btn-primary pull-right">Save</button></span><br/><br/>              
              
              {
                Object.keys(this.state.sample).length > 0  ?
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <div style={{fontWeight: 'bold'}} className="panel-title">Sample Details</div>
                  </div>
                  <div className="panel-body">                    
                    <form>
                      
                        <div className="input-group">
                          <span className="input-group-addon">Sample Number</span>
                          <input onChange={this.onChangeSample.bind(this)} value={this.state.sample.sample || ''} name="sample" type="text" className="form-control" placeholder="Sample Number"/>
                          <span className="input-group-addon">Sample Set</span>
                          <select onChange={this.onChangeSample.bind(this)}  value={this.state.sample.sample_set || 0} name="sample_set" className="form-control" placeholder="Sample Set">
                          {
                            this.state.sampleSets.map( (set, index) => {
                              return <option key={index} value={set.id} >{set.sample_set}</option>
                            })
                          }
                          </select>                          
                        </div><br/>
                        <div className="input-group">
                        <span className="input-group-addon">Latitude</span>
                          <input onChange={this.onChangeSample.bind(this)} value={this.state.sample.latitude || 0.0} name="latitude" type="number" className="form-control" placeholder=""/>
                          <span className="input-group-addon">Longitude</span>
                          <input onChange={this.onChangeSample.bind(this)} value={this.state.sample.longitude || 0.0} name="longitude" type="number" className="form-control" placeholder=""/>
                          <span className="input-group-addon">Date</span>
                          <Datetime onChange={this.onChangeSample.bind(this)} value={this.state.sample.created_on} defaultValue={new Date()}/>
                        </div>
                    </form>                      
                  </div>
                </div>       
                : null
              }
              {
                this.state.sampleMethods.length > 0 ?
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <div style={{fontWeight: 'bold'}} className="panel-title">Sample Methods</div>
                  </div>
                  <div className="panel-body">
                  {
                    this.state.sampleMethods.map( (method,index) => {
                    return  <div key={index}>                                                    
                              <div className="checkbox">
                                <button className="btn btn-primary" disabled={!method.exists}>Enter Data</button>&nbsp;&nbsp;
                                <label style={{fontSize: '1.1em'}}><input type="checkbox" onChange={this.onChangeMethods.bind(this,index)} checked={method.exists}/>&nbsp;{method.label}: {method.description}</label>                                
                              </div>
                            </div>
                    })                    
                  }   
                  </div>
                </div>       
                : null
              }
            </div>                
      </div>
    );
  }
}

SampleEditCreate.contextTypes = {
  router: React.PropTypes.object.isRequired
}

SampleEditCreate.propTypes = { 
  fetchSample : React.PropTypes.func.isRequired,  
  fetchSampleMethods : React.PropTypes.func.isRequired,
  fetchSampleSets: React.PropTypes.func.isRequired
}

function mapStateToProps(state){
  return {    
    samples: state.samples,          
    sampleMethods: state.sampleMethods,
    sampleSets: state.sampleSets,
  }
}

export default connect(mapStateToProps, { fetchSample, fetchSampleMethods, fetchSampleSets })(SampleEditCreate);