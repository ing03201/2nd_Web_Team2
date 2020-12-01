var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'main page' });
});
router.get('/index.html', function(req, res, next) {
    res.render('index', { title: 'main page' });
});

router.get('/login.html', function(req, res, next) {
    res.render('login', { title: 'login' });
  }); 

router.get('/forgot-password.html', function(req, res, next) {
    res.render('forgot-passwd', { title: 'forgot-passwd' });
  }); 
  router.get('/register.html', function(req, res, next) {
    res.render('register', { title: 'register' });
  }); 

module.exports = router;