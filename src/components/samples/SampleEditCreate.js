import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSample, updateCreateSample, deleteSample } from '../../actions/samples';
import { fetchSampleMethods, updateSampleMethods } from '../../actions/sampleMethods';
import { fetchSampleSets } from '../../actions/sampleSets';
import { FaArrowCircleLeft } from 'react-icons/lib/fa/';
import Datetime from 'react-datetime';
import Confirm from 'react-confirm-bootstrap';
import moment from 'moment';
import { addFlashMessage } from '../../actions/flashMessages';
import {notify} from 'react-notify-toast';

class SampleEditCreate extends Component {

  componentWillMount(){    
    this.setState( {sample: {}, sampleMethods: [], sampleSets: []});
    if(this.props.params.sampleId){
      this.props.fetchSample(this.props.params.sampleId);
      this.props.fetchSampleMethods(this.props.params.sampleId);
      this.props.fetchSampleSets();        
    }else{      
      this.props.fetchSampleMethods(0);
      this.props.fetchSampleSets();        
      let sample = {
        created_on : moment(),
        sample_set: null
      }
      this.setState({sample: sample});
    }      
  }

  componentWillUpdate(nextProps){    
    const cP = this.props;
    const nP = nextProps;        
    
    if(!nP.sampleSets.isFetching && cP.sampleSets.isFetching !== nP.sampleSets.isFetching){            
      this.setState({ sampleSets: nP.sampleSets.sampleSets});
    }
    
    if(!nP.samples.isFetching && cP.samples.isFetching !== nP.samples.isFetching){      
      if(nP.samples.sample.created_on){
        nP.samples.sample.created_on = moment(nP.samples.sample.created_on);  
      }else{
        
        nP.samples.sample.created_on = moment();  
      }            
      this.setState({ sample: nP.samples.sample});
    }
    
    if(!nP.sampleMethods.isFetching && cP.sampleMethods.isFetching !== nP.sampleMethods.isFetching){                  
      nP.sampleMethods.sampleMethods.map( (method,index) => {
        if(method.id){
          method.exists = true;          
        }else{
          method.exists = false;
        }
        return method;
      })      
      this.setState({ sampleMethods: nP.sampleMethods.sampleMethods});      
    }  
  }

  goBack(e){
    e.preventDefault();    
    this.context.router.push('/samples');
  }

  onChangeMethods(index,e){        
    const oState = this.state;
    oState.sampleMethods[index].exists = !oState.sampleMethods[index].exists;     
    this.setState(oState);                          
  }
    
  onChangeSample(e){        
    if(e._isAMomentObject){
      const oState = this.state;
      oState.sample.created_on = e;      
      this.setState(oState);
    }else{
      const oState = this.state;
      oState.sample[e.target.name] = e.target.value;
      this.setState(oState);
    }
  }

  saveSample(e){        

    let oState = this.state;      
    if(oState.sample.sample_set === ' '){
      oState.sample.sample_set = null;
    }    
    if(oState.sample.sample){
      try{
       oState.sample.created_on = oState.sample.created_on.add(2,'h');
      }catch(ex){}
      
      
      this.props.updateCreateSample(oState.sample).then( (res)=>{
        
        notify.show('Sample Saved Successfully','success',2000);        
        
        if(res.data.id){          
         oState.sample.id = res.data.id;
         this.context.router.push(`samples/${res.data.id}`);        
        }
        
        this.props.updateSampleMethods(oState.sampleMethods, oState.sample.id).then( (res)=>{
          this.props.fetchSampleMethods(oState.sample.id);
        });

        this.setState(oState);        
      }, (res)=>{
        notify.show('Server Error, Contact Administrator','error',2000);
            
      })   
    }else{
        notify.show('Cannot Save, Sample Number Required','error',2000);
    }

  }

  deleteSample(e){    
    this.props.deleteSample(this.state.sample.id).then( (res) => {        
        notify.show(`Sample Number ${this.state.sample.sample} successfully deleted`,'warning',2000);
        this.context.router.goBack();

    }, (res) => {
      notify.show('Server Error, Contact Administrator','error',2000);
    })
  }

  editSampleMethod(method){                   
   const oState = this.state;

   this.props.updateSampleMethods(oState.sampleMethods, oState.sample.id).then( (res)=>{            
      
      this.props.fetchSampleMethods(oState.sample.id).then((res_)=>{
        notify.show('Sample Methods Saved Successfully','success',2000);
        
         let sample_method_id=null;
         res_.data.map((element)=>{
            if( element.method === method.method_id && element.sample === oState.sample.id){
              sample_method_id = element.id
            }
            return element;
         });
        this.context.router.push(`/sampleMethod/${oState.sample.id}/${method.method_code}/${sample_method_id}`);        
      })            
    });
  }

