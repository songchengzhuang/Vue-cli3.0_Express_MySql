// var createError = require('http-errors');
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var logger = require("morgan");
var ejs = require("ejs");
var cors = require("cors");

var indexRouter = require("./service/routes/index");
var usersRouter = require("./service/routes/users");

var app = express();

// 跨域请求.注意，这个代码一定要，写在注册路由的前面。此模块也可以，当做路由中间件，指定某一个，或者某一部分路由，拥有跨域功能。
app.use(cors());
// 跨域请求
// app.all('*', (req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "http://localhost:8080"); //为了跨域保持session，所以指定地址，不能用*
//   res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   res.header('Access-Control-Allow-Credentials', true);
//   next();
// });

// view engine setup
app.set("views", path.join(__dirname, "/service/views"));
app.engine(".html", ejs.__express);
app.set("view engine", "html");

app.use(logger("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(cookieParser("An"));
app.use(
  session({
    secret: "an",
    resave: false,
    saveUninitialized: true
  })
);

app.use(express.static(path.join(__dirname, "/service/dist")));
app.use(express.static(path.join(__dirname, "/service/views")));

app.use("/", indexRouter);
app.use("/Interface", usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).send("资源找不到呢，你懂得!");
  next();
});

app.use(function(err, req, res) {
  res.status(500).send("对不起，服务器脑子进水啦！");
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
