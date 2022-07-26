import * as fs from 'node:fs';

let readDataFile = (err, data) => {
  if (err) {
    console.log(`Qualcosa non va: ${err}`);
  } else {
    console.log(`Provided file contained ${data}`);
  }
};

fs.readFile('./file.txt', 'utf-8', readDataFile);