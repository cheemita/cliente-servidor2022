var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.render("list", { title: "some text"});
});

router.get('/permissions', function(req, res, next) {
  res.render("permissions");
});

module.exports = router;
