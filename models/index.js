const mongoose = require('mongoose');
//set the debug mode to true instead of sliently failing 
mongoose.set('debug', true);
//connect to the DB 
mongoose.connect('mongodb://localhost/todo-api');

//set promise 
mongoose.Promise = Promise;

module.exports.Todo = require('./todo')