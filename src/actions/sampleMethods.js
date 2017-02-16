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
			
		}).catch( (err) => {
		
		});
	}

}
