var express = require("express");
var router = express.Router();
var User = require("./user.model");

// Sign In User
router.post("/signin", function(req, res) {
  console.log("got sign in req");
  var user = req.body;
  console.log(user, "login request at server");
  User.findOne({ userName: user.userName }, function(err, gotuser) {
    if (err) {
      res.send(err, "Invalid User");
    }
    console.log("got", user);
    if (gotuser) {
      User.findOne({ password: user.password }, function(err, user) {
        if (err) {
          res.send(err, "err");
        }
        if (user) {
          res.send({
            data: user,
            status: 200
          });
        } else {
          res.status("500").send("not found");
        }
      });
    }
  });
});

// Sign Up New User
router.post("/new", function(req, res) {
  let user = req.body;
  console.log(user, "New User at server");
  User.findOne({ userName: user.userName }, function(err, gotuser) {
    if (err) {
      res.send(err);
    }
    console.log("got", user);
    if (gotuser) {
      console.log("User Already Exist", user);
      res.send("User Already Exist");
    } else {
      let user = new User(req.body);
      user.save(function(err, data) {
        if (err) {
          res.send("Can not Save User");
        }
        res.jsonp({ success: true });
      });
      console.log("New User Created");
    }
  });
});

// User List
router.get("/list", function(req, res) {
  User.find((err, user) => {
    if (err) console.log(err);
    else res.json(user);
  });
  console.log("All User Search");
});

module.exports = router;
