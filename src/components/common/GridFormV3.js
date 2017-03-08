import React from 'react';
import { methods } from './constants/gridFormConstants';
import math from 'mathjs';
import { sendRow } from '../../actions/tablesData';
import Confirm from 'react-confirm-bootstrap';
import Datetime from 'react-datetime';
import sortBy from 'lodash/sortBy';
import cloneDeep from 'lodash/cloneDeep';
import regression from 'regression';
import {Line} from 'react-chartjs-2';

function linearRegression(d,rType){
  let data = cloneDeep(d);
  let dataT = [];
  
  data.map( (point) =>{
    let set = [];
    set.push(point.x);
    set.push(point.y);
    dataT.push(set);
    return point;
  })
  
  var result = regression(rType,dataT);  
  return result;
}


class GridForm extends React.Component {
  
  constructor(props){
    super(props);
    this.dataAddCallBack = this.dataAddCallBack.bind(this);
  }

  componentWillMount(){
    let index=0;

    for(let i=0;i<methods.length;i++){
      if(methods[i].code === this.props.methodCode){
        index = i;
      }    
    }

    let method = cloneDeep(methods[index]);
    let oScopeData = cloneDeep(this.props.scopeData);
    let scopeData = cloneDeep(this.props.scopeData);
    let sampleMethod = cloneDeep(this.props.sampleMethod);

    this.setState({      
      dataAdded: true,
      oScopeData: oScopeData,
      scopeData: scopeData,
      method: method,
      sampleMethod: sampleMethod,            
      isEmpty: this.props.empty,          
      maxY: [],
      redraw: false,      
    })                
  }

  onChangeComplete(e){
    let sampleMethod = cloneDeep(this.state.sampleMethod);
    sampleMethod.completed = !sampleMethod.completed;
    this.setState({sampleMethod : sampleMethod});
  }
  

