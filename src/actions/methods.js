import axios from 'axios';
import { REQUEST_METHODS, RECEIVE_METHODS  } from './types';

export function requestMethods(){
	return {
		type: REQUEST_METHODS		
	}
}

export function receiveMethods(methods){
		return {
			type: RECEIVE_METHODS,
			methods: methods
		}
}

export function fetchMethodsRequest(){				
	return dispatch =>{
		dispatch(requestMethods());
		return axios.get('http://localhost:3002/methods').then( (res) => {			
			dispatch(receiveMethods(res.data));
		}).catch( (err) =>{

		});		
	}
}

