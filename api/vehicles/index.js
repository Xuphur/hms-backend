var express = require('express');
var router = express.Router();

var Vehicle = require('./vehicles.model');

// CRUD functions and Routes

// Find All Issues in db ()
router.get('/list', function (req, res) {
    Vehicle.find((err, vehicles) => {
        if (err)
        console.log(err);
        else
        res.json(vehicles);
    });
    console.log("All Vehicles Search");
});

// Add New Issue
router.post('/new', function (req, res) {
    console.log('new vehicle')
    let vehicle = new Vehicle(req.body);
    vehicle.save()
    .then(vehicle => {
        res.status(200).json({'vehicle': 'Added Successfuly'});
    })
    .catch(err => {
        res.status(400).send('Faild to create new record');
    });
console.log("Created New Vehicle");
});

// Update or Edit Issue
router.put('/update/:id', function(req, res){
var Vehicle = req.body;
console.log(Vehicle, 'update at server')
    Vehicle.findById(vehicle._id, function(err, foundVehicle) {
        if(err)
        res.send(err) 
        else
        foundVehicle.update(req.body, function(err, count){
        if(err) res.send(err) 
        else
        res.send (count);
        });
});
});

// Delete One Issue
router.get('/delete/:id', function(req, res) {
    Vehicle.remove({"_id": req.params.id}, function(err, result) {
        if (err) {
            console.log(err);
            res.send('something wrong');
        }
        res.json(result);
    })
});

function isLoggedIn( req, res, next){
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect('/user/profile');
}

function notLoggedIn( req, res, next){
	if (!req.isAuthenticated()) {
		return next();
	}
	res.redirect('/');
}

module.exports = router;

