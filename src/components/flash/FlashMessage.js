import React, { Component } from 'react';
import classnames from 'classnames';

class FlashMessage extends Component {
	
	componentDidMount(){		
		setTimeout( () => {
			this.props.deleteFlashMessage(this.props.message.id);
		}, this.props.message.timeout);
	}

	constructor(props){
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	onClick(){
		this.props.deleteFlashMessage(this.props.message.id);
	}

	render() {
		const { type, text} = this.props.message;

		return (	
			<div className={ classnames('alert','container', {
				'alert-success' : type === 'success',
				'alert-danger' : type === 'error'				
			})}>
				<button onClick={this.onClick} className="close"><span>&times;</span></button>
				{text}
			</div>
		);
	}
}

FlashMessage.propTypes = {
	message: React.PropTypes.object.isRequired,
	deleteFlashMessage: React.PropTypes.func.isRequired
}

export default FlashMessage;