var express = require('express');
var timeStamp = require('../timeStamp');

var router = express.Router();

/* GET home page. */
router.get('/:date', function(req, res, next) {
  var input = req.params.date;
  console.log(input);
  
  var date = timeStamp(input);
  console.log();
  console.log(date);
  res.json(date);
});

module.exports = router;
