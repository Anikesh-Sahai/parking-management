const ParkingSlot = require("../models/ParkinSlotes");
const { OK_CODE } = require("../utils/constants");

exports.getSlotsOfParking = async (req, res) => {
  const { id, size } = req.query;
  const query = {
    parkingLot: id,
    available: true,
  };
  if (size) query.size = size;
  const parkingSlots = await ParkingSlot.find(query);
  let data;
  if (parkingSlots.length) {
    data = parkingSlots;
  } else {
    data = "no slots found";
  }
  res.status(OK_CODE).json({
    data,
  });
};
