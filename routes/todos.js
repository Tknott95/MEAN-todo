var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://tknott95:sexytexy@ds023105.mlab.com:23105/mean-todos-db',['todos']);



// Get Todos
router.get('/todos', function(req, res, next){
	db.todos.find(function(err, todos){
		if(err){
			res.send(err);
		} else 	{
			res.json(todos);
		}
	});
});

// Get Single Todo
router.get('/todo/:id', function(req, res, next){
	db.todos.findOne({
		_id: mongojs.ObjectId(req.params.id)
	}, function(err, todo){
		if(err){
			res.send(err);
		} else 	{
			res.json(todo);
		}
	});
});


//Save Todo



module.exports = router;