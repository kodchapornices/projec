var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('login');
});
router.get('/register', function(req, res, next) {
  res.render('register');
});

router.get('/forgotpassword', function(req, res, next) {
  res.render('forgotpassword');
});

router.get('/verificationcode', function(req, res, next) {
  res.render('verificationcode');
});

router.get('/newpassword', function(req, res, next) {
  res.render('newpassword');
});

router.get('/profile', function(req, res, next) {
  res.render('profile');
});

router.get('/location', function(req, res, next) {
  res.render('location');
});

router.get('/map', function(req, res, next) {
  res.render('map');
});

router.get('/equipment', function(req, res, next) {
  res.render('equipment');
});
module.exports = router;
