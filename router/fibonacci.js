const express = require('express');

const fibonacciController = require('../controllers/fibonacciController');

const router = express.Router();


router.get('/fibonacci/:index', fibonacciController.getFibonacci);

module.exports = router;