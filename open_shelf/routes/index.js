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



var List = bookshelf.Model.extend({
  tableName: 'lists',
  name: 'name'
})




/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index', { title: 'Open Shelf'});
});



module.exports = router;