  onChangeFilter(e){
    let oState = this.state;
    let filteredSets = [];
    const filter = e.target.value;    
    const sampleSets = this.props.sampleSets.sampleSets;

    if(filter === ''){
      oState.sampleSets = sampleSets;
      this.setState(oState);
    }else{
      filteredSets = sampleSets.filter( (item) => {
       if(item.sample_set.indexOf(filter) > -1 ){
          return item;   
        }
        return null;
      })
      oState.sampleSets = filteredSets;
      this.setState(oState);
    }
  }

  render() {  
                  
    return (    
      <div>           
            <div className="container">                  
              <span style={{fontSize: '2em', cursor: 'pointer'}}>
                <FaArrowCircleLeft  onClick={this.goBack.bind(this)}  className="text-info" size="2em"/>
                <Confirm onConfirm={this.deleteSample.bind(this)} body="Are you sure you want to Delete this Sample?" confirmText="Confirm Delete" title="Delete Sample">
                  <button disabled={this.state.sample.id ? false : true} className="btn btn-lg btn-danger pull-right">Delete</button>
                </Confirm>  
                <span className="pull-right">&nbsp;</span>
                <Confirm onConfirm={this.saveSample.bind(this)} confirmBSStyle='primary' body="Are you sure you want to Save this Sample?" confirmText="Confirm Save" title="Save Sample">
                  <button  className="btn btn-lg btn-primary pull-right">Save</button>
                </Confirm>
              </span>              
              
              {
                Object.keys(this.state.sample).length > 0 || Object.keys(this.props.params).length === 0 ?
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <div style={{fontWeight: 'bold'}} className="panel-title">Sample Details</div>
                  </div>
                  <div className="panel-body">                                             
                    
                    <form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-group">
                          <span className="input-group-addon">Sample Number</span>
                          <input onChange={this.onChangeSample.bind(this)} value={this.state.sample.sample || ''} name="sample" type="text" className="form-control" placeholder="Sample Number"/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-group">
                          <span className="input-group-addon">Sample Set</span>                          
                          <select onChange={this.onChangeSample.bind(this)}  value={this.state.sample.sample_set || 0} name="sample_set" className="form-control" placeholder="Sample Set">
                          <option key={-1} value={' '}>No Sample Set</option>
                          {                            
                            
                            this.state.sampleSets.map( (set, index) => {
                              return <option key={index} value={set.id} >{set.sample_set}</option> 
                            })
                          }
                          </select>
                          <span className="input-group-addon">Filter</span>                          
                          <input value={this.state.filter} name="filter" onChange={this.onChangeFilter.bind(this)} type="text" className="form-control" placeholder="Filter"/>
                        </div>  
                      </div>                                              
                    </div>                    
                    <div className="row"><br/>
                      <div className="col-md-4">
                        <div className="input-group">
                          <span className="input-group-addon">Latitude</span>  
                          <input onChange={this.onChangeSample.bind(this)} value={this.state.sample.latitude || 0.0} name="latitude" type="number" className="form-control" placeholder=""/>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="input-group">
                          <span className="input-group-addon">Longitude</span>
                          <input onChange={this.onChangeSample.bind(this)} value={this.state.sample.longitude || 0.0} name="longitude" type="number" className="form-control" placeholder=""/>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="input-group">
                          <span className="input-group-addon">Date</span>
                          <Datetime timeFormat="HH:mm" dateFormat="DD/MM/YYYY" onChange={this.onChangeSample.bind(this)} value={this.state.sample.created_on} defaultValue={new Date()}/>
                        </div>
                      </div>                        
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
                                <Confirm onConfirm={this.editSampleMethod.bind(this,method)} confirmBSStyle='primary' body="To Enter Method Data you have to Save the Sample Methods?" confirmText="Confirm Save and Continue" title="Method Data">
                                  <button className="btn btn-primary" disabled={!method.exists}>Enter Data</button>
                                </Confirm>    
                                &nbsp;&nbsp;
                                <label style={{fontSize: '1.1em'}}><input disabled={this.state.sample.id ? false : true} type="checkbox" onChange={this.onChangeMethods.bind(this,index)} checked={method.exists} />&nbsp;{method.label}: {method.description} </label>                                
                                <label style={{fontSize: '1.1em'}} className="pull-right"><input disabled={true} type="checkbox" checked={method.completed} />Completed</label>
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
  fetchSampleSets: React.PropTypes.func.isRequired,
  updateCreateSample : React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
  deleteSample: React.PropTypes.func.isRequired,
  updateSampleMethods: React.PropTypes.func.isRequired,
}

function mapStateToProps(state){
  return {    
    samples: state.samples,          
    sampleMethods: state.sampleMethods,
    sampleSets: state.sampleSets,
  }
}

export default connect(mapStateToProps, { fetchSample, fetchSampleMethods, fetchSampleSets, updateCreateSample, addFlashMessage, deleteSample, updateSampleMethods })(SampleEditCreate);