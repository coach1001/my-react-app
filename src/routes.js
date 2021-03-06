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

import LookupPage  from './components/lookup/LookupPage';

import MethodEditPage from './components/methodEdit/MethodEditPage';
import MethodEdit from './components/methodEdit/MethodEdit';
import GdrtReport from './GdrtReport';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Greeting} />
		<Route path="signup" component={SignupPage} />
		<Route path="login" component={LoginPage} />					
		
		<Route path="report" component={GdrtReport} >
			<IndexRoute component={GdrtReport} />
			<Route path=":sampleId" component={GdrtReport}/>
		</Route>

		<Route path="lookup" component={LookupPage}>
			<IndexRoute component={LookupPage} />
		</Route>

		<Route path="sampleSets" component={SampleSetPage}>
			<IndexRoute component={SampleSetList} />
			<Route path="new" component={SampleSetEditCreate}/>
			<Route path=":sampleSetId" component={SampleSetEditCreate}/>
		</Route>

		<Route path="sampleSets" component={SampleSetPage}>
			<IndexRoute component={SampleSetList} />
		</Route>

		<Route path="samples" component={SamplePage}>
			<IndexRoute component={SampleList} />			
			<Route path="new" component={SampleEditCreate}/>
			<Route path=":sampleId" component={SampleEditCreate}/>			
		</Route>
		
		<Route path="sampleMethod" component={MethodEditPage}>						
			<Route path=":sampleId/:methodCode/:methodId/:sampleMethodId" component={MethodEdit}/>
			<Route path=":sampleId/:methodCode/:methodId/:sampleMethodId/:empty" component={MethodEdit}/>
		</Route>

	</Route>
)	