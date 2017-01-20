import React, { Component } from 'react';
import { isNull } from 'lodash';
import moment from 'moment';

function CheckBox(props){  
  if(props.value){
    return <td>
      Yes
    </td>
  }else{
    return <td>    
      No
    </td>  
  }
}

export class DataTable extends Component {

  componentWillMount(){
		let index = -1;    		
    
    this.props.tablesData.tables.map( (table, index_) =>{			     
      if(table.tableName === this.props.tableName){
				index = index_;
			}
			return table;			
		});    
    if(index >=0){
      this.setState(this.props.tablesData.tables[index]);
    }		  
  }

  onClick(row,e){
    e.preventDefault();
    const newRoute = `${this.context.router.getCurrentLocation().pathname}/${row.id}`;    
    this.context.router.push(newRoute);    
  }

  render() {        
    

    return (
      !isNull(this.state) ? 
      <table className="table table-bordered">
        <tbody>
          <tr style={ {backgroundColor: '#333333', color : 'white'} }>
            {
              this.state.columns.map ( (column, index)=> <td key={index}>{column.name.replace('_',' ').capitalize() }</td>)
            }          
          </tr>
          {
            this.state.data.map( (row, index) => 
              <tr key={index} onClick={this.onClick.bind(this,row)}>
                {

                  Object.keys(row).map( (obj, index_) => {
                      if(typeof row[obj] === 'string'){
                        let date = Date.parse(row[obj]);
                        if(date){
                          return <td key={index_}>{moment(date).format('DD MMMM YYYY HH:mm:ss')}</td>
                        }else{
                          return <td key={index_}>{row[obj]}</td>
                        }
                      }else if(typeof row[obj] === 'boolean'){
                        return <CheckBox key={index_} value={row[obj]} />                                                                                                                
                      }else{
                        return <td key={index_}>{row[obj]}</td>
                      }                      
                    }                                            
                  )
                }
              </tr>
            )
          }
          
        </tbody>
      </table>
      : null
    );
  }
}

DataTable.propTypes = {
	tableName : React.PropTypes.string.isRequired,
  tablesData: React.PropTypes.object.isRequired,  
}

DataTable.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default DataTable;
