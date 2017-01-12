import React, { Component } from 'react';
import { connect } from 'react-redux';
import map from 'lodash/map';

let gridName, valCol, dispCol = '';

class SingleSelect extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedValue : 0
    }
  }
  render() { 

    let grid={};

    for( var i = 0 ; i < this.props.grids.length; i++){   
      if( this.props.grids[i].name === this.props.gridName){
        grid = this.props.grids[i];
      }
    }
    
    const options = map(grid.data, (key,val) => <option key={val} value={key[this.props.valCol]}>{key[this.props.dispCol]}</option> );

    return (
      <div className="form-group">
        <label className="control-label">Test</label>
        <select className="form-control" name="testSelect" onChange={this.onChange} value={this.state.selectedValue}>
          <option value="" disabled>Choose Test</option>
          {options}
        </select>
      </div>                
    );
  }
}

SingleSelect.propTypes = {
  gridName : React.PropTypes.string.isRequired,
  valCol : React.PropTypes.string.isRequired,
  dispCol : React.PropTypes.string.isRequired
}

function mapStateToProps(state){
  return ({
    grids : state.gridData.grids
  });
}

export default connect(mapStateToProps, { gridName, valCol, dispCol} )(SingleSelect);