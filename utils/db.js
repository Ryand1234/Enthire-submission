const mysql = require('mysql')

//Creating MySql Connection
var SqlConnection = function(){
	var mysqlConnection = mysql.createConnection({
		host: process.env.HOST,
		user: process.env.USER,
		password: process.env.PASSWORD,
		database: 'user',
		multipleStatements: true
	})
	return mysqlConnection;
}

module.exports = SqlConnection;