const { wsignup, wlogin } = require('./../Controllers/WauthControllers');
const {signupValidation,loginValidation}=require('../Middlewares/AuthValidation');
const router = require('express').Router();

router.get('/login', (req, res) => {
    res.send('Login page');
});

router.post('/wsignup',signupValidation, wsignup);
router.post('/wlogin',loginValidation, wlogin);

module.exports = router;