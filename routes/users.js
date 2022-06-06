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

  router.get('/json-list', async function(req, res, next){
    const users = require('../services/languages'); 
    try{
      res.json(await users.getUser(req.query.page));
    }
    catch(err){
        console.error('Error' + err.message);
        next(err);
    }
});


module.exports = router;
