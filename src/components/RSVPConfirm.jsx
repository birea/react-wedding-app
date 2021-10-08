// RSVP Confirm
// February 13, 2018

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { 
	Button,
	ButtonToolbar, 
	Table 
} from 'react-bootstrap';
import formStyle from '../../style/05-rsvp.css';


class RSVPConfirm extends Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {

		// if successful RSVP post and user clicks browser's Back button, 
		// re-route user to Home to avoid duplicate POST requests
		let popBackFromRSVPPost = this.props.history.action;

		if (popBackFromRSVPPost === 'POP') {
			this.props.history.push({
				pathname: '/Home',
			});
		}
	}

	goBack = () => {

		let RSVPData = this.props.location.state.RSVPData;

		this.props.history.replace({
			pathname: '/RSVPForm',
			state: { RSVPData: RSVPData }
		});
	}

	onRSVPConfirm = () => {

		let RSVPData = this.props.location.state.RSVPData;

		// route to RSVPPost page		
		this.props.history.push({
			pathname: '/RSVPPost',
			state: { RSVPData: RSVPData }
		});

	}

	showConfirmForm = (RSVP) => {

		return (
			<div className="rsvpconfirm">
				<h1>RSVP Confirmation</h1>
	  			<h3>Saturday, April 28, 2018 at 4:00 pm</h3>
				<h2>
					<b>{ RSVP.name },</b>
				</h2>
				<h4>
					Your presence is an honor to our families!
					<br />
					<br />
				</h4>
				<Table>
					<tbody>
						<tr>
							<td width='200'>Number of Adults</td>
							<td width='400'><b>{ RSVP.numAdults }</b></td>
						</tr>
						<tr>
							<td>Number of Children</td>
							<td><b>{ RSVP.numChildren }</b></td>
						</tr>
						<tr>
							<td>Song Request for Reception</td>
							<td><b>{ RSVP.songRequest }</b></td>
						</tr>
					</tbody>
				</Table>
				<ButtonToolbar>
					<Button bsStyle="danger"
		        		    style={{color: 'white', 'textDecoration':'none'}}
					        onClick={ this.goBack }>Go Back
			        </Button>
	      			<Button type="submit"
	      					bsStyle="primary"
	      		  			onClick={ this.onRSVPConfirm }>Confirm RSVP
	      			</Button>
				</ButtonToolbar>
			</div>
		);
	}

	render() {

		let RSVPData = this.props.location.state.RSVPData;

		return (
			<div className = { formStyle }>
				{ this.showConfirmForm(RSVPData) }
			</div>
		);
	}
}

export default withRouter(RSVPConfirm);