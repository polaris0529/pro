const { User } = require("../models");
var TestContoller = require("../service/TestContoller");
const testContoller = new TestContoller();

var EventEmitter = require("events");
var userEventEmitter = new EventEmitter();


var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/home", function (req, res, next) {
  res.render("index", { title: "home" });
});

router.get("/write", function (req, res, next) {
  res.render("write");
});

router.get("/test", async function (req, res, next) {
  userEventEmitter.on("call", function () {
    console.log("이벤트 콜 ");
  });
  userEventEmitter.emit("call");
  res.send("sucess");
});

router.get("/session", async function (req, res, next) {
  var result;
  result = { key : value };
  res.send("sucess");
});

router.get("/class", async function (req, res, next) {

  var result;
  
  try {
    result = testContoller.print('class');
    res.send(result);
  } catch (error) {
    res.send(error);  
  }

  
  
});

module.exports = router;
