var express = require('express');
var router = express.Router();
var Driver = require('./driver.model');
// var csrf = require('csurf');
// var passport = require('passport');

// var Order = require('../models/order');
// var Cart = require('../models/cart');
// var Product = require('../models/product');

// var csrfProtection = csrf();
// router.use(csrfProtection);

router.use('', function(req, res, next){
	next();
});

// Sign In User
router.get('/signin', function(req, res){
    var driver = req.body;
    console.log(driver, 'login User at server')
        Driver.findOne({username : driver.username}, function(err, gotdriver) {
            if(err){
            res.send(err)
            }
            console.log("got", driver);
            if(gotdriver){
                console.log("Driver Already Exist", driver);
            res.send('Driver Already Exist')}
            else {
                res.render('/list')
            console.log("Job Done");
            };
    });
});


// router.get('/signin', function(req, res, next){
// 		var messages = req.flash('error');
//         res.render('/signin1', {
//             csrfToken: req.csrfToken(),
//             messages: messages,
//             hasErrors: messages.length > 0
//         });
// });

// router.get('/signin', function(req, username, password, done) {
	// req.checkBody('username', 'Invalid username').notEmpty();
	// req.checkBody('password', 'Invalid password').notEmpty();
	// var errors = req.validationErrors();
	// if (errors) {
	// 	console.log(username, password, errors)
	// 		var messages = [];
	// 		errors.forEach(function (error){
	// 			messages.push(error.msg);
	// 		});
	// 		return done(null, false, req.flash('error', messages))
	// }
// 	User.findOne({'username': username}, function(err, user) {
// 		if (err) {
// 			return done(err);
// 		}
// 		if (!user) {
// 			return done(null, false, {message: 'No User Found'});
// 		}
// 		if (!user.validPassword(password)) {
// 			return done(null, false, {message: 'Wrong Password'});
// 		}
// 		return done(null, user);
// 	});
// 		console.log(user.username, 'is logged in');
// });

// passport.authenticate('local.signin', {
//     failureRedirect: '/signin',
//     successRedirect: '/user/list',
// 	failureFlash: true
// }), function(
//     err, next
//     // req, res, next
// ) {
//     if (err){
//         res.send('Sign in Error')
//     }    
//     else {
// 		res.redirect('/issues/list');
// 	}
// });

// Sign Up New User
router.post('/signup', function(req, res){
    var driver = req.body;
    console.log(driver, 'New Driver at server')
        Driver.findOne({username : driver.username}, function(err, gotdriver) {
            if(err){
            res.send(err)
            }
            console.log("got", driver);
            if(gotdriver){
                console.log("driver Already Exist", driver);
            res.send('Driver Already Exist')}
            else {
                    let driver = new Driver(req.body);
                    driver.save(function (err, data) {
                        if (err) {
                            res.send('Can not Save Driver');
                        }
                        res.jsonp({success : true});
                    });
            console.log("New Driver Created");
            };
    });
});

module.exports = router;

// router.get('/signup', function(req, res, next){
// 	var messages = req.flash('error');
// 	res.render('/user/signup', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
// }); 

// router.post('/signup', passport.authenticate('local.signup', {
// 	failureRedirect: '/user/signup',
// 	failureFlash: true
// }), function(req, res, next){
// 	if (req.session.oldUrl){
// 		var oldUrl = req.session.oldUrl;
// 		req.session.oldUrl = null;
// 		res.redirect(req.session.oldUrl);
// 	} else {
// 		res.redirect('/issues/list');
// 	}
// });

// router.get('/profile', isLoggedIn,function(req, res, next){
// 	Order.find({user: req.user}, function(err, orders) {
// 		if (err) {
// 		return res.write('Error!');	
// 		}
// 		var cart;
// 		orders.forEach(function(order){
// 			cart = new Cart(order.cart);
// 			order.items = cart.generateArry();
// 		});
// 		res.render('user/profile', { orders: orders });
		
// });
// });

// router.get('/logout', isLoggedIn, function(req, res, next){
// 	req.logout();
// 	res.redirect('/');
// });

// router.get('/signup', function(req, res, next){
// 	var messages = req.flash('error');
// 	res.render('user/signup', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
// }); 

// router.post('/signup', passport.authenticate('local.signup', {
// 	failureRedirect: '/user/signup',
// 	failureFlash: true
// }), function(req, res, next){
// 	if (req.session.oldUrl){
// 		var oldUrl = req.session.oldUrl;
// 		req.session.oldUrl = null;
// 		res.redirect(req.session.oldUrl);
// 	} else {
// 		res.redirect('/user/profile');
// 	}
// });

// function isLoggedIn( req, res, next){
// 	if (req.isAuthenticated()) {
// 		return next();
// 	}
// 	res.redirect('/user/profile');
// }

// function notLoggedIn( req, res, next){
// 	if (!req.isAuthenticated()) {
// 		return next();
// 	}
// 	res.redirect('/');
// }