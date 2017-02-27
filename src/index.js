import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { store }  from './store';
import jwtDecode from 'jwt-decode';
import setAuthorizationToken from './utils/setAuthorizationToken';

import { setCurrentUser } from './actions/loginActions';
//import createLogger from 'redux-logger';


import './utils/axiosInterceptors';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table.min.css';
import './index.css';
import '../node_modules/animate.css/animate.css';
/*import '../node_modules/mathjax/MathJax.js';
import '../node_modules/mathjax/config/TeX-AMS_HTML-full.js';
*/
import routes from './routes';

//const loggerMiddleware = createLogger();
// eslint-disable-next-line
String.prototype.capitalize = function(){
  return this.replace( /(^|\s)([a-z])/g , function(m,p1,p2){ return p1+p2.toUpperCase(); } );
};

// eslint-disable-next-line
String.prototype.replaceAll = function(search, replacement){
  var target = this;
  return target.replace( new RegExp(search,'g'), replacement);
};


if(localStorage.jwtToken){
	setAuthorizationToken(localStorage.jwtToken);
	store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}

ReactDOM.render(<Provider store={store}><Router history={browserHistory} routes={routes}/></Provider>,document.getElementById('root'));
 
