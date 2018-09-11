/**
 * node后台 多页面切换 路由
 */
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/login", function(req, res) {
  res.render("Login");
});

router.get("/loginList", function(req, res) {
  res.render("LoginList.html");
});
module.exports = router;
