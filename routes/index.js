var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/acerca', function(req, res, next) {
  res.render('acerca');
});

router.get('/politica', function(req, res, next) {
  res.render('politica');
});

module.exports = router;
