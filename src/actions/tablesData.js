import axios from 'axios';
import  { RECEIVE_TABLE, REQUEST_TABLE, RECEIVE_TABLES, REQUEST_TABLES } from './types';

export function requestTable(){
	return {
		type: REQUEST_TABLE	
	}
}

export function requestTables(){
	return {
		type: REQUEST_TABLES	
	}
}


export function receiveTable(tableData){
		return {
			type: RECEIVE_TABLE,
			tableData: tableData
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
			url: `http://localhost:3002/${table}`,			
			headers: {
				'xtable': table
			}
		};

		return axios(axiosConfig);
}

export function fetchTable(table){			
	return dispatch => {
		
		let requestPromises= [];		
			
		requestPromises.push(fetchTableRequest(table,'get'));
		requestPromises.push(fetchTableRequest(table,'options'));
		
		dispatch(requestTable());

		return axios.all(requestPromises).then((responses) => { 
			let data = {};
			data.tableData = [];
			data.tableColumns = [];

			data.tableName = table;
			
			responses.map( (response) => {				
			
				if(response.config.method === 'get'){
					data.tableData = response.data;
				}else if(response.config.method === 'options'){					
					data.tableColumns = response.data.columns;
				}	
				return response;
			});
			
			dispatch(receiveTable(data));	

		}).catch( (err) => {

		});		
	}
}


export function fetchTables(tables){			
	return dispatch => {
		
		let requestPromises= [];		
		
		tables.map( (table) =>{
			requestPromises.push(fetchTableRequest(table,'get'));
			requestPromises.push(fetchTableRequest(table,'options'));
			return table;
		})	
		
		dispatch(requestTables());

		return axios.all(requestPromises).then((responses) => { 			
			let tables = [];
			
			responses.map( (res) => {
				
				let tableData = {};
				tableData.columns = [];
				tableData.data = [];

				let tableName = res.config.headers.xtable;
				let method = res.config.method;
				let index = -1;
				
				tables.map( (table, index_) => {
					if(table.tableName === tableName){
						index = index_;
					}
					return table;
				});				

				if(index >=0){//Created
					
					if(method === 'get'){
						tables[index].data = res.data;
					}else if(method === 'options'){
						tables[index].columns = res.data.columns;
					}

				}else{//Not Created
					tableData.tableName = tableName;										
					if(method === 'get'){
						tableData.data = res.data;
					}else if(method === 'options'){
						tableData.columns = res.data.columns;
					}					
					tables.push(tableData);
				}
				return res;
			});			
			dispatch(receiveTables(tables));
		}).catch( (err) => {

		});
	}
}
