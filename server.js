const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;
const port = process.env.PORT || 4000;
const app = express();
require("dotenv").config();
const { default: mongoose } = require("mongoose");
const fs = require('fs');
const Hadismap = require("./schema/Hadismap");
const hadismap_route = require("./routes/HadisRoute");

//MIDDLEWARE SETUP

app.use(cors());
app.use(express.json());

// API-END-POINT ROUTES
app.use("/api/v1/",hadismap_route);
// SERVER STATUS
const mongoURI = "mongodb+srv://admin:191002130hadis@hadis.pqygc1s.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoURI).then(() => console.log('db connected'));
// const temp_data = JSON.parse(fs.readFileSync('./json/tir.json', 'utf-8'))


// const importData = async () => {
//   try {
//     await Hadismap.create(temp_data)
//     console.log('data successfully imported')
//     // to exit the process
//     process.exit()
//   } catch (error) {
//     console.log('error', error)
//   }
// }
// importData();


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`listening to port ${PORT}`));