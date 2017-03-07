import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { userLoginRequestAD, userLoginRequestDB  } from '../../actions/loginActions';

class LoginPage extends Component {
  render() {
    const { userLoginRequestAD, userLoginRequestDB} = this.props;
    return (    	
    	<div className="row">
    		<div className="col-md-4 col-md-offset-4">    			
    			<LoginForm userLoginRequestAD={userLoginRequestAD} userLoginRequestDB={userLoginRequestDB} />
    		</div>
    	</div>    	
    );
  }
}

LoginPage.propTypes = {
	userLoginRequestAD : React.PropTypes.func.isRequired,
    userLoginRequestDB : React.PropTypes.func.isRequired,
}

export default connect(null, { userLoginRequestAD, userLoginRequestDB })(LoginPage);