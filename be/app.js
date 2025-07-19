require("./utils/database");
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const mentorsRouter = require("./routes/mentors");
const sessionsRouter = require("./routes/sessions");
const paymentRouter = require("./routes/payment");
const userRouter = require("./routes/users");
const lessonRouter = require("./routes/lessons");
const webinarRouter = require("./routes/webinars");
const menteeRouter = require("./routes/menteee");

var app = express();

app.use(logger("dev"));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/mentors", mentorsRouter);
app.use("/api/sessions", sessionsRouter);
app.use("/api", paymentRouter);
app.use("/api", userRouter);
app.use("/api/lessons", lessonRouter);
app.use("/api/webinars", webinarRouter);
app.use("/api/mentees", menteeRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send("Page not found");
});

module.exports = app;
