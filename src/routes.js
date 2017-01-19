import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Greeting from './components/Greeting';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import SamplesRegistryPage from './components/samplesRegistry/SamplesRegistryPage';
import LookupPage from './components/lookup/LookupPage';
export default (
	<Route path="/" component={App}>
		<IndexRoute component={Greeting} />
		<Route path="signup" component={SignupPage} />
		<Route path="login" component={LoginPage} />
		<Route path="samplesRegistry" component={SamplesRegistryPage} />
		<Route path="lookup" component={LookupPage} />
	</Route>
)	