var express = require('express');
var router = express.Router();
var userController = require('../controllers/controllerUser');

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get("/", userController.listUser);
module.exports = router;