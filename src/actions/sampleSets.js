import axios from 'axios';
import  { API_URL, RECEIVE_SAMPLE_SETS, REQUEST_SAMPLE_SETS, RECEIVE_SAMPLE_SET, REQUEST_SAMPLE_SET } from './types';

export function requestSampleSets(){
	return {
		type: REQUEST_SAMPLE_SETS
	}
}

export function requestSampleSet(){
	return {
		type: REQUEST_SAMPLE_SET
	}
}

export function receiveSampleSets(sampleSets){
		return {
			type: RECEIVE_SAMPLE_SETS,
			sampleSets: sampleSets
		}
}

export function receiveSampleSet(sampleSet){
		return {
			type: RECEIVE_SAMPLE_SET,
			sampleSet: sampleSet
		}
}

export function fetchSampleSets(){
	return dispatch => {
		dispatch(requestSampleSets());		
		return axios.get(`${API_URL}/sample_sets_view`).then( (res) => {
			dispatch(receiveSampleSets(res.data));
		});
	}
}

export function fetchSampleSet(id){
	return dispatch => {
		dispatch(requestSampleSet());
		return axios.get(`${API_URL}/sample_sets?id=eq.${id}`).then( (res) => {
			dispatch(receiveSampleSet(res.data[0]));
		});
	}
}

export function updateCreateSampleSet(data){
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

	return axios(axiosConfig);		
}
