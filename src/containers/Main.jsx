// January 27, 2018
// Routes Defined With React Router v.4

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import OurStory from '../components/OurStory';
import RSVPForm from '../components/RSVPForm';
import RSVPConfirm from '../components/RSVPConfirm';
import RSVPPost from '../components/RSVPPost';
import YourStay from '../components/YourStay';
import ToDo from '../components/ToDo';
import ToEat from '../components/ToEat';
import Registry from '../components/Registry';
import Admin from '../components/Admin';

// Main implements the new React Router v.4
// Official documentation: https://reacttraining.com/react-router/web/api/
const Main = () => (

   	<Switch>
		<Route exact={true} path ='/' component = { Home } />
		<Route path ='/Home' component = { Home } />
		<Route path ='/OurStory' component = { OurStory } />
		<Route path ='/RSVPForm' component = { RSVPForm } />
		<Route path ='/RSVPConfirm' component = { RSVPConfirm } />
		<Route path ='/RSVPPost' component = { RSVPPost } />
		<Route path ='/YourStay' component = { YourStay } />
		<Route path ='/ToDo' component = { ToDo } />
		<Route path ='/ToEat' component = { ToEat } />
		<Route path ='/Registry' component = { Registry } />
		<Route path ='/Admin' component = { Admin } />
	</Switch>
);

export default Main;


/* 
	Friday, February 16, 2018
	Switch for Routing (Production vs Development)
	could not get the process.env.NODE_ENV variable to be defined
	on the client side.  Need to research further.

class Main extends Component {

	renderSwitch = (param) => {

		switch(param) {
			case 'production':
	           	<Switch>
					<Route exact={true} path ='/' component = { Home } />
					<Route path ='/Home' component = { Home } />
					<Route path ='/OurStory' component = { OurStory } />
					<Route path ='/RSVPForm' component = { RSVPForm } />
					<Route path ='/RSVPConfirm' component = { RSVPConfirm } />
					<Route path ='/RSVPPost' component = { RSVPPost } />
					<Route path ='/YourStay' component = { YourStay } />
					<Route path ='/ToDo' component = { ToDo } />
					<Route path ='/Restaurants' component = { Restaurants } />
				</Switch>
	            break;
	        case 'develop':
	        	<Switch>
					<Route exact={true} path ='/' component = { Home } />
					<Route path ='/Home' component = { Home } />
					<Route path ='/OurStory' component = { OurStory } />
					<Route path ='/RSVPForm' component = { RSVPForm } />
					<Route path ='/RSVPConfirm' component = { RSVPConfirm } />
					<Route path ='/RSVPPost' component = { RSVPPost } />
					<Route path ='/YourStay' component = { YourStay } />
					<Route path ='/ToDo' component = { ToDo } />
					<Route path ='/Restaurants' component = { Restaurants } />
					<Route path ='/DevControl' component = { DevControl } />
				</Switch>
	            break;
	        default:
	        	<Switch>
					<Route exact={true} path ='/' component = { Home } />
					<Route path ='/Home' component = { Home } />
					<Route path ='/OurStory' component = { OurStory } />
					<Route path ='/RSVPForm' component = { RSVPForm } />
					<Route path ='/RSVPConfirm' component = { RSVPConfirm } />
					<Route path ='/RSVPPost' component = { RSVPPost } />
					<Route path ='/YourStay' component = { YourStay } />
					<Route path ='/ToDo' component = { ToDo } />
					<Route path ='/Restaurants' component = { Restaurants } />
				</Switch> 
		}		
	}

	render() {

		console.log('NODE_ENV =', process.env.NODE_ENV);

		return (
			<div>
				{ this.renderSwitch(process.env.NODE_ENV)}
			</div>
		);
	}
}

export default Main;

*/

