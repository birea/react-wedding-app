# WeddingApp
An interactive, dynamic wedding planning and travel app built with React, Node, Express, and MongoDB (MERN).

## Run App in Development Mode  
To run the app on localhost:3000 with a live connection to MongoDB Atlas, follow these two steps:

1.  Build the webpack module in development mode:
    ```
        $ npm run build:dev
    ```

2.  Start the local Node server:
    ```
        $ npm start
    ```

3.  Open a browser window and type the following address:
    ```
        http://localhost:3000
    ```

4.  Any database calls will be made to the MongoDB Atlas cluster.


## Build App for Production Deployment
The app is currently deployed on an AWS Elastic Beanstalk cluster.  The MongoDB database is served on a separate AWS EC2 instance and configured through MongoDB Atlas.

1.  Delete any previous build folder and files:

    ```
        $ npm run clean
    ```

2.  Build the webpack module for production:
    ```
        $ npm run build:production
    ```

3.  After the build, go to the Finder window and navigate to the app directory.

4.  Open the root directory and compress all the files into a ZIP file.

5.  Move the compressed file to the WeddingApp-Build folder.

6.  In the browser, login into AWS and navigate to Elastic Beanstalk and the current app deployment.

7.  Click the _Upload and Deploy_ button.  Select the compressed folder from the WeddingApp-Build folder.

8.  The Elastic Beanstalk upload and deployment process takes about 7-10 minutes.

## Run App on Your Local Machine
To run the app entirely on your local machine, you will need to spin-up three servers:

    - Server 1, running on port 8080, will serve the content of the app in the browser.
    - Server 2, running on port 3050, will connect the front-end browser to the back-end Mongo database via an Express server.
    - Server 3, running on port 27017, will run the mongod process that serve the content from the Mongo database.

1.  To start the frontend client server on port 8080, open a new tab in the console, change to the _WeddingApp_ root directory, and run:
    ```
        $ npm run serve
    ```

2.  Open a browser window and navigate to:
    ```
        http://localhost:8080
    ```

3.  To start the backend Node/Express server on port 3050, open a new tab in the console, change to the WeddingApp root directory, and run:
    ```
        $ node app.js
    ```

4.  To start the mongod process on port 27017, open a new tab in the console and run the following command:
    ```
        $ mongod
    ```

    mongod is the main background process (daemon) that handles data requests, manages data access, and performs background management operations for the Mongo database.

5.  To shut down the mongod process, in a new tab in the console, open a mongodb shell and then run the following two commands:

    ```
        $ mongodb
        > use admin
        > db.shutdownServer()
    ```

    The above commands should kill the mongod process.  If mongod errors and says the socket/address for port 27017 is already in use, you can kill the previous mongod process with two unix commands:

    ```
        $ ps wuax | grep mongo
    ```

The output will show a couple of lines of code like this:
    
    ```
        jstowers  2408   0.3  0.1  2584216 9988 ??  S  Mon03PM 2:04.14 mongod
    ```

Next, kill the instance of mongod that is running:

    ```
        $ kill 2408
    ```


## Run the Backend Mocha Tests on Your Local Machine

1.  To start the mongod process, open a new tab in the console and type:
    ```
        $ mongod
    ```
If the mongod process is not running in the background, the Mocha tests attempting to connect to the Mongo database will fail.

2.  To run the Mocha test suite, open a new tab in the console, change to the WeddingApp directory, and run this test script:
    ```
        $ npm run test
    ```

---

### Saturday, January 13, 2018

- Build out initial React & Webpack template

- Add RSVP form component using react-bootstrap

        I could not get the handleInputChange() function to properly set state when a new value was typed in the form field.  I was receiving the following error:
        Uncaught TypeError: Cannot read property 'setState' of undefined

        After research, I determined that the arrow functions were not being read by the browser.  https://medium.com/@joshblack/writing-a-react-component-in-es2015-a0b27e1ed50a

        But, by installing the following plugin, _babel-plugin-transform-class-properties_, the arrow functions work.

        To install:
        1.  npm install --save-dev babel-plugin-transform-class-properties
        2.  update the .babelrc file to include this plugin:
            ```
            {
                "presets": ["babel-preset-env", "react"],
                "plugins": ["transform-class-properties"]
            }
            ```
        3.  rerun the webpack dev server