  drawTable(){  

    let method = cloneDeep(this.state.method);
    let scopeData = cloneDeep(this.state.scopeData);
    
    let tempMax = 0;
    let maxY = [];
    
    /*let i=0;
    let j=0;  
    let k=0;
    let l=0;
    let m=0;*/
    
    if(method.hasGraph && !this.props.empty){                  
      
      
      /*for(i=0;i<method.graph.length;i++){//Loop Graphs        
        tempMax=0;        
        for(j=0;j<method.graph[i].dataSets.length;j++){//Loop Datasets                  
          for(k=0;k<method.graph[i].dataSets[j].data.length;k++){//Loop Data                                                                
            if(method.graph[i].dataSets[j].data[k].isFormula){            
              var scope={};
              for(l=0;l<scopeData.length;l++){//Loop Scope Data                              
                for(m=0;m<method.graph[i].dataSets[j].data[k].scopeVariables.length;m++){//Loop Graph Scope Variables
                  if(method.graph[i].dataSets[j].data[k].scopeVariables[m] === scopeData[l].symbol ){
                    scope[scopeData[l].symbol] = scopeData[l].value;
                  }                                    
                }//Loop Graph Scope Variables                                          
              }//Loop Scope Data                
              method.graph[i].dataSets[j].data[k].x = math.eval(method.graph[i].dataSets[j].data[k].sx,scope);
              method.graph[i].dataSets[j].data[k].y = math.eval(method.graph[i].dataSets[j].data[k].sy,scope);                        
            }else{
              for(l=0;l<scopeData.length;l++){
                if(scopeData[l].symbol === method.graph[i].dataSets[j].data[k].sx){
                  if(scopeData[l].symbol === method.graph[i].dataSets[j].data[k].toggeLine) method.graph[i].dataSets[j].showLine=true; 
                  if(method.graph[i].dataSets[j].data[k].x !== scopeData[l].value) method.graph[i].dataSets[j].data[k].x = scopeData[l].value; else  method.graph[i].dataSets[j].data[k].x = undefined;
                }
                else if(scopeData[l].symbol === method.graph[i].dataSets[j].data[k].sy){
                  if(method.graph[i].dataSets[j].data[k].y !== scopeData[l].value) method.graph[i].dataSets[j].data[k].y = scopeData[l].value; else  method.graph[i].dataSets[j].data[k].y = undefined; 
                }
              }           
            }
            if(method.graph[i].dataSets[j].data[k].y > tempMax) tempMax = method.graph[i].dataSets[j].data[k].y;
          }//Loop Data        
        }//Loop Datasets
        tempMax += method.graph[i].addMaxY;
        tempMax = Math.round(tempMax/method.graph[i].roundOff)*method.graph[i].roundOff;          
        maxY.push(tempMax);         
      }//Loop Graphs*/

      method.graph.map((g) => {
        tempMax=0;        
        g.dataSets.map((ds) => {                
          ds.data.map((dt) => {                           
            if(dt.isFormula){
              
              var scope={};
              
              scopeData.map((sd)=>{
                dt.scopeVariables.map( (sv) =>{
                  if(sv === sd.symbol){                    
                    scope[sd.symbol] = sd.value;                                      
                  }
                  return sv;
                })
                return sd;
              })
              dt.x = math.eval(dt.sx,scope);
              dt.y = math.eval(dt.sy,scope);

              
            }else{
              scopeData.map((sd) =>{                                                  
                if(sd.symbol === dt.sx ){
                  if(sd.value){
                    
                    if(dt.toggleLine){
                      ds.showLine = true;
                    }
                    if(dt.x !== sd.value){
                      dt.x = sd.value;
                    }
                  }                                     
                }
                if(sd.symbol === dt.sy){
                  if(sd.value){
                     if(dt.y !== sd.value){
                        dt.y = sd.value;                      
                     }
                    
                    if(sd.value > tempMax)
                    {
                      tempMax=sd.value;
                    }
                  }            
                }                            
                return sd;          
              })
            }
                          
            if(dt.y > tempMax){
              tempMax= dt.y;
            }

          return dt;                    
          });        
          return ds;      
        });
        tempMax += g.addMaxY
        tempMax = Math.round(tempMax/g.roundOff)*g.roundOff;          
        maxY.push(tempMax);
        return g;      
      })              
      method.graph[0].options.dataAddCallBack = this.dataAddCallBack;    
    }
          
    if(method.hasGraph)
    {
      method.graph.map( (g,gi) =>{
        g.options.scales.yAxes[0].ticks.max = maxY[gi];
        return g;
      });      
    }
      
    if(method.hasGraph){
      method.graph.map( (g) =>{      
        g.dataSets.map( (ds, dsi)=>{        
          if(ds.isFormula){          
            var eq = linearRegression(ds.data,ds.regression);                    
            eq.equation.reverse();          
            ds.xInputs.map( (xi) =>{                                  
              var y=0;            
              eq.equation.map( (coff,ci)=>{                            
                if(ci) y+= Math.pow(xi.x,ci)*coff;
                else y+=coff;                                          
                return coff;
              })            
              xi.y = y;            
              ds.data.push({x: xi.x, y: xi.y });            
              return xi;
            })          
          }
          return ds;
        })
        return g;
      }) 
    }
    
    if(method.hasGraph){
      scopeData.map( (sd) => {
        method.graph.map( (g) =>{      
          g.dataSets.map( (ds, dsi)=>{        
            if(ds.isFormula){                                              
              ds.xInputs.map( (xi) =>{
                if(xi.scopeVal === sd.symbol){
                  sd.value = Math.round(xi.y);                  
                }
                return xi;
              })                    
            }
            return ds;
          })
          return g;
        })
        return sd;
      });    
    }

    if(method.hasGraph){      
      method.graph.map( (g, gi) =>{
        g.dataSets.map( (ds, dsi) =>{        
          ds.data = sortBy(ds.data,'x');                                  
          return ds;    
        })
        return g;
    });    
      
      /*var eq = linearRegression(method.graph[0].dataSets[0].data);                  
      console.log(eq);
      var data = [];      
      method.graph[0].dataSets[0].data.map( (d) =>{
        let y = eq.equation[0]*d.x+eq.equation[1];
        data.push({x: d.x, y: y } );
        return d;
      });      
      method.graph[0].dataSets.push({fill:false,borderColor:'rgba(0,0,255,0.2)',data: data});*/
    }


      
    var arrayIndex = 0;

    method.grid.map( (row,rI)=>{
      if(row.isArray) arrayIndex = rI;
      return row;        
    })
    
    var valArray =  [];
    var rowObj = {};
    var tdArray = [];
    var newRows = [];
    var sum = 0;    

    if(arrayIndex){
      
      rowObj = cloneDeep(method.grid[arrayIndex]);
      tdArray = cloneDeep(method.grid[arrayIndex].td);

      scopeData.map( (d) =>{
        if(d.symbol === rowObj.scopeVariable){
          if(d.value_string){
            valArray = d.value_string.split(',');            
            valArray = valArray.map( (val) =>{
              return parseFloat(val);
            })
          }else{
            valArray = [0];
          } 
                                                    
        }
        return d;
      })                      
    
      valArray.map( (val,vI)=>{
        sum += val;
        
        var temp = cloneDeep(tdArray);
        var temptd = [];

        temp.map( (c,cI)=>{        
          c.isArrayVal = true;
          c.arrayIndex = vI;                     
          if(c.arrayVal === 'index') c.value = vI+1;
          if(c.arrayVal === 'value') c.value = val;
          if(c.arrayVal === 'average') c.value = +(sum/(vI+1)).toFixed(1);
          return c;
        })
        temptd.push(temp);
        newRows.push({td: temp, scopeVar: rowObj.scopeVariable, index: vI});
        return val;        
      });          
      method.grid.splice(arrayIndex,1);      
      newRows.map((row,rI)=>{
        method.grid.splice(arrayIndex+rI,0,row);
        return row;
      })
    }
                      
    method.grid.map( (row, rI) => {      
      row.td.map( (col, cI) => {        
        scopeData.map( (d, dI) =>{          
          if(d.symbol === col.scopeVariable){              
              if(d.unit === 'string'){
                col.value_string = d.value_string ? d.value_string : ( d.default_value ? d.default_value : '');                  
              }else{
                col.value = d.value ? d.value : ( d.default_value ? d.default_value : undefined);  
              }
              col.unit = d.unit ? d.unit : undefined;
              col.min = d.minimum ? d.minimum : undefined;
              col.max = d.maximum ? d.maximum : undefined;     
              col.step = d.step ? d.step : 0.01;
              col.type = d.input_type ? d.input_type : undefined;
          }        
          return d;
        })
        return col;
      })
                  
      return row;
    })

    return <div>
      {
        this.props.empty ? null :
        <div className="input-group checkbox">     
          <label style={{fontSize: '1.3em', fontWeight:'normal'}}><input name="completed" type="checkbox" onChange={this.onChangeComplete.bind(this)} checked={this.state.sampleMethod.completed} />&nbsp;Completed</label>                                
          
        </div>    
      }
            <Confirm  onConfirm={this.clearValues.bind(this)} body="Are you sure you want to Clear Data?" confirmBSStyle='danger' confirmText="Confirm Clear" title="Clear Data">  
              <button className="btn btn-default hidden-print">Clear Values</button>
            </Confirm>&nbsp;
            <Confirm  onConfirm={this.resetValues.bind(this)} body="Are you sure you want to Reset Data?" confirmBSStyle='warning' confirmText="Confirm Reset" title="Reset Data">  
              <button className="btn btn-warning hidden-print">Reset Values</button>
            </Confirm>
            <br className="hidden-print"/><br className="hidden-print"/>
            <table className="table-bordered fixed" width="100%" >              
              <colgroup>
                {
                  method.colLayout.map( (c,i) => { return <col key={i} span={c.span} style={{width: c.width}}></col>} )                
                }               
              </colgroup>
              <tbody>
              {                                  
                           
                  method.grid.map( (tr, trIndex) =>                                                          
                      <tr key={trIndex} style={tr.style}>
                      
                      {
                        tr.td.map( (td, tdIndex) =>
                          {                                                      
                            return !td.isVal ? <td key={tdIndex}  colSpan={td.colSpan} height={td.height} rowSpan={td.rowSpan} width={td.width} style={td.style}>{td.label}</td> 
                            : 
                              td.isIcon ? 
                                  
                                  td.icon === 'minus' ?
                                                                        
                                      <td key={tdIndex} style={{padding:'4px'}}>
                                        <input type="button" value="Delete" onClick={ this.onDeleteFromArray.bind(this,{scopeVariable: tr.scopeVar,index: tr.index}) } className='btn btn-danger btn-block hidden-print'/>
                                      </td>
                                    
                                  :
                                    <td key={tdIndex} style={{padding:'4px'}}>
                                      <input type="button" value="Add" onClick={this.onAddToArray.bind(this,{scopeVariable: tr.scopeVar,index: tr.index})} className='btn btn-info btn-block hidden-print'/>
                                    </td>

                              :                                
                                <td key={tdIndex} colSpan={td.colSpan} height={td.height} rowSpan={td.rowSpan} width={td.width} style={td.style}>
                                <div className="avoid">
                                {                              
                                                                    
                                    td.type === 'calc' || td.type === 'calc_avg_array' || td.type === 'graph' || td.arrayVal === 'index' || td.arrayVal === 'average' ?//IS CALC                                                                                                                                                      
                                               
                                        (td.unit === 'datetime' ? 
                                          <Datetime ref={td.scopeVariable} utc={true} id={td.scopeVariable} inputProps={{disabled: true}}  timeFormat="HH:mm:ss" dateFormat={false} value={this.props.empty ? '' : Math.floor(td.value)} />                                                                                                
                                        
                                        : 
                                          <div className="input-group">
                                          <input ref={td.scopeVariable} id={td.scopeVariable} onChange={this.onChange.bind(this)}  step={td.step} type='number' value={this.props.empty ? '' : td.value} readOnly className='form-control' style={td.style}/>                                                              
                                          <span className="input-group-addon">                                                                    
                                            {
                                              td.isArrayVal ? <div style={{fontSize: '12px'}} dangerouslySetInnerHTML={{__html: td.arrUnit}} />:<div style={{fontSize: '12px'}} dangerouslySetInnerHTML={{__html: td.unit}} />
                                            }
                                          </span>
                                          </div>)                              
                                                                                                                                    
                                    ://IS NOT CALC                  
                                       
                                        td.unit === 'string' ? //IS STRING                              
                                         <input ref={td.scopeVariable} id={td.scopeVariable} onChange={this.onChangeString.bind(this)} value={this.props.empty ? '' : td.value_string} type='text' className='form-control' style={td.style}/>
                                        : //IS NOT STRING                                      
                                          td.unit === 'datetime' ?
                                            <Datetime ref={td.scopeVariable} utc={true} id={td.scopeVariable} timeFormat="HH:mm:ss" dateFormat="DD/MM/YYYY" onChange={this.onChangeTime.bind(this,td.scopeVariable)} value={this.props.empty ? '' : Math.floor(td.value)} />
                                          : 
                                            td.type === 'in_array' ? 
                                            <div className="input-group"><input ref={td.scopeVariable} id={td.scopeVariable} onChange={this.onChangeArray.bind(this,{scopeVariable: tr.scopeVar, index: tr.index} )} min={td.min} max={td.max} step={td.step} value={this.props.empty ? '' : td.value} type='number' className='form-control' style={td.style}/><span className="input-group-addon"><div style={{fontSize: '12px'}} dangerouslySetInnerHTML={{__html: td.arrUnit}} /></span></div>
                                             :
                                            <div className="input-group"><input ref={td.scopeVariable} id={td.scopeVariable} onChange={this.onChange.bind(this)} min={td.min} max={td.max} step={td.step} value={this.props.empty ? '' : td.value} type='number' className='form-control' style={td.style}/><span className="input-group-addon"><div style={{fontSize: '12px'}} dangerouslySetInnerHTML={{__html: td.unit}} /></span></div>
                                   
                                }                        
                                </div>                           
                                </td>
                          } 
                        )
                      }
                      
                      </tr>             
                  )              
              }
              </tbody>
           </table>  
           <br/>        
            {
              this.props.empty ? null :
              <Confirm  onConfirm={this.CalculateAndSave.bind(this)} body="Are you sure you want to Save Data?" confirmBSStyle='primary' confirmText="Confirm Save" title="Save Method Data">  
                <button className="hidden-print btn-block btn btn-lg btn-success">Calculate and Save</button>            
              </Confirm>
            }         
            
            {
              method.hasGraph && !this.props.empty ? method.graph.map( (g,i) => {                                                                                
                    return <Line key={i} height={200} ref={`chart_${i}`} data={{ datasets: g.dataSets }} options={g.options} />                    
                  })
               : null               
            }                               
           </div>   
  }
  
