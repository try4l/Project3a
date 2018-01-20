var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new FoodTruckDocumentSchema object
var TruckListSchema = new Schema({
  // `name` must be of type String
  // `name` must be unique, the default mongoose error message is thrown if a duplicate value is given
  name: {
    type: String,
    unique: true
  },
  // `trucks` is an array that stores ObjectIds
  // The ref property links these ObjectIds to the Truck model
  // This allows us to populate the Trucks List with any associated Trucks
  trucks: [
    {
      type: Schema.Types.ObjectId,
      ref: "Truck"
    }
  ]
});

// This creates our model from the above schema, using mongoose's model method
var TruckList = mongoose.model("TruckList", TruckListSchema);

// Export the TrucksList model
module.exports = TruckList;