- Hook up MongoDB to RSVP Form

    1.  Review Stephen Grider's MongoDB course 

    2.  Install express and mocha as dependencies

        ```
            npm install --save express mocha
        ```

    3.  Install mongodb Express driver
        ```
            npm install --save mongodb
        ```

    4.  Compare between mongoose and mongodb Node drivers

    5.  Build basic express server with simple get request

    6.  Create test file to test GET requests and response.  Download library supertest to make testing of HTTP requests easier.

    7.  Sec. 14, Lec. 104
        Used supertest to test the GET request.
        Add the following test script to the package.json:

        "test": "nodemon --exec 'mocha --recursive -R min'",

---


### Sunday, January 14, 2018

**Parts of Express App**
1.  Router -- looks at URL and method of incoming request and sends that request to the appropriate route handler.  Will separate routing logic from logic of how to respond to the request.

2.  Controller -- logic of how to respond to a particular request

3.  Model -- Mongoose model or model driver


*** Mongo requires a directory to be pre-named to store data on the server.  

    ```        
        $ sudo mkdir -p /data/db
    ```


*** Stopping the Mongo Driver

    ```        
        $ brew services stop mongodb
    ```


*** Node Receiving a POST Request
Node receives tiny chunks of the request body at a time; piece by piece;
Once Node receives the entire request

Express doesn't do a good job of handling the request body

Will use small library to take in these chunks and make them accessible - body-parser

### body-parser
1.  Parses the incoming request object, req
2.  Places it on the req.body property


### Testing Guest Creation  
Grider, MongoDB, Sec. 14, Lec. 111

1.  Look at response object that comes back after request is completed.  Will assume the response includes the guest that was just created.

2.  More classic - add an insertion, look in Guests collection and make sure that a Guest with the given name and email is in that collection

3.  Take a count of guests in the Guest collection before post request is made, and then take another count when the request is finished and see if 1 more record is added.

### Monday, January 14, 2018

___Goals___
- Complete Mocha tests for GET and POST requests
- Connect React app to Express server
- Implement an environment variable to separate development and test environments.

#### Environment Variables
___Definition___
Environment variables stored on your machine, outside the world of Node and your React app.

It is a global variable that can be referenced inside of Node.

Purpose:
1.  Customize behavior
2.  Encode a number of constants to access in an application

___NODE_ENV___
- Very common environment variable in Node development
- Used to determine whether application is running in Development, Test, Production, or any other environment type.
- All enviroment variables placed in the _process.ENV_ object:
    
    ````
    process.env.NODE_ENV
    ````

### Saturday, January 20, 2018
Working on deployment to AWS Elastic Beanstalk

1.  _502 Bad Gateway Error_

    I had not properly defined my PORT envt variable in my app.js file.  So Nginix server was running on Port 8080 and I had only set up Port 3050 for my Express app.  After adding the PORT envt variable, this error disappeared.

2.  _Cannot GET /_
    
    On page load, the application doesn't render.  It is having trouble finding the root directory.

    I did not specify a route for my root file in Express.  I then added the following code to my routes.js file:

    ````
        app.get('/', (req, res) => {
            res.send('Hi There');
        });

    ````

    When I repackaged and redeployed to AWS, the homepage displayed a simple 'Hi There'.

3.  Need to Render Static React Components Using a Webpack Build Inside Express
    
    The webpack-dev-server works great for development but does not spin up when I deploy to AWS.  I need some way to load my index.html and my webpack bundle.js file.

    https://stackoverflow.com/questions/39558118/webpack-express-js-doesnt-load-bundle-js

    Going to try webpack-dev-middleware as my goto option.

    From the website:  webpack-dev-middleware requires Node v6 or higher, and must be used with a server that accepts express-style middleware.

