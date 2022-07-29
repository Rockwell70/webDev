const readline = require("readline");
const fs = require("fs");
const jsonData = require("./JobTitles.json");

for (let i = 0; i < 50; i++) {
  jsonData[i]["Pay Grade"] === "5" ? console.log(jsonData[i]) : undefined;
}
