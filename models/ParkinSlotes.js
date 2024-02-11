const mongoose = require("mongoose");
const { SIZE_ARRAY } = require("../utils/constants");

const parkingSlotSchema = new mongoose.Schema({
  parkingLot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ParkingLot",
    required: [true, "Parking slot must have a Parking lot id"],
  },
  size: {
    type: String,
    enum: SIZE_ARRAY,
    required: [true, "parking Slot must have a size"],
  },
  available: {
    type: Boolean,
    required: true,
    default: true,
  },
  floor: {
    type: Number,
    required: [true, "Parking Slot must have h floor"],
  },
  vehicleNumber: String,
});

parkingSlotSchema.index({ parkingLot: 1 });
parkingSlotSchema.index({ vehicleNumber: 1 });

const ParkingSlot = mongoose.model("ParkingSlot", parkingSlotSchema);

module.exports = ParkingSlot;