4.  Getting Webpack to Play Nice with Node and Express . . . Argggh!!
    This took me almost 7 hours to complete.

    Moving from a webpack dev server build to using Express in preparation for deploymet was a PAIN!

    See Stephen Grider, Webpack, Sec. 5, Lec. 36, "Troubleshooting Vendor Bundles"

    Here he adds the HTMLWebpackPlugin to the webpack.config.js file that injects the _<script>__ tags for the index.html file that is saved in the build/ directory.

    _webpack.config.js_
    ````
        const HtmlWebpackPlugin = require('html-webpack-plugin');

        const config = {
            // other config properties omitted
            plugins: [
                new HtmlWebpackPlugin({
                    template: 'src/index.html'
                })
            ]
        }
    ````
    For this plugin, the _template_ property will look to the _index.html_ file saved in the #src/# directory for guidance in creating the _index.html_ file that will be inserted in the #build/# directory.

    _4:15pm_

    I have encountered problems deploying the app to AWS.  

    The app builds with npm run build and creates the bundle.js and index.html file in the build folder.  When I start the local Express server, the React component renders fine.  But when I zip the files and deploy to AWS, the webpage gives an error for the ReactDOM render in index.js.

### Sunday, January 21, 2018
    _12:19am_

    Updated app.js to include an IF statement to apply the webpack middleware when NODE_ENV !== 'production'


To test "production" setting on local server:

    $ NODE_ENV=production node app.js

SUCCESS . . . after 8 hours!!
After spending about 8 hours on this issue, was finally able to deploy the app to AWS!!

Deployed the app to AWS Beanstalk with the following changes:
1.  Productoin vs. Development:

````
    if (process.env.NODE_ENV !== 'production') {
        const webpackMiddleware = require('webpack-dev-middleware');
        const webpack = require('webpack');
        const webpackConfig = require('./webpack.config.js');
        app.use(webpackMiddleware(webpack(webpackConfig)));
    } else {
        app.use(express.static('build'));
        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, 'build/index.html'));
        });
    }
````

2.  Set NODE_ENV variable to production in AWS Beanstalk


### Monday, January 22, 2018

After much frustration with MongoDB Atlas free tier M0 not working correctly, and knowing that  my code worked perfectly on the localhost, I read much of Mongo's fine print regarding the free tier.  One big caveat is that server side JavaScript does not function on the free tiers.

Once I ponied up the $$$ for the M10 tier, the lowest tier with full MongoDB Atlas functionality, everything worked like a charm!

### Tuesday, January 23, 2018

Last night, I face difficulty deploying my app and having the POST and GET routes work correctly.  The url was consistently localhost:3000 in the webpack build.

So, this morning, based on Stephen Grider's Webpack lecture (Sec. 9, Lec. 52, 7:45), I am moving my routes call above the webpack build IF statements in app.js.  This should expose my API endpoints correctly.

9:27am - deploy WeddingApp-ver14


// CORS Configuration on AWS S3

1. In AWS, go to the AWS S3 service

2.  Select the elasticbeanstalk bucket for this app

3.  Click on the Permissions tab, then the CORS Configuration

4.  It will bring up an editor to configure the CORS policy for this bucket.  A sample CORSConfiguration follows:
```
        <!-- Sample policy -->
        <CORSConfiguration>
            <CORSRule>
                <AllowedOrigin>*</AllowedOrigin>
                <AllowedMethod>GET</AllowedMethod>
                <MaxAgeSeconds>3000</MaxAgeSeconds>
                <AllowedHeader>Authorization</AllowedHeader>
            </CORSRule>
        </CORSConfiguration>
```

### Sunday, January 28, 2018

_8:27 am_

I spent the majority of Saturday working on routing my static React components using the new React Router ver. 4.  I had hoped to use an older routing method from an earlier project, but alas, no.

The official ver. 4 documentation can be found here:

````
    https://reacttraining.com/react-router/web/api/
````

React Router implements a React-component-like structure for implementing `<Route>`, `<Link>`, and `<NavLink>`.

Based on available tutorials, I have divided my parent `<App />` component into two main sub-components:

    1. <Header />
            Contains the webpage header and navigation bar that will link to the content pages.

    2. <Main />
            Implements a <Switch> component to route the user to the different content pages.

This morning, I am still working out the details of this new method.  

_9:54 am_

I just completed the basic React Router setup for the 6 pages.  The next step is to see how the routing behaves on the deployed app.

