const app = require("express")();
const dataRoutes = require("./routes/data");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const { PORT, DATABASE_URL } = process.env;

app.use(cors());
app.use("/api/v1/", dataRoutes);

app.get("/", (req, res) => res.send("Visualization api ready to use..."));

app.listen(PORT, () =>
  mongoose.connect(DATABASE_URL, () =>
    console.log("Database connected && Server running on port " + PORT)
  )
);
