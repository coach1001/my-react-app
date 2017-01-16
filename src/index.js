import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import jwtDecode from 'jwt-decode';
import setAuthorizationToken from './utils/setAuthorizationToken';
import { setCurrentUser } from './actions/loginActions';
//import createLogger from 'redux-logger';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/yeti.css';
import './index.css';

import routes from './routes';

//const loggerMiddleware = createLogger();
// eslint-disable-next-line
String.prototype.capitalize = function(){
  return this.replace( /(^|\s)([a-z])/g , function(m,p1,p2){ return p1+p2.toUpperCase(); } );
};

export const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk),//, loggerMiddleware), 
		window.devToolsExtension ? window.devToolsExtension() : f => f
	) 
);

if(localStorage.jwtToken){
	setAuthorizationToken(localStorage.jwtToken);
	store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}

ReactDOM.render(<Provider store={store}><Router history={browserHistory} routes={routes}/></Provider>,document.getElementById('root'));
 
