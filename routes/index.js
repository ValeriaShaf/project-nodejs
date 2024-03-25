//Valeria Shafran 320954258
//Einav Kogut 318902285

var express = require('express');
var router = express.Router();

//get the home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Node.js Project Valeria Shafran & Einav Kogut' });
});

module.exports = router;
