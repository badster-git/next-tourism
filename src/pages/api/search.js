import lunr from "lunr";
const tourPackages = require("../../../data/TOUR_PACKAGES");

const tours =
  process.env.NODE_ENV === "production"
    ? require("../../../cache/data").tours
    : tourPackages;

export default (req, res) => {
  let idx = lunr(function () {
    this.ref("title");
    this.field("subtitle");
    this.field("path");

    tours.forEach(function (doc) {
      this.add(doc);
    }, this);
  });

  const searchResult = req.query.q
    ? idx.search(req.query.q).length > 0
      ? idx.search(req.query.q).map((item) => item.ref)
      : []
    : [];

  const result = tours.filter((tour) => {
    return searchResult.includes(tour.title);
  });
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ result }));
};
