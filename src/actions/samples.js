import axios from 'axios';
import  { API_URL, RECEIVE_SAMPLES, REQUEST_SAMPLES, RECEIVE_SAMPLE, REQUEST_SAMPLE} from './types';

export function requestSamples(){
	return {
		type: REQUEST_SAMPLES
	}
}

export function requestSample(){
	return {
		type: REQUEST_SAMPLE
	}
}

export function receiveSamples(samples){
		return {
			type: RECEIVE_SAMPLES,
			samples: samples
		}
}

export function receiveSample(sample){
		return {
			type: RECEIVE_SAMPLE,
			sample: sample		
		}
}

export function fetchSamples(){
	return dispatch => {
		dispatch(requestSamples());		
		return axios.get(`${API_URL}/samples_view`).then( (res) => {
			dispatch(receiveSamples(res.data));
		});
	}
}

export function fetchSample(id){
	return dispatch => {
		dispatch(requestSample());
		return axios.get(`${API_URL}/samples?id=eq.${id}`).then( (res) => {
			dispatch(receiveSample(res.data[0]));
		});
	}
}

export function updateCreateSample(data){
	let param = '';	
	let method='POST';
	
	if(data.id){
		param = `?id=eq.${data.id}`
		method = 'PATCH';
	}

	let axiosConfig = {
		method : method,
		url: `${API_URL}/samples${param}`,
		data : data, 			
		headers: {			
			'Prefer': 'return=representation'
		}
	};

	return axios(axiosConfig);		
}
