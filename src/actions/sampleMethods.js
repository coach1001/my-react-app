import axios from 'axios';
import  { API_URL, RECEIVE_SAMPLE_METHODS, REQUEST_SAMPLE_METHODS } from './types';

export function requestSampleMethods(){
	return {
		type: REQUEST_SAMPLE_METHODS
	}
}

export function receiveSampleMethods(sampleMethods){
	return {
		type: RECEIVE_SAMPLE_METHODS,
		sampleMethods: sampleMethods
	}
}

export function fetchSampleMethods(sample_id){
	return dispatch => {
		dispatch(requestSampleMethods());		
		return axios.post(`${API_URL}/rpc/f_sample_methods`,{ sample_id: sample_id }).then( (res) => {
			dispatch(receiveSampleMethods(res.data));
		});
	}
}

export function updateCreateSampleMethods(data){
	/*
	let param = '';	
	let method = 'POST';

	if(data.id){
		param = `?id=eq.${data.id}`;
		method = 'PATCH';
	}	
	
	let axiosConfig = {
		method : method,
		url: `${API_URL}/sample_sets${param}`,
		data : data, 			
		headers: {			
			'Prefer': 'return=representation'
		}
	};
	return axios(axiosConfig);*/		
}
