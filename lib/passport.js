const passportGoogle = require('passport-google-oauth').OAuth2Strategy
const sqlConnection = require('../utils/db')

//Defining MYSQL connection
var MySqlConnection = sqlConnection();

module.exports = function(passport) {
	passport.serializeUser(function (user, done) {
	  done(null, user);
	});

	passport.deserializeUser(function (user, done) {
	  done(null, user);
	});

	//Defining Google Strategy
	passport.use(new passportGoogle(
		{
			clientID: `${process.env.GOOGLE_CLIENT_ID}`,
		    clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
		    callbackURL: `${process.env.SERVER_URI}/auth/google/callback`
		},
		async(accessToken, refreshToken, profile, done)=>{
			//Checking if user already exist
			var mySql = `SELECT * FROM user WHERE id = ${profile.id}`;
			MySqlConnection.query(mySql, (err, row)=>{
				if(err){
					const userData = {
						id: profile.id,
						email: profile.emails[0].value,
						verified: profile.emails[0].verified,
						first_name: profile.name.givenName,
						last_name: profile.name.familyName
					}
					//Creating new User
					MySqlConnection.query('INSERT INTO user SET ?', userData, (err, sqlRes)=>{
						if(err){
							 return done(null, null)
						} else {
							return done(null, userData);
						}
					})
					
				}
				else{
					done(null, row[0]);
				}
			})
			
		}
	));

}
