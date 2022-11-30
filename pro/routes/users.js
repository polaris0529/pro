var express = require('express');
var router = express.Router();
var path = require('path');
const { sequelize } = require(path.join(__dirname,'../models'));
const { test } = require(path.join(__dirname,'../models'));

/* GET users listing. */
router.get('/', function(req, res, next) {

  // const result = test.create({
  //   Name : 'test'
  // })
  
  res.send();
});

module.exports = router;
