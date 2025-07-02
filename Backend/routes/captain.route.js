const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const captainController = require('../controllers/captain.controller');
const authMiddleware = require('../middlewares/auth.middleware');



router.post('/register', [

    body('email').isEmail().withMessage('Invalid email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('first name must be at least 3 character long'),
    body('password').isLength({ min: 5 }).withMessage('Password must be 5 character long'),

    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be 3 character long'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate must be 3 character long'),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage('Capacity must be at least 1 or more'),
    body('vehicle.vehicleType').isIn([ 'car', 'motorcycle', 'auto' ]).withMessage('Invalid vehicle'),

],
   captainController.registerCaptain 
);


router.post('/login', [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 5 }).withMessage('Password must be 5 character long'),
], 
    captainController.loginCaptain
);


router.get('/profile', authMiddleware.authCaptain, captainController.getCaptainProfile);

router.get('/logout', authMiddleware.authCaptain, captainController.logoutCaptain);


module.exports = router;