Mi princesa Ivy esta todavía durmiendo . . . y yo, trabajando como un perro, mis manos encadenado al compu!

I just deployed to AWS production build WeddingApp-ver19!  ¡Vamos a ver!

---

_10:10 am_

I just tested WeddingApp-ver19 and received the following error when I tried to submit my RSVP confirmation.  
```
        Failed to load http://www.ivyjoe2018.com/api/addGuest: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://ivyjoe2018.us-east-1.elasticbeanstalk.com' is therefore not allowed access.
```
I believe this error is caused by the RSVPForm endpoint being www.ivyjoe2018.com/RSVP/api/addGuest and not www.ivyjoe2018.com/api/addGuest

I changed the AWS CORSConfiguration below and will see if this works:
```
        <?xml version="1.0" encoding="UTF-8"?>
        <CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
        <CORSRule>
            <AllowedOrigin>http://www.ivyjoe2018.com</AllowedOrigin>
            <AllowedMethod>PUT</AllowedMethod>
            <AllowedMethod>POST</AllowedMethod>
            <AllowedMethod>DELETE</AllowedMethod>
            <MaxAgeSeconds>3000</MaxAgeSeconds>
            <AllowedHeader>*</AllowedHeader>
        </CORSRule>
        <CORSRule>
            <AllowedOrigin>http://www.ivyjoe2018.com/RSVP</AllowedOrigin>
            <AllowedMethod>POST</AllowedMethod>
            <MaxAgeSeconds>3000</MaxAgeSeconds>
            <AllowedHeader>*</AllowedHeader>
        </CORSRule>
        <CORSRule>
            <AllowedOrigin>*</AllowedOrigin>
            <AllowedMethod>GET</AllowedMethod>
        </CORSRule>
        </CORSConfiguration>
```

I may have to change some routing in the Express app as well.

_1:48 pm_

The AWS Node Express server was listening on port 8081.
An RSVP request body was received at the create endpoint.
The database connection was established.
But the collection 'guests' was not defined for in the guests controller.

This below error is from the AWS _/var/log/nodejs/nodejs.log_:

```
    Server is listening on port 8081
    create req.body = { name: 'asdf',
      email: 'asdf',
      numAdults: '2',
      numChildren: '2',
      songRequest: 'asdf' }
    successfully connected to MongoDB.
    /var/app/current/node_modules/mongodb/lib/mongo_client.js:810
    throw err; ^
    ReferenceError: guests is not defined
        at MongoClient.connect (/var/app/current/controllers/guests_controller.js:83:4)
        at args.push (/var/app/current/node_modules/mongodb/lib/utils.js:404:72)
        at /var/app/current/node_modules/mongodb/lib/mongo_client.js:255:5
        at connectCallback (/var/app/current/node_modules/mongodb/lib/mongo_client.js:933:5)
        at /var/app/current/node_modules/mongodb/lib/mongo_client.js:807:13
        at _combinedTickCallback (internal/process/next_tick.js:131:7)
        at process._tickCallback (internal/process/next_tick.js:180:9)
```

I had not received this error before when making a POST request from the development build.  It may be due to React Router's interaction with Express.
---
### WeddingApp-ver23
_2:25 pm_

I changed `guests_controller` to define only one database instead of one database for development and one for production.  I am trying to isolate and identify why MongoDB did not recognize the _guests_ collection when the app was deployed to production with the addition of React Router.  

There could be an issue accessing a separate production database with the NODE_ENV variable.

````
        MongoClient.connect(url, (err, client) => {
            assert.equal(null, err);
            console.log("successfully connected to MongoDB.");

            let db = client.db('weddingDB');
            let guests = db.collection('guests');

            guests.insertOne(item, (err, response) => {
                assert.equal(null, err);
                console.log('insertOne response =', response);
                console.log('a guest was added to the guests collection.');
                res.status(200).send('success');
                client.close();
            });
        });
````

A sample Postman request:
```
    { 
      "name": "Jose Jose",
      "email": "jose@rca.com",
      "numAdults": "2",
      "numChildren": "4",
      "songRequest": "El Triste"
    }
```

### Friday, February 2, 2018

