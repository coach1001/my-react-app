import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../actions/loginActions';
import { fetchMethodsRequest } from '../actions/methods';
import classnames from 'classnames';

class NavigationBar extends Component {
  logout(e){
    e.preventDefault();
    this.props.logout();
  }
  
  componentWillMount(){    
   this.setState({
      methodsDropdown:false
   })
    this.props.fetchMethodsRequest();    
  }
  
  onClick(e){
    e.preventDefault();    
    this.setState({
      [e.target.name] : !this.state[e.target.name]
    })    
  }

  render() {    
    const { isAuthenticated } = this.props.auth;    
    const { methods } = this.props.methods;
    const userLinks = (
      <div>  
      <ul className="nav navbar-nav">
      <li><Link to="/samplesRegistry">Samples Registry</Link></li>
      <li className={classnames("dropdown",{"open":this.state.methodsDropdown} )}>
                <a href="#" name="methodsDropdown" onClick={this.onClick.bind(this)} className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">Input Forms<span className="caret"></span></a>
                <ul className="dropdown-menu">
     
                  {methods.map( (method,index) => {
                    return <li key={index}><a href="#" name="methodsDropdown" onClick={this.onClick.bind(this)}>{method.name}</a></li>  
                  })}
                </ul>
              </li>
        </ul>
                  
        <ul className="nav navbar-nav navbar-right">       
         <li><Link to="/lookup">Lookup Tables</Link></li>
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
  fetchMethodsRequest: React.PropTypes.func.isRequired
}

function mapStateToProps(state){
  return {
    auth: state.auth,
    methods: state.methods
  }
}

export default connect(mapStateToProps, { logout, fetchMethodsRequest })(NavigationBar);
