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
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level`);

    }
    //**@param {array string} number of students to add
    // @return {string} number of students entered*/
    static pickSubstituteTeacher(substituteTeachers) {
        const num = Math.floor(Math.random() * (substituteTeachers.length));
        return substituteTeachers[num];
    }

}

/**A subclass of School.
 * Has additional property: pickupPolicy*/
class Primary extends (School) {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, 'primary', numberOfStudents);
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
        super(name, 'middle', numberOfStudents);
    }
}

/**A subclass of School with one additional
 * property.*/
class High extends (School) {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, 'high', numberOfStudents);
        /** @param {Array, string} sportsTeams */
        this._sportsTeams = sportsTeams;
    }

    get teams(){
        return this._sportsTeams;
    }

    addTeam(team) {
        this._sportsTeams.push(team);
    }
}

const hs = new High('William B', 1500, ['rowing', 'rugby'])
const ps = new Primary('Sammy P', 999, '3:30 or later')
ps.quickFacts();
hs.numberOfStudents = 900;
console.log(hs.numberOfStudents);
hs.quickFacts();
const sub = School.pickSubstituteTeacher(['William', 'Sammy', 'Bobby'])
console.log(sub)
hs.addTeam('chess')
console.log(`${hs.name} has ${hs.teams[0]} & ${hs.teams[2]} teams.`)
//
// const p = new Primary('Sammy', 'low', 'after 3');
// console.log(p.pickupPolicy);

