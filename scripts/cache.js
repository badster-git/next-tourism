const tourPackages = require("../data/TOUR_PACKAGES");
const fs = require("fs");
const path = require("path");

function getTours() {
  const tours = tourPackages.map((tour) => {
    const id = tour.id;
    const path = tour.path;
    const title = tour.title;
    const subtitle = tour.subtitle;
    return { id, title, subtitle, path };
  });
  return JSON.stringify(tours);
}

const fileContents = `export const tours = ${getTours()}`;

try {
  fs.readdirSync("cache");
} catch (e) {
  fs.mkdirSync("cache");
}

fs.writeFile("cache/data.js", fileContents, function (err) {
  if (err) return console.log(err);
  console.log("Tours cached");
});

getTours();
