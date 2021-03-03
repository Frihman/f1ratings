var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var rateDriversRouter = require('./routes/rateDrivers');
var driversRouter = require('./routes/drivers');
var racesRouter = require('./routes/races');
var raceSchema = require('./raceSchema');

var app = express();

mongoose.connect('mongodb+srv://admin:admin@f1ratingscluster.np960.mongodb.net/DB?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('connected', () => {
  console.log('MongoDB is connected');
  /**
  var Race = mongoose.model('Race', raceSchema);
  Race.create({
    Name: 'Bahrain Grand Prix',
    Country: 'Bahrain',
    City: 'Sakhir',
    Circuit: 'Sakhir International Circuit',
    StartTime: '2020-03-28T16:00:00Z',
    Round: '1',
    Img: 'images/Bahrain.png',
    Ratings: [
      {Driver: '14', Rating: '6', DOTD: 'false'},
      {Driver: '77', Rating: '5', DOTD: 'false'},
      {Driver: '10', Rating: '7', DOTD: 'false'},
      {Driver: '99', Rating: '5', DOTD: 'false'},
      {Driver: '44', Rating: '8', DOTD: 'false'},
      {Driver: '6', Rating: '6', DOTD: 'false'},
      {Driver: '16', Rating: '9', DOTD: 'true'},
      {Driver: '9', Rating: '5', DOTD: 'false'},
      {Driver: '4', Rating: '7', DOTD: 'false'},
      {Driver: '31', Rating: '8', DOTD: 'false'},
      {Driver: '11', Rating: '7', DOTD: 'false'},
      {Driver: '7', Rating: '6', DOTD: 'false'},
      {Driver: '3', Rating: '8', DOTD: 'false'},
      {Driver: '63', Rating: '5', DOTD: 'false'},
      {Driver: '55', Rating: '5', DOTD: 'false'},
      {Driver: '47', Rating: '7', DOTD: 'false'},
      {Driver: '18', Rating: '6', DOTD: 'false'},
      {Driver: '22', Rating: '9', DOTD: 'false'},
      {Driver: '33', Rating: '8', DOTD: 'false'},
      {Driver: '5', Rating: '6', DOTD: 'false'},
    ]
  });
  */
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/rate_drivers', rateDriversRouter);
app.use('/drivers', driversRouter);
app.use('/races', racesRouter);

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
