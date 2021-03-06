var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница Карамельки */
router.get('/karamelka', function(req, res, next) {
  res.send("<h1>Страница Карамельки</h1>");
});

/* Страница Компота */
router.get('/kompot', function(req, res, next) {
  res.send("<h1>Страница Компота</h1>");
});

/* Страница Коржика */
router.get('/korthik', function(req, res, next) {
  res.send("<h1>Страница Коржика</h1>");
});

module.exports = router;
