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
var ordersRouter = require("./routes/orders");

var employeesRouter = require("./routes/employees");
var addproductsRouter = require("./routes/addproducts");
var inventoryRouter = require("./routes/inventory");

var adminemployeesRouter = require("./routes/adminemployees");
var adminmanagersRouter = require("./routes/adminmanagers");
var admincustomersRouter = require("./routes/admincustomers");

// view engine setup
app.set("views", path.join("views"));
app.set("view engine", "jade");

// enable communication between different domains
var corsOptions = {
  origin: ["http://localhost:3000", "https://jbold-frontend.onrender.com"],
  methods: "GET,POST,DELETE, PUT",
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
app.use("/orders", ordersRouter);
app.use("/employees", employeesRouter); /*more localhost:3001/___ routes set up */
app.use("/addproducts", addproductsRouter);
app.use("/inventory", inventoryRouter); 
app.use("/adminemployees", adminemployeesRouter);
app.use("/adminmanagers", adminmanagersRouter);
app.use("/admincustomers", admincustomersRouter);


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

module.exports = app;
