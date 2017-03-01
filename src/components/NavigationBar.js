import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../actions/loginActions';
/*import classnames from 'classnames';*/

class NavigationBar extends Component {
  
  logout(e){
    e.preventDefault();
    this.props.logout();
    this.context.router.push('/');
  }
  
  componentWillMount(){       
  
  }
  
  onClick(e){        
  }

  render() {    
    const { isAuthenticated } = this.props.auth;
                
    const userLinks = (
      <div>  
      <ul className="nav navbar-nav">
      
        {/*<li><Link to="/sampleSets">Sample Sets</Link></li>*/}
        <li><Link to="/samples">Samples</Link></li>
        {/*<li><Link to="/samples">Print Outs</Link></li>*/}
      
      
        </ul>
                  
        <ul className="nav navbar-nav navbar-right">                
         <li><a href="#" onClick={this.logout.bind(this)}>Logout</a></li>              
        </ul>        
      
      </div>
    );

    const guestLinks = (
      <ul className="nav navbar-nav navbar-right">
       <li><Link to="/signup">Sign Up</Link></li>
       <li><Link to="/login">Login</Link></li>
      </ul>    
    );
    return (      
      	<nav className="navbar navbar-default">
      		<div className="container-fluid">
      			
      			<div className="navbar-header">
      				<Link to="/" className="navbar-brand">LAB Calculator</Link>      			 
            </div>
      			
      			<div className="collapse navbar-collapse">      			 
             { isAuthenticated ? userLinks : guestLinks }              
            </div>
      		
      		</div>
      	</nav>              
    );
  }
}

NavigationBar.propTypes = {
  auth: React.PropTypes.object.isRequired,
  logout: React.PropTypes.func.isRequired,
  inputForms: React.PropTypes.array,    
}

function mapStateToProps(state){
  return {
    auth: state.auth,        
  }
}

NavigationBar.contextTypes = {
  router: React.PropTypes.object.isRequired
}


export default connect(mapStateToProps, { logout, inputForms: [] })(NavigationBar);


