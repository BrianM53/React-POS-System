var createError = require("http-errors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var express = require("express");
var app = express();

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var productsRouter = require("./routes/products");
var reportsRouter = require("./routes/reports");
var employeesRouter = require("./routes/employees");
var customersRouter = require("./routes/customers");

// view engine setup
app.set("views", path.join("views"));
app.set("view engine", "jade");

// enable communication between different domains
var corsOptions = {
  origin: ["http://localhost:3000", "https://jbold-frontend.onrender.com"],
  methods: "GET,POST",
};
app.use(cors(corsOptions));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// set up api routing
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/reports", reportsRouter);
app.use("/employees", employeesRouter);
app.use("/customers", employeesRouter);

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
  res.render("error");
});

// get credential response of Google sign in success
// app.post('/users', (req, res) => {
//   const credentialResponse = req.body;

//   // Now you can use the credentialResponse as needed in your backend
//   // For example, you can save it to a database, perform user authentication, etc.

//   console.log('Received credentialResponse in the backend:', credentialResponse);
//   res.send('Credential received successfully');
// });

app.post("/send-message", (req, res) => {
  const message = req.body.message;
  console.log("Received message from the frontend:", message);
  // You can now process the message or perform any other actions you need.
  res.send("Message received successfully");
});

module.exports = app;