  onDeleteFromArray(data,e){          
    let scopeData = cloneDeep(this.state.scopeData);
    let index = data.index;
    var valArray = [];    
         
    scopeData.map( (d) =>{
      if(d.symbol === data.scopeVariable){
        if(d.value_string){
          valArray = d.value_string.split(',');            
          valArray = valArray.map( (val) =>{
            return parseFloat(val);
          })
        }else{
          valArray = [];
        }                                                   
      }
      return d;
    })

    valArray.splice(index,1);
    
    scopeData.map( (d) =>{
      if(d.symbol === data.scopeVariable){
        d.value_string = valArray.toString();
      }
      return d;
    })
    this.setState({scopeData: scopeData});
  }

  onAddToArray(data,e){
    let scopeData = cloneDeep(this.state.scopeData);
    let index = data.index;
    var valArray = [];    
         
    scopeData.map( (d) =>{
      if(d.symbol === data.scopeVariable){
        if(d.value_string){
          valArray = d.value_string.split(',');            
          valArray = valArray.map( (val) =>{
            return parseFloat(val);
          })
        }else{
          valArray = [];
        }                                                   
      }
      return d;
    })

    valArray.splice(index+1,0,0);
    
    scopeData.map( (d) =>{
      if(d.symbol === data.scopeVariable){
        d.value_string = valArray.toString();
      }
      return d;
    })
    this.setState({scopeData: scopeData});
  }

