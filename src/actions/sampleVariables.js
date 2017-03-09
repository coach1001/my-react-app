import axios from 'axios';
import  { RECEIVE_SAMPLE_VARIABLES, REQUEST_SAMPLE_VARIABLES } from './types';

export function requestSampleVariables(){
	return {
		type: REQUEST_SAMPLE_VARIABLES
	}
}

export function receiveSampleVariables(sampleVariables){
	return {
		type: RECEIVE_SAMPLE_VARIABLES,
		sampleVariables: sampleVariables
	}
}

export function fetchSampleVariables(sample_id){
	return dispatch => {
		dispatch(requestSampleVariables());		
		return axios.post(`${window.configGA.API_DB}/rpc/f_sample_variables`,{ sample_id: sample_id }).then( (res) => {
			dispatch(receiveSampleVariables(res.data));
		});
	}
}

export function updateSampleVariable(data, sample_id){
/*			
	return dispatch => {		

		let requestPromises= [];		

		data.map( (method)=>{
							
			if (method.id ){	

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
*/
}