To Do
1.  Create modal to close RSVP Form and Link to homepage
2.  Create static content for Stay, Restaurants, To Do
3.  Cleanup styling

_RSVP Modal Close and Link to Home_
Added another modal that pops-up when a successful response is 
returned from MongoDB.

When the user clicks Close, the page is Linked via React Router to /Home.

The database calls worked fine on Chrome, Safari, and Ivy's cell.  The POST call did not work on Internet Explorer 11 ("IE11").  The term 'Promise' was undefined and returned a SCRIPT5009 error code in the console.

After research, I installed the 'es6-promise-promise' library which expands the ES6 Promise.  I then added it as a webpack.ProvidePlugin in my webpack.config file:

```
    new webpack.ProvidePlugin({
        Promise: 'es6-promise-promise'
    })
```

This fixed the Promise problem in IE11.  To test, hit F12 and in the console, type the following:

```
    > window.Promise
```
It should return a result referencing a Promise resolver.

---

_React Router `<Link>` Did Not Work in IE11_

Loaded babel-polyfill as a Node dependency.

Added import statement for babel-polyfill as first line in index.js file:

```
    import 'babel-polyfill';
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { BrowserRouter } from 'react-router-dom';
    import App from '../src/containers/App';
```

### Sunday, February 4, 2018

Webpack is having a problem serving static files, like JPG photos, after the build process:
```
    https://github.com/webpack-contrib/css-loader/issues/585
```

Some of the things I've tried:

1.  Run brew install libpng to load a different library

2.  Change my webpack.config file to add a publicPath

```
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: 'build/'
    }
```

3.  Some error with file-loader, so downgrading to version 1.1.4

Webpack is loading the image files as [Object][object]

_11:14 am_

### Installed Rimraf Package to Clean Previous _Build_ Directory

- Grider, Webpack, "Cleaning Project Files"
- Sec. 5, Lec. 39, 2:30

- Loaded npm package _rimraf_, a module for cleaning up directories in either Unix or Windows (a compatibility module).  This package deletes the previous build folder and all its contents before a new build:

```
    $  npm install --save-dev rimraf
```

- Added the following _clean_ script to the package.json file:
```
    "scripts": {
        "clean": "rimraf build"
    }   
```

- To run rimraf, type the following command:
```
    $ npm run clean

```

## Loading Images with Webpack
After much frustration, I found a workable solution around the difficulty in loading images with webpack.

1.  I used a relative path for the images stored in the dist/images folder:
```
        img: '/images/NativoLodge.jpg'
```
    I could not get the _import_ statement to work relative to my src dev directory:
```
        import NativoLodge from './NativoLodge.jpg';
```
file-loader is supposed to take these import references and translate them to the webpack dist folder, but it's not working.

2.  I removed the _publicPath=dist/_ reference in my file-loader config.

3.  Webpack is having trouble reading images with import or require statements. 
!! Solution => reference all images with the relative path /imags/<imageName> which will reference the images stored in the dist/images/ folder.

4.  I tried to add publicPath = /dist', but this is not working at all.


### Monday, February 5, 2018
This morning I tried to deploy to production, but the website did not load.

After review, I had commented out the import statemnt for the NativoLodge jpg from the YourStay component:

