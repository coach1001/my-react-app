import { SET_LOADER } from './types';

export function setLoader(isEnabled){
	return {
		type: SET_LOADER,
		isEnabled: isEnabled
	};
}
