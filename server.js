const express = require("express");
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

//var Truck = require('./models/Truck.js');

const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

var db = require('./models');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {
  app.use(express.static(__dirname + "/client/public"));
}

// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('./client/public'));


mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/TruckList');

mongoose.connection.on('error', function (err) {
 console.log('Mongoose Error: ', err);
});

mongoose.connection.once('open', function () {
 console.log('Mongoose connection successful.');
});

// Routing
var truckController = require("./controllers/truck-controller");
var router = new express.Router();

// var router = new express.Router();
// Define any API routes first
// Get saved articles
router.get("/api/saved", truckController.find);
// Save articles
router.post("/api/saved", truckController.insert);
// delete saved articles
router.delete("/api/saved/:id", truckController.delete);
// Send every other request to the React app
router.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
router.post('/*', function(req,res) {
  console.log('Call to unhandled path: ', req);
  res.json({'req':req.body});
})

app.use(router);

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