  onChangeArray(data,e){
    let scopeData = cloneDeep(this.state.scopeData);
    let index = data.index;
    var valArray = [];    
         
    scopeData.map( (d) =>{
      if(d.symbol === data.scopeVariable){
        if(d.value_string){
          valArray = d.value_string.split(',');            
          valArray = valArray.map( (val) =>{
            return parseFloat(val);
          })
        }else{
          valArray = [];
        }                                                   
      }
      return d;
    })
    valArray.splice(index,1,parseFloat(e.target.value));
    
    scopeData.map( (d) =>{
      if(d.symbol === data.scopeVariable){
        d.value_string = valArray.toString();
      }
      return d;
    })

    this.setState({scopeData: scopeData});
  }

  resetValues(){
    this.setState({scopeData: this.state.oScopeData});
  }
  
  clearValues(){
    let method = cloneDeep(this.state.method.grid);      
    let scopeData = cloneDeep(this.state.scopeData);
        
    method.map( (row, rI) => {
      row.td.map( (col, cI) => {        
        scopeData.map( (d, dI) =>{
          
          if(d.input_type === 'in_array'){
            d.value_string = '';
          }

          if(d.symbol === col.scopeVariable){
            this.refs[d.symbol].value= null;
            col.value = 0.0;
            col.value_string = '';
            d.value = 0.0;
            d.value_string = '';
          }
          return d;
        })
        return col;
      })
      return row;
    })

    
    this.parseInput(scopeData);        
  }

