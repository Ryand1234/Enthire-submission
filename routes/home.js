const mySqlConnection = require('../utils/db');
const router = require('express').Router();
const userAuthorize = require('../middleware/middleware');

router.get('/', userAuthorize, async(req, res)=>{
	res.status(200).json({user: req.user});
})

module.exports = router;