const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { createServer } = require("http");
const ParkingLotController = require("./controller/parkingLotController");
const parkingSlotController = require("./controller/parkingSlotController");

dotenv.config({ path: "./config.env" });

const { PORT, DATABASE } = process.env;

const app = express();

mongoose
  .connect(DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connection successfully");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

createServer(app);

app.use(express.json());

// STARTING SERVER
const server = app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

app.post("/onboard", ParkingLotController.onboard);
app.get("/get-parkingslots", parkingSlotController.getSlotsOfParking);
