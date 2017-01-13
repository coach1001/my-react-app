import axios from 'axios';
import {SET_CURRENT_USER} from './types';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';

export function logout(){
	return dispatch => {
		localStorage.removeItem('jwtToken');
		setAuthorizationToken(false);
		dispatch(setCurrentUser({}));
	}
}

export function setCurrentUser(user){
	return {
		type: SET_CURRENT_USER,
		user
	};
}

export function userLoginRequest(userData){
	
	return dispatch => {
	
		const transformData = {			
			email: userData.email_username,
			pass: userData.password
		};

		return axios.post('http://127.0.0.1:3002/rpc/login', transformData).then( (res) => {			
			localStorage.setItem('jwtToken', res.data.token);
			setAuthorizationToken(res.data.token);						
			dispatch(setCurrentUser( jwtDecode(res.data.token) ));
		});				
	}

}