var express = require('express');
var router = express.Router();
var Reciept = require('./reciept.model');

// Create New Reciept
router.post('/new', function (req, res) {
    console.log('new reciept')
    let reciept = new Reciept(req.body);
    reciept.save()
    .then(reciept => {
        res.status(200).json({'reciept': 'Added Successfuly'});
    })
    .catch(err => {
        res.status(400).send('Faild to create new record');
    });
console.log("Create New");
});

// Reciept All
router.get('/all', function (req, res) {
    Reciept.find((err, reciept) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send({
                status : 200,
                data : reciept
        });
    }
    console.log('All Reciept Search');
});
});

// Reciept List
router.get('/list/:id', function (req, res) {
    console.log(req.params,'in reciept router');
    var list = req.params;
    console.log(list, 'ledger at server')
        Reciept.find({contractId: list.id}, function(err, foundReciept) {
            if(err) {
            console.log(err,'this is err')
             res.send(err);
            }
            else {
                console.log('found all matching reciepts')
                res.send({
                    status : 200,
                    data : foundReciept
                })
            }
            });        
    });

// Update or Edit Issue
router.put('/update/:id', function(req, res){
    var reciept = req.body;
    console.log(reciept, 'update at server')
        Reciept.findById(reciept._id, function(err, foundReciept) {
            if(err)
            res.send(err) 
            else
            foundReciept.update(req.body, function(err, count){
                if(err) res.send(err) 
            else
                res.send (count);
            });
    });
    });
    
    // Delete One Issue
    router.get('/delete/:id', function(req, res) {
        Reciept.remove({"_id": req.params.id}, function(err, result) {
            if (err) {
                console.log(err);
                res.send('something wrong');
            }
            res.json(result);
        })
    });

module.exports = router;
