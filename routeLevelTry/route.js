const express=require('express');
const router=express.Router();
router.use((req, res, next) => {
    console.log("router 1");
    next();
  })
  router.get('/login', (req, res) => {
    res.send('login succesfull');
  })
  router.get('/logout', (req, res) => {
    res.send('logout');
  })
  
  module.exports = router;