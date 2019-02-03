var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Anni & Tommy' });
});

/* GET map page. */
router.get('/map', function(req, res, next) {
  res.render('map', { title: 'Kartor' });
});

/* GET accomodation page. */
router.get('/accomodation', function(req, res, next) {
  res.render('accomodation', { title: 'Boende' });
});

/* GET registry page. */
router.get('/registry', function(req, res, next) {
  res.render('registry', { title: 'Önskelista' });
});

/* GET other page. */
router.get('/other', function(req, res, next) {
  res.render('other', { title: 'Övrigt' });
});

module.exports = router;
