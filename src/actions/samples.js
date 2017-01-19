import axios from 'axios';
import { REQUEST_SAMPLES, RECEIVE_SAMPLES  } from './types';

export function requestSamples(){
	return {
		type: REQUEST_SAMPLES		
	}
}

export function receiveSamples(samples){
		return {
			type: RECEIVE_SAMPLES,
			samples: samples
		}
}

export function fetchSamplesRequest(){				
	return dispatch =>{
		dispatch(requestSamples());
		return axios.get('http://localhost:3002/samples').then( (res) => {			
			dispatch(receiveSamples(res.data));
		}).catch( (err) =>{

		});		
	}
}

