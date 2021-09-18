var express = require('express');
var router = express.Router();
var Customer = require('./customer.model');

router.get('/find/:customer', function (req, res) {
    console.log(req.params.customer,'in find customer router');
    var list = req.params.customer;
    console.log(list, 'ledger at server')
        Customer.find({'customer.name': list}, function(err, foundCustomer) {
            if(err) {
            console.log(err,'this is err')
             res.send(err);
            }
            else {
                console.log(foundCustomer, 'found all matching Customer')
                res.send({
                    status : 200,
                    data : foundCustomer
                })
            }
            });
    });

// Create New Contract
router.post('/new', function (req, res) {
    console.log('new customer')
    let customer = new Customer(req.body);
    customer.save()
    .then(customer => {
        res.status(200).json({'customer': 'Added Successfuly'});
    })
    .catch(err => {
        res.status(400).send('Faild to create new record');
    });
console.log("Created New");
});

// Contract List
router.get('/list', function (req, res) {
    Customer.find((err, customer) => {
        if (err)
        console.log(err);
        else
        res.json(customer);
    });
    console.log("All Customer Search");
});

// get customer by Id
router.get('/:id', function (req, res) {
    console.log(req.params,'/:id hit customer id at server');
    var customer = req.params;
    console.log(customer.id, 'customer requested at server')
        Customer.findById({ _id: customer.id}, function(err, foundCustomer) {
            if(err) {
            console.log(err,'err')
             res.send(err);
            }
            else {
                console.log(foundCustomer._id,'Found Customer')
                res.send({
                    data : foundCustomer,
                    status : 200
                })
            }
            });
    });
// get customer by Name
router.get('/name/:id', function (req, res) {
    console.log(req.params,'/:id hit customer id at server');
    var customer = req.params;
    console.log(customer.id, 'customer requested at server')
        Customer.find({ "customer.name": customer.id}, function(err, foundCustomer) {
            if(err) {
            console.log(err,'err')
             res.send(err);
            }
            else {
                console.log(foundCustomer._id,'Found Customer')
                res.send({
                    data : foundCustomer,
                    status : 200
                })
            }
            });
    });
// get customer by CNIC
router.get('/cnic/:id', function (req, res) {
    console.log(req.params,'/:cnic hit customer id at server');
    var customer = req.params;
    console.log(customer.id, 'customer requested at server')
        Customer.find({ "customer.cnic": customer.id}, function(err, foundCustomer) {
            if(err) {
            console.log(err,'err')
             res.send(err);
            }
            else {
                console.log(foundCustomer._id,'Found Customer')
                res.send({
                    data : foundCustomer,
                    status : 200
                })
            }
            });
    });
// get customer by Mobile
router.get('/mobile/:id', function (req, res) {
    console.log(req.params,'/:mobile hit customer id at server');
    var customer = req.params;
    console.log(customer.id, 'customer requested at server')
        Customer.find({ "customer.mobile1": customer.id}, function(err, foundCustomer) {
            if(err) {
            console.log(err,'err')
             res.send(err);
            }
            else {
                console.log(foundCustomer._id,'Found Customer')
                res.send({
                    data : foundCustomer,
                    status : 200
                })
            }
            });
    });

// Update or Edit Issue
router.put('/update/:id', function(req, res){
    var customer = req.body;
    console.log(customer, 'update at server')
        Customer.findById(customer._id, function(err, foundCustomer) {
            if(err)
            res.send(err) 
            else
            foundCustomer.update(req.body, function(err, count){
                if(err) res.send(err) 
            else
                res.send (count);
            });
    });
    });
    
    // Delete One Issue
    router.get('/delete/:id', function(req, res) {
        Customer.remove({"_id": req.params.id}, function(err, result) {
            if (err) {
                console.log(err);
                res.send('something wrong');
            }
            res.json(result);
        })
    });

module.exports = router;
