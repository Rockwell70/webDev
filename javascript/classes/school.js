/**
 * @fileoverview This file contains a school class
 * and subclasses of different types of schools.
 */

/**
 * @param {String} name
 * @param {String} level
 * @param {Number} numberOfStudents
 */
class School {
    constructor(name, level, numberOfStudents) {
        this._name = String(name);
        this._level = level;
        this._numberOfStudents = Number(numberOfStudents);
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

    /**@return {number}*/
    get numberOfStudents() {
        return this._numberOfStudents;
    }

    //**@param {number} number of students to add
    // @return {number}* number of students entered/
    set numberOfStudents(num) {
        return typeof num === 'number' ?
            this._numberOfStudents = num:
            console.log('Invalid input: numberOfStudents must be set to a Number.')
    }


    quickFacts() {
        console.log(`Quick Facts:\nName: ${this._name}\nLevel: ${this._level}\nStudents: ${this._numberOfStudents}`);

    }

    static pickSubstituteTeacher() {

    }
}

/**A subclass of School.
 * Has additional property: pickupPolicy*/
class Primary extends (School) {
    constructor(name, level,numberOfStudents, pickupPolicy) {
        super(name, level, numberOfStudents);
        /** @param {string=} pickupPolicy */
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy() {
        return this._pickupPolicy;
    }

}

/**A subclass of School with no additional
 * methods or properties.*/
class Middle extends (School) {
    constructor(name, level, numberOfStudents) {
        super(name, level, numberOfStudents);
    }
}

/**A subclass of School with one additional
 * property.*/
class High extends (School) {
    constructor(name, level, numberOfStudents) {
        super(name, level, numberOfStudents);
        /** @param {Array, string} sportsTeams */
        this._sportsTeams = [];
    }

    get teams(){
        return this._sportsTeams;
    }

    addTeam(team) {
        this._sportsTeams.push(team);
    }
}

const school = new School('William B', 'middle', 8);
console.log(school);
console.log(school.level);
school.numberOfStudents = 900;
console.log(school.numberOfStudents);
school.quickFacts();
//
// const p = new Primary('Sammy', 'low', 'after 3');
// console.log(p.pickupPolicy);

