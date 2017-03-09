import axios from 'axios';
export function userSignupRequest(userData){
	return dispatch => {
		
		const transformData = {
			username : userData.username,
			email: userData.email,
			pass: userData.password
		};
		
		return axios.post(`${window.configGA.API_DB}/rpc/signup`, transformData);
	}
}