const ParkingSlot = require("../models/ParkinSlotes");
const ParkingLot = require("../models/ParkingLot");
const { CREATED_CODE } = require("../utils/constants");

exports.onboard = async (req, res) => {
  const { name, floors } = req.body;
  const parking = await ParkingLot.create({ name });
  for (let i = 0; i < floors.numbers; i++) {
    for (let j = 0; j < floors.small; j++) {
      await ParkingSlot.create({
        parkingLot: parking._id,
        floor: i + 1,
        available: true,
        size: "small",
      });
    }
    for (let j = 0; j < floors.medium; j++) {
      await ParkingSlot.create({
        parkingLot: parking._id,
        floor: i + 1,
        available: true,
        size: "medium",
      });
    }
    for (let j = 0; j < floors.large; j++) {
      await ParkingSlot.create({
        parkingLot: parking._id,
        floor: i + 1,
        available: true,
        size: "large",
      });
    }
    for (let j = 0; j < floors.xlarge; j++) {
      await ParkingSlot.create({
        parkingLot: parking._id,
        floor: i + 1,
        available: true,
        size: "xlarge",
      });
    }
  }
  res.status(CREATED_CODE).json({});
};
