const express = require('express');
const router = express.Router();
const cost = require('../models/costs'); // Importing the Cost model
const mongoose = require('mongoose');

router.get('/costs',


    function(req,res,next)

    {
        Cost.find({}).then(
            function(cost){
                res.send(cost);
            }  ).catch(next);
    }



);

router.post('/costs',


    function(req,res,next){
        const promise1 = cost.create(req.body);
        const promise2 = promise1.then(

            function(cost){
                res.send(cost);
            }

        );
        promise2.catch(next);
    }




);

module.exports = router;
