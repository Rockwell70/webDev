class Surgeon {
    constructor(name, department) {
        this._name = name;
        this._department = department;
        this._remainingVacationDays = 20;
    }

    get name() {
        return this._name;
    }

    get department() {
        return this._department;
    }

    get remainingVacationDays() {
        return this._remainingVacationDays;
    }

    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }

    salary(num) {
        return num;
    }

}

const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');

console.log(surgeonRomero.name);

surgeonRomero.takeVacationDays(3);
console.log(surgeonRomero.remainingVacationDays);

surgeonJackson.takeVacationDays(5);
surgeonJackson.salary(135000);
console.log(`${surgeonJackson.name} earns ${surgeonJackson.salary} and has ${surgeonJackson.remainingVacationDays} vacation days`);