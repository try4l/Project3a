var Truck = require("../models/Truck");
var TruckList = require("../models/TruckList");

var express = require('express');
var app = express();
var router = express.Router();

module.exports = {
  // get trucks from database
  find: function(req, res) {
    console.log("truck-controller: find:");
    TruckList.find().then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  },
  // add new truck to database
  insert: function(req, res) {
    console.log("truck-controller: insert:");
    console.log("req.body: ", req.body);
    TruckList.create(req.body).then(function(doc) {
      res.json(doc);
      console.log("doc: ", doc);
    }).catch(function(err) {
      res.json(err);
    });
  },
  // delete truck from database
  delete: function(req, res) {
    console.log("truck-controller: delete:");
    TruckList.remove({
      _id: req.params.id
    }).then(function(doc) {
      res.json(doc);
      console.log("doc: ", doc);
    }).catch(function(err) {
      res.json(err);
    });
  }
};
