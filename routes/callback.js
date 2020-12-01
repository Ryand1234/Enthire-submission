const router = require('express').Router();
const jwt = require('jsonwebtoken')
const passport = require('passport')

router.get('/', passport.authenticate('google', {
    failureRedirect: '/fail'
  }), async(req, res)=>{
    const token = await jwt.sign(
      { id: req.user._id, email: req.user.email },
      process.env.JWT_SECRET,
      { expiresIn: '2d' }
    );
    res.json({ success: true, token: `Bearer ${token}` });
})

module.exports = router;