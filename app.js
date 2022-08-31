const express = require("express");
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const cors = require('cors');
const bodyparser = require('body-parser');
const helmet = require('helmet');

const morgan = require('morgan');

app.use(helmet())
app.use(morgan())

app.use(bodyparser.urlencoded({
  extended: false
}))


app.use(bodyparser.urlencoded({
  extended: false
}));

const DB = 'mongodb://localhost:27017/Financial-Management-System';

const connectDb = async() => {

await mongoose.connect(DB, { useNewUrlParser: true })
.then(() => {
  console.log(`Database connected successfully ${DB}`)
})
.catch(err => { 
  console.log(`Unable to connect with the database ${err}`)
});

}

connectDb();

// Json Body Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())

// Setting up static directories
app.use(express.static('public'));
// Bring in the Users route
// app.use(require('./routes'));

module.exports = app;
















































































































// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;
