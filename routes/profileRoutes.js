const express = require('express');
const app = express(); //instance of express created
const router = express.Router();
const bodyParser = require("body-parser")
const bcrypt = require('bcrypt');
const User = require('../schemas/UserSchema');


router.get("/", (req,res,next)=> {

    var payload = {
        pageTitle: req.session.user.username,
        userLoggedIn: req.session.user,
        userLoggedInJs: JSON.stringify(req.session.user),
        profileUser: req.session.user
    }

    res.status(200).render("profilePage",payload);
})

async function getPayLoad(username, userLoggedIn) {
    var user = await User.findOne({ username: username })

    //check for null 
    if (user == null) {
        user = await User.findById(username)
        if(user == null){
            return {
                title: 'user not found',
                userLoggedIn: userLoggedIn,
                userLoggedInJs: JSON.stringify(userLoggedIn)
            }
        }
    }
    return {
        title: user.username,
        userLoggedIn: userLoggedIn,
        userLoggedInJs: JSON.stringify(userLoggedIn),
        profileUser: user
    }
}

module.exports = router;