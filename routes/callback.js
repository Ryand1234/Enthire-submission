const router = require('express').Router();
const jwt = require('jsonwebtoken')
const passport = require('passport')

router.get('/', passport.authenticate('google', {
    failureRedirect: '/fail'
  }), async(req, res)=>{
  	//Creating name from first and last name
  	const name = req.user.first_name+ ' ' + req.user.last_name;

  	//Creating JWT Token from id, email and name
    const token = await jwt.sign(
      { id: req.user.id, email: req.user.email, name: name },
      process.env.JWT_SECRET,
      { expiresIn: '2d' }
    );
    res.status(200).json({ success: true, token: `Bearer ${token}` });
})

module.exports = router;