import React, { Component } from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar'
import Notifications from 'react-notify-toast';
import { connect } from 'react-redux';
import { setLoader } from './actions/loader';

class App extends Component {
	
	componentWillMount(){
						
	}

  render() {  	    
    return (                    
          <div className="container-fluid">          
            {
              this.props.isEnabled ? <div className="loading">Loading&#8230;</div> : null
            }           
            <NavigationBar/>                               
          	{this.props.children}                      
            <Notifications/>          
          
          </div>
    );
  }
}

App.propTypes = { 
  setLoader: React.PropTypes.func.isRequired,
}

function mapStateToProps(state){
  return {    
    isEnabled: state.loader.isEnabled,          
  }
}

export default connect(mapStateToProps, { setLoader })(App);


