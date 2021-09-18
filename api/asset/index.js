var express = require('express');
var router = express.Router();
var Asset = require('./asset.model');
var Customer = require('../customer/customer.model');



// Create New Asset
router.post('/new', function (req, res) {
                    let asset = new Asset(req.body);
                    asset.save()
                    .then(asset => {
                        res.status(200).json({'asset': 'Added Successfuly'});
                        console.log(asset, 'created a new aset');
                    })
                // }
            });

// Asset List
router.get('/list', function (req, res) {
    Asset.find((err, asset) => {
        if (err)
        console.log(err);
        else
        res.json(asset);
    });
    console.log('All Asset Search');
});

// get one Asset by Id
router.get('/:id', function (req, res) {
    console.log(req.params,'/:id hit asset id at server');
    var asset = req.params;
    console.log(asset.id, 'asset requested at server')
        Asset.findById({ _id: asset.id}, function(err, foundAsset) {
            if(err) {
            console.log(err,'err')
             res.send(err);
            }
            else {
                console.log(foundAsset._id,'Found Asset')
                res.send({
                    data : foundAsset,
                    status : 200
                })
            }
            });
    });
    
// get one Asset by title
router.get('/one/:id', function (req, res) {
    console.log(req.params,'item hit asset id at server');
    var asset = req.params;
    console.log(asset.id, 'asset requested at server')
        Asset.find({ title: asset.id}, function(err, foundAsset) {
            if(err) {
            console.log(err,'err')
             res.send(err);
            }
            else {
                console.log(foundAsset._id,'Found Asset')
                res.send({
                    data : foundAsset,
                    status : 200
                })
            }
            });
    });
    
// get one Asset by Type
router.get('/type/:id', function (req, res) {
    console.log(req.params,'item hit asset id at server');
    var asset = req.params;
    console.log(asset.id, 'asset requested at server')
        Asset.find({ assetType: asset.id}, function(err, foundAsset) {
            if(err) {
            console.log(err,'err')
             res.send(err);
            }
            else {
                console.log(foundAsset._id,'Found Asset')
                res.send({
                    data : foundAsset,
                    status : 200
                })
            }
            });
    });

// get one Asset by Owner
router.get('/owner/:id', function (req, res) {
    console.log(req.params,'owner hit asset at server');
    var asset = req.params;
    console.log(asset.id, 'asset requested at server')
        Asset.find({ "owner.name": asset.id}, function(err, foundAsset) {
            if(err) {
            console.log(err,'err')
             res.send(err);
            }
            else {
                console.log(foundAsset._id,'Found Asset')
                res.send({
                    data : foundAsset,
                    status : 200
                })
            }
            });
    });
    
    // Update or Edit Asset
    router.put('/update/:id', function(req, res){
        var asset = req.body;
        console.log(asset, 'update at server')
            Asset.findById(asset._id, function(err, foundAsset) {
                if(err)
                res.send(err) 
                else
                Asset.update(asset, function(err, count){
                    if(err) res.send(err) 
                else
                    res.send (count);
                });
        });
        });
 
    // Delete One Asset
    router.get('/delete/:id', function(req, res) {
        Asset.remove({'_id': req.params.id}, function(err, result) {
            if (err) {
                console.log(err);
                res.send('something wrong');
            }
            res.json(result);
        })
    });

module.exports = router;
