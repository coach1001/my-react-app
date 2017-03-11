import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSample, updateCreateSample, deleteSample } from '../../actions/samples';
import { fetchSampleMethods, updateSampleMethods } from '../../actions/sampleMethods';
import { fetchSampleSets } from '../../actions/sampleSets';
import { setLoader } from '../../actions/loader';
import { FaArrowCircleLeft } from 'react-icons/lib/fa/';
import Confirm from 'react-confirm-bootstrap';
import {notify} from 'react-notify-toast';
import cloneDeep from 'lodash/cloneDeep';

class SampleEditCreate extends Component {

  componentWillMount(){    
    this.props.setLoader(true);
    this.setState( {sample: {}, sampleMethods: [], sampleSets: []});
    
    if(this.props.params.sampleId){
      this.props.fetchSample(this.props.params.sampleId);
      this.props.fetchSampleMethods(this.props.params.sampleId);      
    }else{      
      this.props.fetchSampleMethods(0);      
      let sample = {

      }
      this.setState({sample: sample});
    }      
  }

  componentWillUpdate(nextProps){    
    const cP = this.props;
    const nP = nextProps;        
    
    if(!nP.samples.isFetching && cP.samples.isFetching !== nP.samples.isFetching){      
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

    if(!nP.samples.isFetching && !nP.sampleMethods.isFetching){      
      this.props.setLoader(false);      
    }        
  }

  goBack(e){
    //e.preventDefault();    
    this.context.router.push('/samples');
  }

  onChangeMethods(index,e){        
    let sampleMethods = cloneDeep(this.state.sampleMethods);
    sampleMethods[index].exists = !sampleMethods[index].exists;     
    this.setState({sampleMethods: sampleMethods});                          
  }
    
  onChangeSample(e){        
    let sample = cloneDeep(this.state.sample);

    if(e._isAMomentObject){
      
      sample.created_on = e;      
      this.setState({sample:sample});
    }else{      
      sample[e.target.name] = e.target.value;
      this.setState({sample:sample});
    }
  }

  saveSample(e){        
    let sample = cloneDeep(this.state.sample);
    let sampleMethods = cloneDeep(this.state.sampleMethods);

    if(sample.sample){
      
      this.props.updateCreateSample(sample).then( (res)=>{        
        notify.show('Sample Saved Successfully','success',2000);                
        console.log(res);
        if(res.data.id){ 
          
          sample.id = res.data.id;
          this.context.router.push(`${this.context.router.location.pathname.replace('/new','')}/${res.data.id}`);        
        }
        
        this.props.updateSampleMethods(sampleMethods, sample.id).then( (res)=>{
          this.props.fetchSampleMethods(sample.id);
        });

        this.setState({sample:sample,sampleMethods:sampleMethods});

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
        this.goBack();

    }, (res) => {
      notify.show('Server Error, Contact Administrator','error',2000);
    })
  }

  editSampleMethod(method){                   
   const oState = this.state;
   this.props.setLoader(true);
   this.props.updateSampleMethods(oState.sampleMethods, oState.sample.id).then( (res)=>{                
      this.props.fetchSampleMethods(oState.sample.id).then((res_)=>{
        notify.show('Sample Methods Saved Successfully','success',500);        
         let sample_method_id=null;                  

         res_.data.map((element)=>{
            if( element.method === method.method_id && element.sample === oState.sample.id){
              sample_method_id = element.id
            }
            return element;
         });

        this.context.router.push(`/sampleMethod/${oState.sample.id}/${method.method_code}/${method.method_id}/${sample_method_id}`);        
      })            
    });
  }

  editSampleMethodEmpty(method){                   
   const oState = this.state;

   this.props.updateSampleMethods(oState.sampleMethods, oState.sample.id).then( (res)=>{            
      
      this.props.fetchSampleMethods(oState.sample.id).then((res_)=>{
        notify.show('Sample Methods Saved Successfully','success',500);
        
         let sample_method_id=null;
         res_.data.map((element)=>{
            if( element.method === method.method_id && element.sample === oState.sample.id){
              sample_method_id = parseInt(element.id,10);
            }
            return element;
         });
        this.context.router.push(`/sampleMethod/${oState.sample.id}/${method.method_code}/${method.method_id}/${sample_method_id}/empty`);        
      })            
    });
  }


  onChangeFilter(e){
    //let sampleSets = cloneDeep(this.state.sampleSets);
    let filteredSets = [];
    const filter = e.target.value;    
    const _sampleSets = this.props.sampleSets.sampleSets;

    if(filter === ''){      
      this.setState({sampleSets: _sampleSets});
    }else{
      filteredSets = _sampleSets.filter( (item) => {
       if(item.sample_set.indexOf(filter) > -1 ){
          return item;   
        }
        return null;
      })      
      this.setState({sampleSets: filteredSets});
    }
  }

  ellipsify (str) {
      if (str.length > 90) {
          return (str.substring(0, 90) + "...");
      }
      else {
          return str;
      }
  }
  render() {  
                       
    return (    
      <div>           
            <div className="container">                  
              <span style={{fontSize: '2em', cursor: 'pointer'}} className="hidden-print">
                <FaArrowCircleLeft  onClick={this.goBack.bind(this)}  className="text-info" size="2em"/>
                <Confirm onConfirm={this.deleteSample.bind(this)} body="Are you sure you want to Delete this Sample?" confirmText="Confirm Delete" title="Delete Sample">
                  <button disabled={this.state.sample.id ? false : true} className="btn btn-lg btn-danger pull-right">Delete</button>
                </Confirm>  
                <span className="pull-right">&nbsp;</span>
                <Confirm onConfirm={this.saveSample.bind(this)} confirmBSStyle='primary' body="Are you sure you want to Save this Sample?" confirmText="Confirm Save" title="Save Sample">
                  <button  className="btn btn-lg btn-primary pull-right">{this.state.sample.id ? 'Update' : 'Create'}</button>
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
                      {/*<div className="col-md-6">
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
                      </div>*/}
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
                      {/*<div className="col-md-4">
                        <div className="input-group">
                          <span className="input-group-addon">Date</span>
                          <Datetime utc={true} timeFormat="HH:mm" dateFormat="DD/MM/YYYY" onChange={this.onChangeSample.bind(this)} value={this.state.sample.created_on} defaultValue={new Date()}/>
                        </div>
                      </div>*/}                        
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
                  <h4 style={{margin: '0px', fontWeight: 'bold' }}>TMH1</h4>
                  {                    
                    this.state.sampleMethods.map( (method,index) => {                    
                    if(method.type === 'TMH1')  
                    {return  <div key={index}>                                                    
                              <div className="checkbox">                                
                                {/*<Confirm onConfirm={this.editSampleMethod.bind(this,method)} confirmBSStyle='primary' body="To Enter Method Data you have to Save the Sample Methods?" confirmText="Confirm Save and Continue" title="Method Data">*/}
                                  <button onClick={this.editSampleMethod.bind(this,method)} className="hidden-print btn btn-primary" disabled={!method.exists}>Enter Data</button>
                                {/*</Confirm>    */}
                                &nbsp;&nbsp;
                                <button onClick={this.editSampleMethodEmpty.bind(this,method)} className="hidden-print btn btn-default pull-right" disabled={!method.exists}>Print</button>
                                <label style={{fontSize: '1.1em'}}><input disabled={this.state.sample.id ? false : true} type="checkbox" onChange={this.onChangeMethods.bind(this,index)} checked={method.exists} />&nbsp;{method.label}: {this.ellipsify(method.description)} </label>                                                                
                                <label style={{fontSize: '1.1em'}} className="pull-right"><input disabled={true} type="checkbox" checked={method.completed} />Completed &nbsp;</label>

                              </div>
                            </div>}else{return null;}
                    })                  
                  }   
                  <h4 style={{margin: '0px', fontWeight: 'bold'  }}>SANS</h4>
                  {                    
                    this.state.sampleMethods.map( (method,index) => {                    
                    if(method.type === 'SANS')  
                    {return  <div key={index}>                                                    
                              <div className="checkbox">                                
                                {/*<Confirm onConfirm={this.editSampleMethod.bind(this,method)} confirmBSStyle='primary' body="To Enter Method Data you have to Save the Sample Methods?" confirmText="Confirm Save and Continue" title="Method Data">*/}
                                  <button onClick={this.editSampleMethod.bind(this,method)} className="hidden-print btn btn-primary" disabled={!method.exists}>Enter Data</button>
                                {/*</Confirm>    */}
                                &nbsp;&nbsp;
                                <button onClick={this.editSampleMethodEmpty.bind(this,method)} className="hidden-print btn btn-default pull-right" disabled={!method.exists}>Print</button>
                                <label style={{fontSize: '1.1em'}}><input disabled={this.state.sample.id ? false : true} type="checkbox" onChange={this.onChangeMethods.bind(this,index)} checked={method.exists} />&nbsp;{method.label}: {this.ellipsify(method.description)} </label>                                                                
                                <label style={{fontSize: '1.1em'}} className="pull-right"><input disabled={true} type="checkbox" checked={method.completed} />Completed &nbsp;</label>

                              </div>
                            </div>}else{return null;}
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
  deleteSample: React.PropTypes.func.isRequired,
  updateSampleMethods: React.PropTypes.func.isRequired,
  setLoader: React.PropTypes.func.isRequired,
}

function mapStateToProps(state){
  return {    
    samples: state.samples,          
    sampleMethods: state.sampleMethods,
    sampleSets: state.sampleSets,
  }
}

export default connect(mapStateToProps, { setLoader, fetchSample, fetchSampleMethods, fetchSampleSets, updateCreateSample, deleteSample, updateSampleMethods })(SampleEditCreate);