const sqlConnection = require('../utils/db')
var MySqlConnection = sqlConnection();

const getUserById = function(id) {
	var mySql = `SELECT * FROM user WHERE id = ${id}`;
	MySqlConnection.query(mySql, (err, row)=>{
		console.log("R: ", row)
	})
}

module.exports = getUserById;