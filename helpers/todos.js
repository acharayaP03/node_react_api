var db = require('../models');

exports.getTodos = function(req, res){
    db.Todo.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.createTodos = function(req, res){
    db.Todo.create(req.body)
    .then(function(newTodo){
        res.json(newTodo)
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.readTodos = function(req, res){
    db.Todo.findById(req.params.todoId)
    .then(function(foundTodos){
        res.json(foundTodos)
    })
    .catch(function(err){
        res.send(err)
    })
}

exports.updateTodos = function(req, res){
    db.Todo.findOneAndUpdate({_id : req.params.todoId}, req.body, {new: true})
    .then(function(todo){
        res.json(todo)
    })
    .catch( function(err){
        res.send(err);
    })
}


exports.deleteTodos = function(req, res){
    db.Todo.remove({_id : req.params.todoId})
    .then(function(){
        res.json({message : " Record has been deleted " })
    })
    .catch(function(err){
        res.send(err);
    })
}

module.exports = exports;