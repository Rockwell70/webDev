/**
 * @fileoverview This file contains a school class
 * and subclasses of different types of schools.
 */

class School {
    constructor(name, level) {
        this._name = String(name);
        this._level = level;
        this._numberOfStudents = Number;
    }

    get name() {
        return this._name;
    }

    get level() {
        const levels = ['primary', 'middle', 'high'];
        return levels.includes(this._level) ?
            this._level :
            console.log('Incorrect level: primary, middle, or high');
    }

    get numberOfStudents() {
        return this._numberOfStudents;
    }

    set numberOfStudents(num) {
        this._numberOfStudents = num;
    }


    quickFacts() {
        console.log(`Quick Facts:\nName: ${this._name}\nLevel: ${this._level}\nStudents: ${this._numberOfStudents}`);

    }
}
const school = new School('William B', 'middle');
console.log(school);
console.log(school.level);
school.numberOfStudents = 90;
console.log(school.numberOfStudents);
school.quickFacts();
