const mongoose = require("mongoose");

const parkingLotSchema = new mongoose.Schema({
  name: String,
  //   floors: [
  //     {
  //       id: Number,
  //       slots: {
  //         small: Number,
  //         medium: Number,
  //         large: Number,
  //         xlarge: Number,
  //       },
  //     },
  //   ],
});

const ParkingLot = mongoose.model("ParkingLot", parkingLotSchema);

module.exports = ParkingLot;
