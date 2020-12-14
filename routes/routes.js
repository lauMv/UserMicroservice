const router = require('express').Router();  
const userService = require('./microservice/user')
  
router.use('/user', userService);

module.exports = router;