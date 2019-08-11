const express = require('express');
const router = express.Router();
const Favorate = require('../models/favorate');

router.post('/addFavorate', (req,res)=>{

    Favorate.collection.insertOne(req.body,(err,document)=>{
        if(err)
            console.log(err)
        else
            res.json(document);
    });

});
router.post('/getAllFavoratesByUser',(req,res)=>{
    Favorate.find(req.body).exec((err,document)=>{
        if(err)
        {
            res.statusCode = 500;
            console.log(err);
            res.json(err);
        }else{
            res.json(document);
        }
    })
})
router.post('/deleteById',(req,res)=>{
    Favorate.deleteOne(req.body,(err)=>{
        if(err)
        {
            console.log(err);
            res.statusCode = 404;
            res.statusMessage = "Data Not Found";
        }          
        else
        {
            res.statusCode = 200;
            res.json("data deleted successfully")
        }
    })
})

module.exports = router;