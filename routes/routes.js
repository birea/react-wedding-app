// January 14, 2018

const path = require('path');
const GuestsController = require('../controllers/guests_controller');

/*
	Define Request Handlers
	listen for requests on specific requests
	req => Express => res
*/

module.exports = (app) => {

	// Sample GET request
	app.get('/api/', GuestsController.greeting);

	// Handles GET request to MongoDB to retrieve all guests
	app.get('/api/data', GuestsController.get);

	// Handles POST request to MongoDB to add a guest
	// passing a reference to GuestsController.create
	app.post('/api/addGuest', GuestsController.create);

	app.get('/api/delete', GuestsController.delete);

}