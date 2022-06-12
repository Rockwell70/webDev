//testing importing a module
const {HospitalEmployee} = require("./inheritence.js");

const me = new HospitalEmployee('William');
me.takeVacationDays(12);
console.log(`${me.name} has ${me.remainingVacationDays} vacation days remaining.`);