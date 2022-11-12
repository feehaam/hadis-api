const Hadismap = require("../schema/Hadismap");

const getAllHadis = async (req, res, next) => {
    let allHadis;
    try {
      allHadis = await Hadismap.find();
    } catch (error) {
      return next(error);
    }
    if (!allHadis) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
    return res.status(200).json({ allHadis });
  };

  exports.getAllHadis = getAllHadis;