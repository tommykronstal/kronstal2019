var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Anni & Tommy' });
});

/* GET home page. */
router.get('/maps', function(req, res, next) {
  res.render('maps', { title: 'Kartor' });
});

module.exports = router;
