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

    /**@return {number}*/
    get numberOfStudents() {
        return this._numberOfStudents;
    }

    //**@param {number} number of students to add
    // @return {number}* number of students entered/
    set numberOfStudents(num) {
        this._numberOfStudents = num;
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
    constructor(name, level, pickupPolicy) {
        super(name, level);
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
    constructor(name, level) {
        super(name, level);
    }
}

const school = new School('William B', 'middle');
console.log(school);
console.log(school.level);
school.numberOfStudents = 90;
console.log(school.numberOfStudents);
school.quickFacts();

const p = new Primary('Sammy', 'low', 'after 3');
console.log(p.pickupPolicy);

