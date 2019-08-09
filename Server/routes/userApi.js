const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/validateUser', (req,res)=>{
    console.log(req.body);
User.find(req.body).exec(async(err,document)=>{
    if(err)
        {
            console.log(err);
    
        res.json(err);
        }

    else    
    {
        let user = document;
        if(user.length <= 0)
        {
            res.statusCode = 500;
            res.statusMessage = "User Not Found";
            res.send(user);
        }else{
            user[0].password =await null;
            res.json(user);
        }
        
    }
});

})

module.exports = router;