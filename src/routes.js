import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Greeting from './components/Greeting';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';

import SamplePage from './components/samples/SamplePage';
import SampleList from './components/samples/SampleList';
import SampleEditCreate from './components/samples/SampleEditCreate';


import SampleSelectionPage from './components/sampleSelection/SampleSelectionPage';
import SampleSelectionList from './components/sampleSelection/SampleSelectionList';
import SampleForm from './components/sampleSelection/SampleForm';

import LookupPage from './components/lookup/LookupPage';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Greeting} />
		<Route path="signup" component={SignupPage} />
		<Route path="login" component={LoginPage} />					
		<Route path="lookup" component={LookupPage} />
		
		<Route path="samples" component={SamplePage}>
			<IndexRoute component={SampleList} />
			<Route path=":sampleId" component={SampleEditCreate}/>
		</Route>

		<Route path="sampleSelection" component={SampleSelectionPage}>
			<Route path=":formId/:sampleId" component={SampleForm}/>		
			<Route path=":formId" component={SampleSelectionList}/>			
		</Route>
		
	</Route>
)	