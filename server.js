const express = require("express");
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var Truck = require('./models/Truck.js');

const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('./public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/foodtruck');

var db = mongoose.connection;

db.on('error', function (err) {
 console.log('Mongoose Error: ', err);
});

db.once('open', function () {
 console.log('Mongoose connection successful.');
});

// Routing
var truckController = require("./controllers/truck-controller");
var router = new express.Router();
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

app.use(router);

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
