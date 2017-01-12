import React from 'react';


class GridForm extends React.Component {
  
  componentWillMount(){
    this.setState(Object.assign({},this.state,{      
      cols: 2,
      rows: 5,
      spans: [
        { colSpan: 1, rowSpan:2, posCol: 0, posRow: 4, elementIndex: 0},
        { colSpan: 2, rowSpan:1, posCol: 0, posRow: 0, elementIndex: 6}        
      ]      
    }));
  }

  drawTable(){
    const table = this.state;
    let tableObject = {};
    
    tableObject.grid = [];   

    for(let rowIndex=0;rowIndex<table.rows;rowIndex++){            
      let colCells = [];
      for(let colIndex=0;colIndex<table.cols;colIndex++){
        colCells.push({ posRow: rowIndex , posCol: colIndex });
      }
      tableObject.grid.push(colCells);
    }
    console.log(tableObject);
    
    return (
        <table className="table table-bordered">  
          <tbody>
          {       
              tableObject.grid.map( ( rowsObj, rowIndex ) => 
              <tr key={rowIndex}>
              {
                rowsObj.map( (cellObj, cellIndex ) => <td key={cellIndex}>{console.log(cellObj)}</td>)
              }  
              </tr>              
            )
          }
          </tbody>
        </table>
      )
  }

  render() {  		  					  
      const grid = this.drawTable();
      return (        
        <div>
          <h1>Grid Form</h1>
          {grid}        	
        </div>
    );          
  }
}

export default GridForm;