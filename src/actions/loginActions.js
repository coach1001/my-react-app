import axios from 'axios';
import {SET_CURRENT_USER } from './types';
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

export function userLoginRequestAD(userData){
	console.log();
	return dispatch => {
	
		const transformData = {			
			email: userData.email_username,
			pass: userData.password
		};

		return axios.post(`${window.configGA.API_AD}/adlogin`, transformData).then( (res) => {			
			localStorage.setItem('jwtToken', res.data.token);
			setAuthorizationToken(res.data.token);						
			dispatch(setCurrentUser( jwtDecode(res.data.token) ));
		});

	}
}

export function userLoginRequestDB(userData){
	
	return dispatch => {
	
		const transformData = {			
			email: userData.email_username,
			pass: userData.password
		};

		return axios.post(`${window.configGA.API_DB}/rpc/login`, transformData).then( (res) => {			
			console.log(res.data[0]);
			localStorage.setItem('LCS_Token', res.data[0].token);
			setAuthorizationToken(res.data[0].token);						
			dispatch(setCurrentUser( jwtDecode(res.data[0].token) ));
		});
	}
}