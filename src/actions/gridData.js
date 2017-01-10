import axios from 'axios';
import  { RECEIVE_GRIDS, REQUEST_GRIDS } from './types';
import isEmpty from 'lodash/isEmpty';

export function requestGrids(){
	return {
		type: REQUEST_GRIDS		
	}
}

export function receiveGrids(grids){
		return {
			type: RECEIVE_GRIDS,
			grids: grids
		}
}

function fetchGridRequest(table){		
		if(isEmpty(table.params)){
			return axios.get(`/${table.name}`, { headers : {'xgridname' : table.name} } );	
		}	else{			
			let paramString='?';		
			table.params.map( (param) => {
				return paramString += `${param.column}=${param.operator}.${param.value}&`;			
			});			
			return axios.get(`/${table.name}${paramString}`,{ headers : {'xgridname' : table.name} } );		
		}

}

export function fetchGrids(tables){			
	return dispatch => {
		let requestPromises= [];

		tables.map ( (table) => {
			return requestPromises.push(fetchGridRequest(table));
		});
	
		dispatch(requestGrids());

		return axios.all(requestPromises).then((responses) => { 
			let grids=[];
			console.log(responses);
			responses.map( (response) => {
				let grid = { name : response.config.headers.xgridname, data: response.data, count: response.data.length };										
				return grids.push(grid);
			});
			
			dispatch(receiveGrids(grids));
		}).catch( (err) => {

		});
	}
}
