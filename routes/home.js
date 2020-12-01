const mySqlConnection = require('../utils/db');
const router = require('express').Router();
const userAuthorize = require('../middleware/middleware');

router.get('/home', userAuthorize, async(req, res)=>{
	req.status(200);
	req.json({user: req.user});
})

module.exports = router;