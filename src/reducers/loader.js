import { SET_LOADER } from '../actions/types';

const initialState = {
	isEnabled : false,	
}

export default (state = initialState, action = {}) => {
	switch(action.type){
		case SET_LOADER:
		return {
			isEnabled: action.isEnabled
		};
		default: return state;
	}
}