  onChangeTime(symbol,e){
    let scopeData = cloneDeep(this.state.scopeData);

    scopeData.map( (d, index_) =>{
      if(symbol === d.symbol ){
        d.value = e.valueOf();                
      }
      return d;
    });    
    this.setState({scopeData: scopeData});
  }

  goBack(){
    this.context.router.goBack();
  }

  dataAddCallBack(data){

    let method = cloneDeep(this.state.method);
        
    if(this.state.dataAdded){        
      method.graph[0].dataSets[0].data = method.graph[0].dataSets[0].data.filter( (d) => { 
        if(!d.pop){
          return d
        }else{
         return null;
        }
      })
      method.graph[0].dataSets[0].data.push({x: data.x, y: data.y, pop: data.pop});
      method.graph[0].dataSets[0].showLine  = true;      
    }     
    this.setState( {method: method} );
  }

  saveData(scopeData){                
    let oScopeData = cloneDeep(this.state.oScopeData);    
    let index=0;

    for(let i=0;i<methods.length;i++){
      if(methods[i].code === this.props.methodCode){
        index = i;
      }    
    }

    let method = cloneDeep(methods[index]);

    scopeData.map( (row, rI) => {          
      //if(row.id === 4841) console.log(row);

      if(row.id && row.input_type !== 'constant'){        
        
        if(row.unit === 'string' || row.input_type === 'in_array' ){          
          if(row.value_string !== oScopeData[rI].value_string){            
            sendRow(`sample_has_variables?id=eq.${row.id}`,{value_string: row.value_string},'patch');
          }          
        
        }else{
          if(row.value !== oScopeData[rI].value){
            
            sendRow(`sample_has_variables?id=eq.${row.id}`,{value: row.value},'patch');
          }
        }                      
      }else if(row.type !== 'constant'){

        if(row.unit === 'string' || row.input_type === 'in_array'){          
          sendRow('sample_has_variables',{sample: this.props.sampleId,variable: row.variable_id,value_string: row.value_string},'post').then( (res) =>{row.id = res.data.id;});        
        }else{          
          
          sendRow('sample_has_variables',{sample: this.props.sampleId,variable: row.variable_id,value: row.value},'post').then( (res) =>{row.id = res.data.id;} );
        }

      }      
      return row;    
    })     
    sendRow(`sample_has_methods?id=eq.${this.state.sampleMethod.id}`,{completed: this.state.sampleMethod.completed},'patch')                  
    this.setState({scopeData: scopeData,oScopeData: scopeData, method: method});
  }

