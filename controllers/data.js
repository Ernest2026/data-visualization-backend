const Data = require("../models/data");
const setStatistics = require("../utils/statistics");

const stats = (req, res) => {
  Data.find({}, (err, result) => {
    if (err) {
      res.json({ status: "error", error: err.message });
    } else {
      const data = setStatistics(result);
      res.json({ status: "success", data: data.stats });
    }
  });
};

const search = (req, res) => {
  const {
    end_year,
    topic,
    sector,
    region,
    pestle,
    source,
    country,
    quantity,
    pagination,
  } = req.query;
  const requiredField = {
    end_year,
    topic,
    sector,
    region,
    pestle,
    source,
    country,
  };
  const obj = {};
  const query = (object) =>
    Object.keys(object).map((val) => object[val] && (obj[val] = object[val]));
  query(requiredField);
  Data.find(obj, (err, result) => {
    if (err) {
      res.json({ status: "error", error: err.message });
    } else {
      const stats = setStatistics(result);
      Data.find(obj, (err, data) => {
        if (err) {
          res.json({ status: "error", error: err.message });
        } else {
          res.json({ status: "success", data, ...stats });
        }
      })
        .limit(quantity || 50)
        .skip(quantity * pagination || 0)
        .select(Object.keys(requiredField));
    }
  });
};

module.exports = {
  stats,
  search,
};
