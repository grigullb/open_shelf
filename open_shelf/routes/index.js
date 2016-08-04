var express = require('express');
var router = express.Router();
var knex = require('knex')({client: 'pg',
  connection: {
    host: 'localhost',
    user: 'development',
    password: 'development',
    database: 'open_shelf'
  }});
var bookshelf = require('bookshelf')(knex);

var User = bookshelf.Model.extend({
  tableName: 'users',
  posts: function() {
    return this.hasMany(Posts);
  }
});

var List = bookshelf.Model.extend({
  tableName: 'lists'
})


/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' });
});

module.exports = router;
