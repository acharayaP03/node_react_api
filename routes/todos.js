var express = require('express');
var router = express.Router();
var db = require('../models');
var helpers = require('../helpers/todos')

//request todo
router.route('/')
.get(helpers.getTodos)
.post(helpers.createTodos)

//show todo by its id or request perticular todo.
router.route('/:todoId')
.get(helpers.readTodos)
.put(helpers.updateTodos)
.delete(helpers.deleteTodos)

module.exports = router;