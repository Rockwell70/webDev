const fs = require("fs");
const { parse } = require("csv-parse");
let data = [];
const snippet = [];
let counter = 0;

fs.createReadStream("../../JobTitles.csv", { autoClose: true })
  .pipe(
    parse({
      delimiter: ",",
      columns: true,
      ltrim: true,
      group_columns_by_name: true,
    })
  )
  .on("data", function (row) {
    counter < 50 ? data.push(row) : undefined;
    counter++;
  })
  .on("error", function (error) {
    console.log(error.message);
  })
  .on("end", function () {
    let json = JSON.stringify(data);
    fs.writeFileSync("JobTitles.json", json);
    console.log("parsed the csv data");
    //console.log(data);
  });
