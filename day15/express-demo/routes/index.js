var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.json({
    status: 0,
    result: [
      {
        name: 'liuqing',
        sex: 0
      },
      {
        name: 'shanqiang',
        sex: 1
      }
    ]
  })
});

module.exports = router;
