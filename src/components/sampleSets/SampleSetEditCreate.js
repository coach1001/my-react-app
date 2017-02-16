import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSampleSet, updateCreateSampleSet, deleteSampleSet } from '../../actions/sampleSets';
import { FaArrowCircleLeft } from 'react-icons/lib/fa/';
import Confirm from 'react-confirm-bootstrap';
import moment from 'moment';
import Datetime from 'react-datetime';
import {notify} from 'react-notify-toast';

class SampleSetEditCreate extends Component {

  componentWillMount(){        
    this.setState( {sampleSet: {} });
    if(this.props.params.sampleSetId){
      this.props.fetchSampleSet(this.props.params.sampleSetId);
    }else{      
      let sampleSet = {
        created_on : moment()        
      }
      this.setState({sampleSet: sampleSet});
    }
  }

  componentWillUpdate(nextProps){    
    const cP = this.props;
    const nP = nextProps;    
    
    if(!nP.sampleSets.isFetching && cP.sampleSets.isFetching !== nP.sampleSets.isFetching){            
     if(nP.sampleSets.sampleSet.created_on){
        nP.sampleSets.sampleSet.created_on = moment(nP.sampleSets.sampleSet.created_on);  
      }else{
        
        nP.sampleSets.sampleSet.created_on = moment();  
      }      

      this.setState({ sampleSet: nP.sampleSets.sampleSet});

    }
  }

  goBack(){
    this.context.router.goBack();
  }

  deleteSampleSet(){
    this.props.deleteSampleSet(this.state.sampleSet.id).then( (res) => {        
        notify.show(`Sample Number ${this.state.sampleSet.sample_set} successfully deleted`,'warning',2000);
        this.context.router.goBack();

    }, (res) => {
      notify.show('Server Error, Contact Administrator','error',2000);
    })
  }

  saveSampleSet(){
     let oState = this.state;      
        
    if(oState.sampleSet.sample_set){
      
      try{
        oState.sampleSet.created_on = oState.sampleSet.created_on.add(2,'h');
      }catch(ex){}  
        
      

      this.props.updateCreateSampleSet(oState.sampleSet).then( (res)=>{        
        notify.show('Sample Set Saved Successfully','success',2000);                
        if(res.data.id){          
         oState.sampleSet.id = res.data.id;        
        }        
        this.setState(oState);
      }, (res)=>{
        notify.show('Server Error, Contact Administrator','error',2000);            
      })   
    }else{
        notify.show('Cannot Save, Sample Number Required','error',2000);
    }
  }

  onChangeSampleSet(e){
    if(e._isAMomentObject){
      const oState = this.state;
      oState.sampleSet.created_on = e;      
      this.setState(oState);
    }else{
      const oState = this.state;
      oState.sampleSet[e.target.name] = e.target.value;
      this.setState(oState);
    }
  }
  render() {    
    return (
    	<div className="container">

        <span style={{fontSize: '2em', cursor: 'pointer'}}>
          <FaArrowCircleLeft  onClick={this.goBack.bind(this)}  className="text-info" size="2em"/>
          <Confirm onConfirm={this.deleteSampleSet.bind(this)} body="Are you sure you want to Delete this Sample?" confirmText="Confirm Delete" title="Delete Sample">
            <button disabled={this.state.sampleSet.id ? false : true} className="btn btn-lg btn-danger pull-right">Delete</button>
          </Confirm>  
          <span className="pull-right">&nbsp;</span>
          <Confirm onConfirm={this.saveSampleSet.bind(this)} confirmBSStyle='primary' body="Are you sure you want to Save this Sample?" confirmText="Confirm Save" title="Save Sample">
            <button  className="btn btn-lg btn-primary pull-right">Save</button>
          </Confirm>
        </span> 


        {
          Object.keys(this.state.sampleSet).length > 0 || Object.keys(this.props.params).length === 0 ?
          <div className="panel panel-default">
            <div className="panel-heading">
              <div style={{fontWeight: 'bold'}} className="panel-title">Sample Set</div>
            </div>
            <div className="panel-body">                                             
              
              <form>
                <div className="row">
                  
                  <div className="col-md-6">
                    <div className="input-group">
                      <span className="input-group-addon">Set Number</span>
                      <input onChange={this.onChangeSampleSet.bind(this)} value={this.state.sampleSet.sample_set || ''} name="sample" type="text" className="form-control" placeholder="Sample Number"/>                      
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-group">
                      <span className="input-group-addon">Date</span>
                      <Datetime timeFormat="HH:mm" dateFormat="DD/MM/YYYY" onChange={this.onChangeSampleSet.bind(this)} value={this.state.sampleSet.created_on} defaultValue={new Date()}/>
                    </div>
                  </div>                      


                </div>                                                                                                               
              </form>
            </div>
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
  fetchSampleSet : React.PropTypes.func.isRequired,  
  updateCreateSampleSet : React.PropTypes.func.isRequired,  
  deleteSampleSet: React.PropTypes.func.isRequired    
}

function mapStateToProps(state){
  return {    
    sampleSets: state.sampleSets          
  }
}

export default connect(mapStateToProps, { fetchSampleSet, updateCreateSampleSet, deleteSampleSet })(SampleSetEditCreate);