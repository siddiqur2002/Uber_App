const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController= require('../controllers/user.controller');


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

module.exports = router;