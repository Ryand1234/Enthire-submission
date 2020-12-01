const sqlConnection = require('./utils/db')
const express = require('express')
const bodyparser = require('body-parser')
require('dotenv').config()
const passport = require('passport')
var createError = require('http-errors')
var pass = require('./lib/passport')

var app = express()

//Configuring express server
pass(passport)
app.use(bodyparser.json())
app.use(express.json())
app.use(passport.initialize())
app.use(passport.session())
app.use(express.urlencoded({ extended: false }));

var MySqlConnection = sqlConnection();
MySqlConnection.connect((err)=> {
	if(!err)
		console.log('Connection Established Successfully');
	else
		console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
});

const homeRoute = require('./routes/home')
const authRoute = require('./routes/auth')
const callbackRoute = require('./routes/callback')

app.use('/fail', (req, res)=>{
  res.send('<h1>Failure</h1>')
})

app.use('/home', homeRoute)
app.use('/auth/google',authRoute)
app.use('/auth/google/callback',callbackRoute
)

app.listen(3000||process.env.PORT, ()=>{
	console.log(`Server is listening at port ${3000||process.env.PORT}`)
})

//Error Handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log("Message: ",err.message);
  console.log("ERROR: ",res.locals.error);
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});