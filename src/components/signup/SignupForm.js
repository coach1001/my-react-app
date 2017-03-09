import React, { Component } from 'react';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import TextFieldGroup from '../common/TextFieldGroup';
import {notify} from 'react-notify-toast';

function validateInput(data){
	let errors = {};

	if(Validator.isEmpty(data.username)){
		errors.username = "This Field is Required";
	}

	if(Validator.isEmpty(data.email)){
		errors.email = "This Field is Required";
	}

	if(!Validator.isEmail(data.email)){
		errors.email = "Email is Invalid";
	}

	if(Validator.isEmpty(data.password)){
		errors.password = "This Field is Required";
	}

	if(Validator.isEmpty(data.passwordConfirm)){
		errors.passwordConfirm = "This Field is Required";
	}

	if(!Validator.equals(data.password,data.passwordConfirm)){
		errors.passwordConfirm = 'Password must match';
	}
	
	return {
		errors,
		isValid : isEmpty(errors)
	}
}

class SignupForm extends Component {
  
  constructor(props){
  	super(props);
  
  	this.state = {
  		username : '',
  		email: '',
  		password: '',
  		passwordConfirm: '',
  		errors: {},
  		isLoading: false
  	}

  	this.onChange = this.onChange.bind(this);
  	this.onSubmit = this.onSubmit.bind(this);
  }

	onChange(e){
			let errors={};
			Object.assign(errors,this.state.errors);
			
		 if( isEmpty(errors) ){		 	
		 
		 }else{
		 	if(!isEmpty(errors[e.target.name]) ){
		 		delete 	errors[e.target.name];
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
			this.props.userSignupRequest(this.state).then(
				() => {
						notify.show('You have signed up successfully. Welcome!','success',3000);						
						this.context.router.push('/');
				}).catch((error) => {
				 	
				 	if(error.response.status === 409){
				 		var errorDetails = error.response.data.details;
				 		
				 		errorDetails = errorDetails.split('(');
				 		errorDetails = errorDetails[1];
				 		errorDetails = errorDetails.split(')');
				 		errorDetails = errorDetails[0];
				 		
				 		errors[errorDetails] = errorDetails + ' already exists';
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
				<h1>Join our Community!</h1>
    		
				<TextFieldGroup error={this.state.errors.username} label="Username" onChange={this.onChange} value={this.state.username} field="username" />
				<TextFieldGroup error={this.state.errors.email} label="Email" onChange={this.onChange} value={this.state.email} field="email" />
				<TextFieldGroup error={this.state.errors.password} label="Password" onChange={this.onChange} value={this.state.password} field="password" type="password"/>
				<TextFieldGroup error={this.state.errors.passwordConfirm} label="Password Confirm" onChange={this.onChange} value={this.state.passwordConfirm} field="passwordConfirm" type="password" />

				<div className="form-group">
					<button disabled={this.state.isLoading} className="btn btn-lg btn-primary">Sign up</button>
				</div>
    	</form>    	
    );
  }
}

SignupForm.propTypes = {
	userSignupRequest : React.PropTypes.func.isRequired,	
}

SignupForm.contextTypes = {
	router: React.PropTypes.object.isRequired
}

export default SignupForm;