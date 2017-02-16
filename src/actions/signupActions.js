import axios from 'axios';
import {API_URL} from './types';
export function userSignupRequest(userData){
	return dispatch => {
		
		const transformData = {
			username : userData.username,
			email: userData.email,
			pass: userData.password
		};
		
		return axios.post(`${API_URL}/rpc/signup`, transformData);
	}
}