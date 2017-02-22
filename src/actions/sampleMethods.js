import axios from 'axios';
import  { API_URL, RECEIVE_SAMPLE_METHODS, REQUEST_SAMPLE_METHODS, RECEIVE_SAMPLE_METHOD, REQUEST_SAMPLE_METHOD } from './types';

export function requestSampleMethods(){
	return {
		type: REQUEST_SAMPLE_METHODS
	}
}

export function requestSampleMethod(){
	return {
		type: REQUEST_SAMPLE_METHOD
	}
}

export function receiveSampleMethods(sampleMethods){
	return {
		type: RECEIVE_SAMPLE_METHODS,
		sampleMethods: sampleMethods
	}
}

export function receiveSampleMethod(sampleMethod){
	return {
		type: RECEIVE_SAMPLE_METHOD,
		sampleMethod: sampleMethod
	}
}

export function fetchSampleMethods(sample_id){
	return dispatch => {
		dispatch(requestSampleMethods());		
		return axios.post(`${API_URL}/rpc/f_sample_methods`,{ sample_id: sample_id }).then( (res) => {
			dispatch(receiveSampleMethods(res.data));
			return res;
		});
	}
}

export function fetchSampleMethod(sample_method_id){
	return dispatch => {
		dispatch(requestSampleMethod());		
		return axios.get(`${API_URL}/sample_has_methods?id=eq.${sample_method_id}`).then( (res) => {
			dispatch(receiveSampleMethod(res.data[0]));
			return res;
		});
	}
}

export function updateSampleMethod(data){
	let param = '';	
	let method='POST';	

	return dispatch => {
		if(data.id){
			param = `?id=eq.${data.id}`
			method = 'PATCH';
		}
		
		let axiosConfig = {
			method : method,
			url: `${API_URL}/sample_has_methods${param}`,
			data : data, 			
			headers: {			
				'Prefer': 'return=representation'
			}
		};
		return axios(axiosConfig).then( (res)=>{
			return res;
		});		
	}
}


export function updateSampleMethods(data, sample_id){
			
	return dispatch => {		

		let requestPromises= [];		

		data.map( (method)=>{
							
			if (method.id && !method.exists){	

				delete method.exists;
				requestPromises.push(axios.delete(`${API_URL}/sample_has_methods?id=eq.${method.id}`));
			
			}else if (method.id === null && method.exists){				
				
				delete method.exists;

				requestPromises.push(axios.post(`${API_URL}/sample_has_methods`,{method: method.method_id, sample: sample_id}));
			
			}
			return method;
		});

		return axios.all(requestPromises).then((responses) => { 										
			return responses;
		}).catch( (err) => {
		
		});
	}

}
