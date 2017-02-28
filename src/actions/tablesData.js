import axios from 'axios';
import  { RECEIVE_TABLES, REQUEST_TABLES } from './types';
import  parseTablesResponses  from '../utils/parseTablesResponses';

export function requestTables(){
	return {
		type: REQUEST_TABLES	
	}
}

export function receiveTables(tableDataArray){
		return {
			type: RECEIVE_TABLES,
			tableDataArray: tableDataArray
		}
}

function fetchTableRequest(table, method){		
		let axiosConfig = {
			method : method,
			url: `http://localhost:3003/${table}`,			
			headers: {
				'xtable': table.split("?")[0]
			}
		};

		return axios(axiosConfig);
}

export function fetchTablesNoDispatch(tables){			
	return dispatch => {				
		let requestPromises= [];				
		tables.map( (table) =>{
			requestPromises.push(fetchTableRequest(table,'get'));
			requestPromises.push(fetchTableRequest(table,'options'));
			return table;
		})				
		return axios.all(requestPromises);		
	}
}

export function fetchTables(tables){			
	

	return dispatch => {
		dispatch(requestTables());

		let requestPromises= [];		
		
		tables.map( (table) =>{
			requestPromises.push(fetchTableRequest(table,'get'));
			requestPromises.push(fetchTableRequest(table,'options'));
			return table;
		})	
				
		return axios.all(requestPromises).then((responses) => { 			
			let tables = parseTablesResponses(responses);
			dispatch(receiveTables(tables));			
		}).catch( (err) => {
			
		});
	}
}

export function sendRow(table,data,method){

	let axiosConfig = {
		method : method,
		url: `http://localhost:3003/${table}`,
		data : data, 			
		headers: {
			'xtable': table.split("?")[0],
			'Prefer': 'return=representation'
		}
	};
	return axios(axiosConfig);		
}
