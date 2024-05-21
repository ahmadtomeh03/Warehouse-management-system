var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('./modules/customers/middelware/customers.middleware');
var cors=require('cors')


const customerRouter=require('./modules/customers/routes/customers.routes')
const employeeRouter=require('./modules/employee/routes/employee.routes')
const authenticationAPI=require('./modules/Main/Routes/authentication.routes')
const mechanismsRouter=require('./modules/mechanisms/routes/mechanisms.routes')
const wareHouseRouter=require('./modules/warehouse_m/routes/warehouse_m.routes')
const reservationRouter=require('./modules/reservation/routes/reservation.routes')
const reportRouter=require('./modules/financial_reports/routes/financial_reports.routes')

var app = express();
app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(logger);
app.use('',employeeRouter)
app.use('',customerRouter)
app.use('',authenticationAPI)
app.use('',mechanismsRouter)
app.use('',wareHouseRouter)
app.use('',reservationRouter)
app.use('',reportRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