  parseInput(scopeData){    
    let scope = {};        
    
    scopeData.map( (d) => {        
        
        scope[d.symbol] = 0;

        if(d.unit !== 'string' && d.unit !== 'in_array'){
          let round = d.step*10000;
          if(round){}else{ round = 100; }
          
          if(d.input_type === 'in'){
            try{        
              scope[d.symbol] = Math.round(parseFloat(d.value,10)*round)/round;
              if(isNaN(scope[d.symbol])){                
                scope[d.symbol] = ( d.default_value ? d.default_value : 0);
              }
            }catch(err){
                scope[d.symbol] = ( d.default_value ? d.default_value : 0);
            }            
          }        
        }
        else{          
          scope[d.symbol] = d.value;
        }
    
      return d;    
    
    });    
    

    scopeData.map ( (d) =>{      
      let round = d.step*10000;
      if(d.unit !== 'string' && d.unit !== 'in_array' ){      
       
        if(round){}else{ round = 100; }
        
        if(d.input_type === 'calc' && d.input_type !== 'graph'){                
          try{        
            scope[d.symbol]=Math.round(math.eval(d.formula,scope)*round)/round;               
          }catch(err){                     
           console.log(err);
           scope[d.symbol] = ( d.default_value ? d.default_value : 0);
          }        
        }

        if(d.input_type === 'calc_avg_array'){                
          var scope2 = cloneDeep(this.state.scopeData);
          var sum = 0;
          var valArray = [];    
         
          scope2.map( (d2) =>{
            if(d.formula === d2.symbol){
              if(d2.value_string){
                valArray = d2.value_string.split(',');            
                valArray = valArray.map( (val) =>{
                  return parseFloat(val);
                })
              }else{
                valArray = [];
              }                                                   
            }
            return d;
          })
          
          valArray.map( (val) =>{
            sum+=val;
            return val;
          })

          scope[d.symbol]=Math.round((sum/(valArray.length))*10)/10;
            
        }      
        
        if(isFinite(scope[d.symbol])){
        }else{        
          scope[d.symbol] = ( d.default_value ? d.default_value : 0);
        }

        if(isNaN(scope[d.symbol])){        
          scope[d.symbol] = ( d.default_value ? d.default_value : 0);
        }
      }

      return d;
    });    

    scopeData.map( (d,index)=>{      
      scopeData[index].value = scope[d.symbol];
      return d;
    });
    
    this.saveData(scopeData);
  }
  
  CalculateAndSave(){            
    var scopeData = cloneDeep(this.state.scopeData);
    this.parseInput(scopeData);        
  }
  
  onChangeString(e){    
    e.preventDefault();
    let scopeData = cloneDeep(this.state.scopeData);
    

    scopeData.map( (d) =>{      
      if(e.target.id === d.symbol ){
        d.value_string = e.target.value;                                   
      }
      return d;
    });     
    this.setState({scopeData: scopeData}); 
  }

  onChange(e){
    e.preventDefault();    
    let scopeData = cloneDeep(this.state.scopeData);      
    scopeData.map( (d) =>{
      if(e.target.id === d.symbol ){
        let round = d.step*10000;
        if(!round) round=100;
        d.value = Math.round(e.target.value*100)/100;        
      }
      return d;
    });
    this.setState({scopeData: scopeData});    
  }
 

  render() {                          
      return <div> 
      {this.state.scopeData ? this.drawTable() : null} 
    </div>                    
  }
}

GridForm.propTypes = {
  scopeData: React.PropTypes.array.isRequired,
  methodCode: React.PropTypes.string.isRequired,
  sampleId: React.PropTypes.number.isRequired,
  sampleMethod: React.PropTypes.object.isRequired,  
  empty: React.PropTypes.bool.isRequired,  
  methods: React.PropTypes.array.isRequired,
}

GridForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default GridForm;
