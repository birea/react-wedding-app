import React, { Component } from 'react';
// added for compatibility with Windows Internet Explorer ver. 11
import Promise from 'es6-promise-promise';
import axios from 'axios';
import { 
	Form,
	FormGroup, 
	FormControl, 
	ControlLabel,
	ButtonToolbar,
	Button
} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import formStyle from '../../style/05-rsvp.css';

class RSVPForm extends Component {

	constructor(props) {
		super(props);

		this.baseState = {
			name: '',
			email:'',
			numAdults:0,
			numChildren:0,
			songRequest:''
		};

		// defined in webpack.config file
		// used here only for development to delete guests from database
		this.hostUrl = __API__;

		if (this.props.history.location.state) {
			let RSVPData = this.props.history.location.state.RSVPData;

			this.state = {
				name: RSVPData.name,
				email: RSVPData.email,
				numAdults: RSVPData.numAdults,
				numChildren: RSVPData.numChildren,
				songRequest: RSVPData.songRequest
			}
		} else {
			this.state = this.baseState;
		}
	}

	handleInputChange = (e) => {
		e.preventDefault();
		const target = e.target;
		const value = target.value;
		const id = target.id;
		this.setState({ [id]:value });
	}

	onFormCancel = () => {
		this.setState(this.baseState);
	}

	onFormSubmit = () => {
		let RSVPData = {
			name: this.state.name,
			email: this.state.email,
			numAdults: this.state.numAdults,
			numChildren: this.state.numChildren,
			songRequest: this.state.songRequest
		}
	
		// route to RSVPConfirm page		
		this.props.history.push({
			pathname: '/RSVPConfirm',
			state: { RSVPData: RSVPData }
		});
	}

	outputForm = () => {
		return (
			<div className = { formStyle }>
				<Form horizontal>
					<FormGroup>
						<ControlLabel>Name</ControlLabel>
						<FormControl
							 id="name" 
							 type="text" 
							 value={ this.state.name }
							 placeholder="Name"
							 onChange={ this.handleInputChange }
						/>
					</FormGroup>
					<FormGroup>
						<ControlLabel>Email</ControlLabel>
						<FormControl
							id="email"
							type="email"
							value={ this.state.email }
							placeholder="Please add your email"
							onChange={ this.handleInputChange }
						/>
					</FormGroup>
					<FormGroup>
						<ControlLabel>Number of Adults</ControlLabel>
						<FormControl
							id="numAdults"
							type="number"
							value={ this.state.numAdults }
							placeholder="Number of adults in your party"
							onChange={ this.handleInputChange }
						/>
					</FormGroup>
					<FormGroup>
						<ControlLabel>Number of Children (ages 5-12)</ControlLabel>
						<FormControl
							id="numChildren"
							type="number"
							value={ this.state.numChildren }
							placeholder="Number of children in your party"
							onChange={ this.handleInputChange }
						/>
					</FormGroup>
					<FormGroup>
						<ControlLabel>Song Request for Reception</ControlLabel>
						<FormControl
							 id="songRequest" 
							 type="text" 
							 value={ this.state.songRequest }
							 placeholder="Enter your song request"
							 onChange={ this.handleInputChange }
						/>
					</FormGroup>
				</Form>
				<ButtonToolbar>
			        <Button 
			        	bsStyle="danger"
		        		style={{
		        			color: 'white', 
		        			'textDecoration':'none',
		        			'marginRight': '10px'
		        		}}
		        		onClick= { this.onFormCancel }>Cancel
        			</Button>
					<Button 
						type="submit"
						bsStyle="primary"
						onClick= { this.onFormSubmit }>Submit
			        </Button>
				</ButtonToolbar>
			</div>
		);
	}

	render() {
		return (
			<div>
				{ this.outputForm() }
			</div>
		);
	}
}

export default withRouter(RSVPForm);

/*
	// BUTTONS to GET and DELETE DATA
	<ButtonToolbar>
	    <Button 
			type="submit"
			bsStyle="primary"
			onClick= { this.onDelete }>Delete Guests Data
	    </Button>
	</ButtonToolbar>
	<ButtonToolbar>
        <Button 
			type="submit"
			bsStyle="primary"
			onClick= { this.onGetData }>Get Data
        </Button>
	</ButtonToolbar>


	// METHODS to GET and DELETE DATA
	onDelete = () => {
		let deleteGuestsPath = 'api/delete';
		let url = this.hostUrl + deleteGuestsPath;
		console.log('url onDelete =', url);

		axios.get(url)
		.then(res => {
			console.log('res =', res);
		})
		.catch(err => {
			console.log('err =', err);
		})
	}

	// Used to Get All Guests from Database
	onGetData = () => {

		let getGuestsPath = 'api/data';
		let url = this.hostUrl + getGuestsPath;
		console.log('url onClick =', url);

		axios.get(url)
		.then(res => {
			console.log('res =', res);
		})
		.catch(err => {
			console.log('err =', err);
		})
	}
*/