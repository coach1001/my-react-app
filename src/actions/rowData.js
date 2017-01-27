import axios from 'axios';
import  { RECEIVE_ROW, REQUEST_ROW } from './types';


export function requestRow(){
	return {
		type: REQUEST_ROW
	}
}

export function receiveRow(rowData){
		return {
			type: RECEIVE_ROW,
			rowData: rowData
		}
}

export function fetchRowNoDispatch(table,id){			
	return dispatch => {
		
		let axiosConfig = {
			method : get,
			url: `http://localhost:3003/${table}?select=*&id=eq.${id}`,			
			headers: {
				'xtable': table
			}
		};			
	
		return axios(axiosConfig);		
	}
}

export function fetchRow(table,id){			
	return dispatch => {

		let axiosConfig = {
			method : get,
			url: `http://localhost:3003/${table}?select=*&id=eq.${id}`,			
			headers: {
				'xtable': table
			}
		};			
				
		dispatch(requestRow());

		return axios(axiosConfig).then((response) => { 			
			let row = response.data;
			row.rowName = response.confid.headers.xtable;			
			dispatch(receiveRow(row));
		}).catch( (err) => {

		});
	}
}
