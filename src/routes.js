import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Greeting from './components/Greeting';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';

import SampleSetPage from './components/sampleSets/SampleSetPage';
import SampleSetList from './components/sampleSets/SampleSetList';
import SampleSetEditCreate from './components/sampleSets/SampleSetEditCreate';

import SamplePage from './components/samples/SamplePage';
import SampleList from './components/samples/SampleList';
import SampleEditCreate from './components/samples/SampleEditCreate';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Greeting} />
		<Route path="signup" component={SignupPage} />
		<Route path="login" component={LoginPage} />					

		<Route path="sampleSets" component={SampleSetPage}>
			<IndexRoute component={SampleSetList} />
			<Route path=":sampleSetId" component={SampleSetEditCreate}/>
		</Route>

		<Route path="samples" component={SamplePage}>
			<IndexRoute component={SampleList} />
			<Route path=":sampleId" component={SampleEditCreate}/>
		</Route>
		
	</Route>
)	