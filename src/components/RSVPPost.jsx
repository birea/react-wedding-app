// RSVPPost
// Component posts RSVP data to Mongo database and returns a successful response
// Friday, February 16, 2018

import React, { Component } from 'react';
// added Promise for compatibility with Windows Internet Explorer ver. 11
import Promise from 'es6-promise-promise';
import axios from 'axios';
import formStyle from '../../style/05-rsvp.css';


class RSVPPost extends Component {

	constructor(props) {
		super(props);

		this.state = {
			successRSVP: false
		}

		// defined in webpack.config file
		this.hostUrl = __API__;
	}

	componentDidMount() {

		let addGuestPath = 'api/addGuest';
		let url = this.hostUrl + addGuestPath;

		let body = this.props.location.state.RSVPData;
		body.postDate = new Date().toString();

		axios.post(url, body)
		.then(res => {
			console.log('res =', res);
			this.setState({ successRSVP:true });
		})
		.catch(err => {
			console.log('err =', err);
		});
	}

	render() {

		if (!this.state.successRSVP) {
			return (
				<div className="rsvpconfirm">
					<h3>Putting your RSVP on top.</h3>
					<h3>Give us just a moment!</h3>
				</div>
			);
		} else {
			return (
				<div className="rsvpconfirm">
					<h3>Success!</h3>
					<h3>Bienvenidos a Albuquerque!</h3>
				    <h3>Nos veremos muy pronto!</h3>
				</div>
			);
		}
	}
}

export default RSVPPost;