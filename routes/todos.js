var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://tknott95:sexytexy@ds023105.mlab.com:23105/mean-todos-db',['todos']);

router.get('/todos', function(req, res, next){
	db.todos.find(function(err, todos){
		if(err){
			res.send(err);
		} else 	{
			res.json(todos);
		}
	});
});

module.exports = router;