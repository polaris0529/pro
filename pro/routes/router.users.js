const { User } = require("../models");
const { Op } = require("sequelize");

var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("user/");
});

//users/info
router.get("/info", async function (req, res, next) {
  let userName;
  userName = req.query.username || "none";
  //const result =  await User.findAll({});
  const result = await User.findAll({
    attribute: ["name", "age"],
    where: {},
    //order : [['age' ,'desc']]
  });
  res.send(result);
});

router.get("/update", function (req, res, next) {
  res.render("update");
});

router.get("/create", function (req, res, next) {
  res.render("create");
});

router.post("/userInfoUpdate", async function (req, res, next) {
  console.log(req.body);
  console.log(req.body);

  try {
    const user = await User.update(
      {
        comment: req.body.comment,
      },
      {
        where: { name : req.body.name },
      }
    );


    //return [ update count ]
  } catch {
    res.send("fail");  
  }
  res.send("success");
});

router.post("/userInfoInsert", async function (req, res, next) {
  
  console.log('userInfoInsert');
  console.log(req.body);

  let user;
  try {

    user = await User.create({
      'name' : req.body.name,
      'comment'  : req.body.comment,
      'age'  : req.body.age,
      'married'  : req.body.married
    })

  } catch {
    console.log(user);
    return res.send("fail");  
  }
  console.log(user);
  return res.send("success");
});

module.exports = router;
