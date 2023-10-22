var express = require('express');
var router = express.Router();

// responds to localhost/users request
router.get('/', function(req, res, next) {
  res.send('respond with deez');
});

// responds to localhost/users/wow request
// router.get('/wow', function(req, res, next) {
//   res.send('respond with nuts');
// });

module.exports = router;
