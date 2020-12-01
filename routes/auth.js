const router = require('express').Router();
const passport = require('passport')

router.get('/', passport.authenticate('google', {
    scope: [
      'profile', 'email'
    ]
  })
)

/*'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email'*/

module.exports = router;