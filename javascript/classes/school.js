/**
 * @fileoverview This file contains a school class
 * and subclasses of different types of schools.
 */

class School {
    constructor(name, level) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = 0;
    }

    get name() {
        return this._name;
    }

    get level() {
        const levels = ['primary', 'middle', 'high'];
        return levels.includes(this._level) ?
            this._level : new Error ('Incorrect level');
    }

    get numberOfStudents() {
        return this._numberOfStudents;
    }

    set numberOfStudents(num) {
        return num ?
            this._numberOfStudents = num :
            this._numberOfStudents;
    }

    quickFacts() {
        console.log(`${this._name} is a ${this._level} school with ${this._numberOfStudents} students.`);
    }
}


const school = new School('William B', 'low');
console.log(school.level);
console.log(school.numberOfStudents);
school.numberOfStudents = 2300;
school.quickFacts();



//
// historyOfEverything.toggleCheckOutStatus();
// console.log(`The book ${historyOfEverything.name} is checked out: ${historyOfEverything.isCheckOut}`);
//
// historyOfEverything.addRating(4);
// historyOfEverything.addRating(5);
// historyOfEverything.addRating(5);
//
// console.log(`The book ${historyOfEverything.name} has average rating of ${historyOfEverything.getAverageRating()}`);
//
// console.log(newMovie.numberOfStudents);
// console.log(newMovie.getAverageRating());
// console.log(newMovie.getBestRating());
// console.log(newMovie.isCheckOut);
// newMovie.toggleCheckOutStatus();
// console.log(newMovie.isCheckOut);
