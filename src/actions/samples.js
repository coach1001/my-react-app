import axios from 'axios';
import  { RECEIVE_SAMPLES, REQUEST_SAMPLES, RECEIVE_SAMPLE, REQUEST_SAMPLE} from './types';

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
		return axios.get(`${window.configGA.API_DB}/samples_view`).then( (res) => {
			dispatch(receiveSamples(res.data));
		});
	}
}

export function fetchSample(id){
	return dispatch => {
		dispatch(requestSample());
		return axios.get(`${window.configGA.API_DB}/samples?id=eq.${id}`).then( (res) => {
			dispatch(receiveSample(res.data[0]));
		});
	}
}

export function updateCreateSample(data){
	let param = '';	
	let method='POST';	

	return dispatch => {
		if(data.id){
			param = `?id=eq.${data.id}`
			method = 'PATCH';
		}
		
		let axiosConfig = {
			method : method,
			url: `${window.configGA.API_DB}/samples${param}`,
			data : data, 			
			headers: {			
				'Prefer': 'return=representation'
			}
		};
		return axios(axiosConfig);		
	}
}

export function deleteSample(id){
	return dispatch =>{
		return axios.delete(`${window.configGA.API_DB}/samples?id=eq.${id}`);
	}
}

