// handled by nodeJS runtime
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let apiHost, process_NODE_ENV;

let setupAPI = function() {

    console.log('=> INSIDE setupAPI() of webpack.config.js');
    console.log('process.env.NODE_ENV =', process.env.NODE_ENV);

    switch(process.env.NODE_ENV) {
        case 'production':
            process_NODE_ENV = "'production'";
            apiHost = "'http://www.ivyjoe2018.com/'";
            break;
        case 'develop':
        default:
            process_NODE_ENV = "'develop'";
            apiHost = "'http://localhost:3000/'";
            break;
    }
}();


// webpack links up JS modules together
const config = {

  	entry: {
        bundle: './src/index.js'
    },

  	// Output - where the output goes
  	// must specify an absolute file reference
  	// __dirname => const in nodeJS for current pwd
  	// usually save output to folder 'build'
  	output: {
  		  path: path.resolve(__dirname, 'build'),
      	filename: 'bundle.js',
        //publicPath: 'dist/'
    },

  	// Loaders pre-process files before placing them into the bundle.js file
  	// Examples:
  	// 1. babel - implement transpiling for ES2015 code
  	// 2. CSS
  	// 3. images

  	// in Webpack 2+, each individual loader is referred to as a rule
    module: {
    		rules: [
    			{
      				use: 'babel-loader',
      				// assign a regex expression to only apply babel to .js or .jsx files
      				test: /\.(js|jsx)$/,
      				// don't apply babel to files in node_modules directory
      				exclude: /node_modules/
    			},
    			{
      				use: ['style-loader', 'css-loader'],
      				test: /\.css$/
    			},
          {
              use: [
                  {
                      loader: 'file-loader',
                      options: {
                          name: '[name].[ext]',
                          outputPath: 'images/',
                          publicPath: 'images/'
                      }
                  },
                  {
                      loader: 'image-webpack-loader'
                  }
              ],
              test: /\.(jpeg|jpg|png|gif|svg)$/
          }
          /*
    			{
    				use: [
    					{
    						loader: 'url-loader',
    						options: { limit: 40000 }

    					},
    					'image-webpack-loader'
    				],
    				test: /\.(jpeg|jpg|png|gif|svg)$/
    			}
          */
    		]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new webpack.DefinePlugin({
            __API__: apiHost
        }),
        new webpack.DefinePlugin({
            __process_NODE_ENV__: process_NODE_ENV
        }),
        new webpack.ProvidePlugin({
            Promise: 'es6-promise-promise'
        })
    ]
}

module.exports = config;