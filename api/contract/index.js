var express = require("express");
var router = express.Router();
var Contract = require("./contract.model");

// Create New Contract
router.post("/new", function(req, res) {
  let contract = new Contract(req.body);
  console.log(contract, "new contract");
  contract.save()
  .then(contract => {
      res.status(200).json({'contract': 'Added Successfuly'});
      console.log(contract, 'created a new contract');
  });
});

// Contract List
router.get("/list", function(req, res) {
  Contract.find()
    .populate("customer")
    .populate("asset")
    .exec()
    .then(function(result) {
      return res.status(200).send(result);
    })
    .catch(function(err) {
      console.error(err);
      return res.status(500).send(err);
    });
  console.log("All Contract Search");
});

// get one Contract By Id
router.get("/:id", function(req, res) {
  console.log(req.params, "/:id hit contract id at server");
  var contract = req.params;
  console.log(contract.id, "contract requested at server");
  Contract.findById({ _id: contract.id })
    .populate("customer")
    .populate("asset")
    .exec(function(err, foundContract) {
      if (err) {
        console.log(err, "err");
        res.send(err);
      } else {
        console.log(foundContract, "Found Contract");
        res.send({
          data: foundContract,
          status: 200
        });
      }
    });
});

// get one Contract by Status
router.get("/status/:id", function(req, res) {
  console.log(req.params, "item hit asset id at server");
  var contract = req.params;
  console.log(contract.id, "asset requested at server");
  Contract.find({ status: contract.id }, function(err, foundAsset) {
    if (err) {
      console.log(err, "err");
      res.send(err);
    } else {
      console.log(foundAsset._id, "Found Asset");
      res.send({
        data: foundAsset,
        status: 200
      });
    }
  });
});

// contract by customer
router.get("/customer/:id", function(req, res) {
  console.log(req.params, "customer hit contract id at server");
  var customer = req.params;
  Contract.find({ customer: customer.id })
  .populate("customer")
  .populate("asset")
  .exec(function(err, foundContract) {
    if (err) {
      console.log(err, "err");
      res.send(err);
    } else {
      console.log(foundContract, "Found Contracts");
      res.send({
        data: foundContract,
        status: 200
      });
    }
  });
});

// contract by Month
router.get("/customer/month/:id", function(req, res) {
  console.log(req.params, "customer hit contract id at server");
  var customer = req.params;
  Contract.find({ customer: customer.id })
  .populate("customer")
  .populate("asset")
  .exec(function(err, foundContract) {
    if (err) {
      console.log(err, "err");
      res.send(err);
    } else {
      console.log(foundContract, "Found Contracts");
      res.send({
        data: foundContract,
        status: 200
      });
    }
  });
});

// Update or Edit Issue
router.put("/update/:id", function(req, res) {
  var contract = req.body;
  console.log(contract, "update at server");
  Contract.findById(contract._id, function(err, foundContract) {
    if (err) res.send(err);
    else
      foundContract.update(req.body, function(err, count) {
        if (err) res.send(err);
        else res.send(count);
      });
  });
});

// Delete One Issue
router.get("/delete/:id", function(req, res) {
  Contract.remove({ _id: req.params.id }, function(err, result) {
    if (err) {
      console.log(err);
      res.send("something wrong");
    }
    res.json(result);
  });
});

module.exports = router;
