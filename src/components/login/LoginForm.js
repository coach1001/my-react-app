import React, { Component } from 'react';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import TextFieldGroup from '../common/TextFieldGroup';
import { connect } from 'react-redux';
import { addFlashMessage } from '../../actions/flashMessages';

function validateInput(data){
	let errors = {};

	if(Validator.isEmpty(data.email_username)){
		errors.email_username = "This Field is Required";
	}

	if(Validator.isEmpty(data.password)){
		errors.password = "This Field is Required";
	}
	return {
		errors,
		isValid : isEmpty(errors)
	}
}

class LoginForm extends Component {
  
  constructor(props){
  	super(props);
  
  	this.state = {
  		email_username : '',
  		password: '',
  		errors: {},
  		isLoading: false
  	}

  	this.onChange = this.onChange.bind(this);
  	this.onSubmit = this.onSubmit.bind(this);
  }

	onChange(e){
			let errors = {};
			Object.assign(errors,this.state.errors);
			
		 if( isEmpty(errors) ){		 	
		 
		 }else{
		 	if(!isEmpty(errors[e.target.name]) ){
		 		delete 	errors[e.target.name];
		 		this.setState( { errors : errors });
		 	}
		 	if(!isEmpty(errors.loginError) ){
		 		delete 	errors.loginError;
		 		this.setState( { errors : errors });
		 	}
		}
 		this.setState({ [e.target.name] : e.target.value } );
	}

	onSubmit(e){
		this.setState({ errors : {}, isLoading: true });
		e.preventDefault();
		
		const { errors, isValid } = validateInput(this.state);
		
		if(isValid){		
			this.setState( { errors: errors, isLoading: false });	
			this.props.userLoginRequest(this.state).then(
				(res) => {				

						this.props.addFlashMessage({
							type : 'success',
							text : 'You have logged in successfully. Welcome!',
							timeout: 3000
						});

						this.context.router.push('/');										
				}).catch((error) => {				 	
				 	
				 	if(error.response.status === 403){				 		
				 		errors.loginError = 'Invalid Credentials';	
				 		this.setState( { errors: errors, isLoading: false });										 		
				 	}else if(error.response.status === 500){				 		
				 		errors.loginError = 'Authentication server not available';	
				 		this.setState( { errors: errors, isLoading: false });										 		
				 	}


				});			
		}else{
			this.setState( { errors: errors, isLoading: false });
		}		
	}

  render() {  	
    return (    	
    	<form onSubmit={this.onSubmit}>
				<h1>Log in</h1>
    		
    		{this.state.errors.loginError && <div className="alert alert-danger">{ this.state.errors.loginError}</div>}

				<TextFieldGroup error={this.state.errors.email_username} label="Username or Email" onChange={this.onChange} value={this.state.email_username} field="email_username" />
				<TextFieldGroup error={this.state.errors.password} label="Password" onChange={this.onChange} value={this.state.password} field="password" type="password"/>
											
				<div className="form-group">
					<button disabled={this.state.isLoading} className="btn btn-lg btn-primary">Log in</button>
				</div>
    	</form>    	
    );
  }
}

LoginForm.propTypes = {
	userLoginRequest : React.PropTypes.func.isRequired,
	addFlashMessage : React.PropTypes.func.isRequired
}

LoginForm.contextTypes = {
	router: React.PropTypes.object.isRequired
}


export default connect(null, { addFlashMessage } )(LoginForm);