var express = require('express');
var router = express.Router();
const UserModel = require('../models/user')

/* GET users listing. */
router.post('/register', async function(req, res, next) {
  const isUsed = await UserModel.findOne({username:req.body.username});
  if(!isUsed){
    const newuser = new UserModel(req.body);
    newuser.save()
    res.redirect('/')
  }else{
    res.send("used username")
  }

});

router.post('/login', async function(req, res, next) {
  console.log(req.body)
  const result = await UserModel.findOne({username:req.body.username,password:req.body.password});
  console.log(result)
  if(result){
    req.session.loginData = result;
    res.redirect('/')
  }else{
    res.redirect('/profile')
  }

});

module.exports = router;
