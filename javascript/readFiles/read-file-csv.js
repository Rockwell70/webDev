const fs = require('fs')
const {parse} = require("csv-parse");
let data = [];
const snippet = [];
let counter = 0;

fs.createReadStream("../../JobTitles.csv", {autoClose: true})
  .pipe(parse({ delimiter: ",", columns: true, ltrim:true }))
  .on("data", function (row) {
    data.push(row)
  })
  .on("error", function (error) {
    console.log(error.message);
  })
  .on("end", function () {
    console.log("parsed the csv data");
    console.log(data);
  });

