const express = require("express");
const { getAllHadis } = require("../controller/HadismapController");


const hadismap_route = express.Router();

hadismap_route.get("/hadismap", getAllHadis);

module.exports = hadismap_route;