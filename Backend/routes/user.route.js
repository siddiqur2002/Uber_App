const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController= require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');

//user register and login route setup for data posting....

router.post('/register', [
    body('email').isEmail().withMessage('Invalid email'),
    body('fullName.firstName').isLength({ min: 3 }).withMessage('first name must be at least 3 character long'),
    body('password').isLength({ min: 5 }).withMessage('Password must be 5 character long'),
], 
    userController.registerUser
)

router.post('/login', [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 5 }).withMessage('Password must be 5 character long')
],
    userController.loginUser
)

router.get('/profile', authMiddleware.authUser, userController.getUserProfile)

router.get('/logout', authMiddleware.authUser, userController.logoutUser)


module.exports = router;