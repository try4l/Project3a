var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var TruckSchema = new Schema({
  // `title` is required and of type String
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  numRatings: {
    type: Number,
    required: true
  },
  owner: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  // create date and time of truck
  date: {
    type: Date
  }
});

// This creates our model from the above schema, using mongoose's model method
var Truck = mongoose.model("Truck", TruckSchema);

// Export the Article model
module.exports = Truck;
