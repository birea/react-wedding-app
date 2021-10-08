// Express Server
// Sunday 1/14/2018
// rev. Saturday 1/20/2018

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// routes is a function() => MongoDB
const routes = require('./routes/routes');

/*
	app is an object that takes in requests and
	depending on the request will run different code
*/
const app = express();

// any incoming request, assume it is json, and parse into an object
// bodyParser must be placed above routes(app)
app.use(bodyParser.json());

// Routes defined specifically for Express
routes(app);

//  Used to communicate between local webpack server and mongod server
// allows CORS for communication between localhost servers
/*
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	next();
});
*/

// Webpack Middleware Configuration
// see Grider, Webpack, Sec. 9, Lec. 51
// webpackMiddleware intercepts incoming requests and hands
// them off to webpack
// webpack exists to compile our application assets
// webpackConfig tells webpack how to operate correctly
if (process.env.NODE_ENV !== 'production') {
	const webpackMiddleware = require('webpack-dev-middleware');
	const webpack = require('webpack');
	const webpackConfig = require('./webpack.config.js');
	app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
	// Express will serve up production assets like our index.js file or main.css file
	app.use(express.static('build'));
	// Express will serve up index.html file if it doesn't recognize the route
	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, 'build/index.html'));
	});
}

// listen for incoming HTTP requests on specified port
const PORT = process.env.PORT || 3000;
// added if statement so mocha test would run without error
if(!module.parent) {
	app.listen(PORT, () => {
		console.log('Server is listening on port', PORT);
	});
}

module.exports = app;
