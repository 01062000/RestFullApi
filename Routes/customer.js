const express = require("express") ;
const bodyparser = require("body-parser");
const customerModel = require("../model/customers.model");
const router = express.Router();


// create a new customer
router.post('/customer', (req,res) => {
    if(!req.body){
        return res.status(400).send("Request body is missing!!");
    }

    if(!req.body._id){
        res.status(500).send("please enter id");
    }

    let model = new customerModel(req.body);
    model.save()
        .then(doc => {
            if(!doc || doc.length === 0) {
                return res.status(500).send(doc);
            }
            res.status(200).send(doc);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

// get a customer
router.get('/customer', (req,res) => {
    if(!req.body){
        return res.status(400).send("Request body is missing!!");
    }
   
    if(!req.body._id){
        res.status(500).send("please enter id");
    }

    customerModel.findOne({
        _id : req.body._id
    })
        .then(doc => {
            res.status(200).send(doc);
        })
        .catch(err => {
            res.status(500).send(err);
        })
});

// update customer
router.put('/customer', (req,res) => {
    if(!req.body){
        return res.status(400).send("Request body is missing!!");
    }
   
    if(!req.body._id){
        res.status(500).send("please enter id");
    }

    customerModel.findOneAndUpdate({
        _id : req.body._id
    }, req.body, {
        new : true
    })
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

// delete a customer
router.delete('/customer', (req,res) => {
    if(!req.body){
        return res.status(400).send("Request body is missing!!");
    }
   
    if(!req.body._id){
        res.status(500).send("please enter id");
    }

    customerModel.findOneAndRemove({
        _id : req.body._id
    })
        .then(doc => {
            res.status(200).send(doc);
        })
        .catch(err => {
            res.status(500).send(doc);
        })
});

router.get('/error', (req,res) => {
    throw new Error("This is a forced error");
});

module.exports = router;
