const User = require('../models/user');
const jwt = require('jsonwebtoken');
const cfg = require('../config')
exports.signup = (req, res) => {
    const user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    }

   User.findOne({username: user.username}).then(result => {
       if(result)
           return res.send({message: 'User with the same name exist'}).status(409);
       User(user).save().then(signuped => {
           res.send({message: 'Sign up is done', token}).status(200);
       })
   })
}

exports.signin = (req, res) => {
    User.findOne({username: req.body.username, password: req.body.password}).then( result => {
        console.log(result)
        const token = jwt.sign({user_id: result._id}, cfg.secretKey)
        res.send({token}).status(200);
    }).catch(err => {
        res.send({message: 'Server error'}).status(500);
    })
}