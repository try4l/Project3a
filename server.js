const express = require("express");
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

//var Truck = require('./models/Truck.js');

const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
var router = express.Router();

var db = require('./models');

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

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/foodtruck');

mongoose.connection.on('error', function (err) {
 console.log('Mongoose Error: ', err);
});

mongoose.connection.once('open', function () {
 console.log('Mongoose connection successful.');
});


	// When the server starts, create and save a new TruckList document to the db
// The "unique" rule in the TruckList model's schema will prevent duplicate TruckLists from being added to the server
db.TruckList
  .create({ name: "Food Truck List" })
  .then(function(dbTruckList) {
    // If saved successfully, print the new TruckList document to the console
    console.log(dbTruckList);
  })
  .catch(function(err) {
    // If an error occurs, print it to the console
    console.log(err.message);
  });

// Routes

// POST route for saving a new Truck to the db and associating it with a TruckLisst
app.post("/submit", function(req, res) {
  // Create a new Book in the database
  db.Truck
    .create(req.body)
    .then(function(dbTruck) {
      // If a Truck was created successfully, find one TruckList (there's only one) and push the new Truck's _id to the TruckLists's `trucks` array
      // { new: true } tells the query that we want it to return the updated TruckList -- it returns the original by default
      // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
      return db.TruckList.findOneAndUpdate({}, { $push: { books: dbTruck._id } }, { new: true });
    })
    .then(function(dbTruckList) {
      // If the TruckList was updated successfully, send it back to the client
      res.json(dbTruckList);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});

// Route for getting all trucks from the db
app.get("/trucks", function(req, res) {
  // Using our Trucks model, "find" every truck in our db
  db.truck
    .find({})
    .then(function(dbTruck) {
      // If any Trucks are found, send them to the client
      res.json(dbTruck);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});

// Route for getting all TruckLists from the db
app.get("/trucklist", function(req, res) {
  // Using our TruckList model, "find" every trucklist in our db
  db.TruckList
    .find({})
    .then(function(dbTruckList) {
      // If any TruckLists are found, send them to the client
      res.json(dbTruckList);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});

// Route to see what trucklist looks like WITH populating
app.get("/alltrucks", function(req, res) {
  // Using our TruckList model, "find" every trucklist in our db and populate them with any associated trucks
  db.TruckList
    .find({})
    // Specify that we want to populate the retrieved trucklist with any associated books
    .populate("trucks")
    .then(function(dbTruckList) {
      // If any TruckLists are found, send them to the client with any associated Books
      res.json(dbTruckList);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});


// // Routing
// var truckController = require("./controllers/truck-controller");
// var router = new express.Router();
// // Define any API routes first
// // Get saved articles
// router.get("/api/saved", truckController.find);
// // Save articles
// router.post("/api/saved", truckController.insert);
// // delete saved articles
// router.delete("/api/saved/:id", truckController.delete);
// // Send every other request to the React app
// router.get("/*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.use(router);

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