```
    import NativoLodge from './NativoLodge.jpg';
````

Without this line, webpack file-loader was not creating the images/ subdirectory in the dist/ folder.  This led to a failed build.  After adding the import statment, I recompiled in development mode, and the webpage reappeared.

I am now deploying ver. 29.

_Workaround for Images_

1.  I created an _img_ directory with subfolders.  One subfolder is 'home' and it stores the photos on the Home tab.  Another subfolder is 'hotels' and it stores the photos for the Your Stay tab.
2.  Within each subfolder, I created an _index.js_ file that imports the images from that subfolder and then exports an object of those images:

    ```
        import NativoLodge from './NativoLodge.jpg';
        import MarriottPyramid from './MarriottPyramid.jpg';
        import CourtyardMarriott from './CourtyardMarriott.jpg';
        import StaybridgeSuites from './StaybridgeSuites.jpg';
        import SandiaCasino from './SandiaCasino.jpg';
        import HyattTamaya from './HyattTamaya.jpg';

        export default { 
            NativoLodge, 
            MarriottPyramid,
            CourtyardMarriott,
            StaybridgeSuites,
            SandiaCasino,
            HyattTamaya
        };
    ```
    This format allows for easier use of the image files in my React components.

3.  In the _YourStay_ component, I import the hotel images with the following command:

    ```
        import { 
            NativoLodge, 
            MarriottPyramid,
            CourtyardMarriott,
            StaybridgeSuites,
            SandiaCasino,
            HyattTamaya
        } from '../../img/hotels/indexPhotos';
    ```

4.  For a reason that may be related to the file loaders I am using in my webpack.config file, I cannot reference these images in my code from the import statement.  

5.  The only way to display the images when webpack builds its bundle is to define the path for each image in the final build directory:

    ```
        hotelsArray = [
            {
                name: 'Marriott Pyramid',
                img: '/images/MarriottPyramid.jpg',
                url: 'http://bit.ly/19Swcb8',
                address1: '5151 San Francisco Rd. NE',
                address2: 'Albuquerque, NM 87109',
                phone: '505-821-3333',
                distance: '4.0 miles'
            }
        ]
    ```

6.   A sample reference to this image could be:

    ```
        <img src = { hotelsArray[0].img }
             alt = { hotelsArray[0].name} />
    ```

### Friday, February 9, 2018

_To Do_
+  Add content for To Do and Restaurants
+  Determine how to modify styling of react tabs (font, color)
+  RSVP Form
    *  Move Cancel and Submit buttons to right side
    *  Consider a div with another image

### Saturday, February 10, 2018

+  Deploy _ver32_, which finalizes the YourStay component with the addition of two hotels and an AirBNB listing.

### Sunday, February 11, 2018

+ Deploy _ver35_
    * Build out _OurStory_ with Ivy's historia and photos
    * Update _YourStay_ with price and notes added for each hotel
    * Update _ToDo_ with additional ABQ attractions

+ To Do
    * Add additional ABQ attractions to _ToDo_
    * Build out _Restaurants_
    * Write my story and add pictures
    * Consider methods for faster loading of CSS and image files
    * Add tab to toggle between English/Spanish

### Friday, February 16, 2018

+ Accomplishments
    * Deploy _ver36_
    * In this deployment, I refactored the RSVPForm process to remove the react-bootstrap modals.
        - In testing with other browsers and phones, guests would click `Submit` after entering their RSVP information, but no confirmation modal would appear.  The modal feature only worked on MacBook with Chrome browser.
        - Instead, I developed different pages and used react-router to route the user from one page to the next.
        - This refactor worked beautifully!

+ Work in Progress
    * I tried to refactor the Main component to allow different `<Switch/>` route statements for development and production.  
        - I planned to use the _process.env.NODE_ENV variable_ to switch between development and production, but I had difficulty defining the variable on the client side.
        - I am not sure this variable is defined within the client-side code.  Further research is required.

### Saturday, February 17, 2018

+ Work in Progress
    * Deploy _ver37_
    * I refactored the _guests_controller_ so that all API requests to MongoDB contain a conditional IF/ELSE statement differentiating between develop and production.
    * Last night, I noticed that when I deleted the test users in the database, only users in the guests-dev database were deleted.  I reviewed the delete function and the conditional IF/ELSE statement existed.  I then added this statement to the create and get methods.  For some reason, this logic was not working in these methods from earlier versions.

+ To Do
   
    * Update restaurants to include Martín in Santa Fe and Mary & Tito's
    * Update hotels to include more economical options between $95-$105
    * Update things to do to include National Hispanic Cultural Center (Bless Me Ultima exhibition) and Indian Pueblo Cultural Center, and Balloon Rides
    * Refactor the RSVPPost page so that when the data is posted, the user can't go back and submit the data again.

+ Deploy _ver38_
    * Deploy _ver38_ and _ver39_
    * Add a config folder that separates development and production passwords/keys
    * Fully operating dev and prod databases running with RSVPForm working in all environments

+ Deploy _ver39_
    *  Refactor Nav bar buttons so they don't appear scrunched in other browsers

+ Updated
    * Deleted react-router-bootstrap from package.json as unnecessary
