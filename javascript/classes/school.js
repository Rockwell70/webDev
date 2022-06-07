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

    addRating(rating) {
        this._numberOfStudents.push(rating);
    }

    toggleCheckOutStatus() {
        this._isCheckOut = !this._isCheckOut;
    }

    getAverageRating() {
        const sumnumberOfStudents = this.numberOfStudents.reduce((previousValue, currentValue) => {
            return previousValue + currentValue;
        }, 0)

        return (sumnumberOfStudents / this.numberOfStudents.length).toFixed(1);

    }

    getBestRating() {
        return Math.max.apply(null, this.numberOfStudents);
    }
}

class Book extends (School) {
    constructor(name, author, pages) {
        super(name);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }
}

class Movie extends (School) {
    constructor(name, director, runTime) {
        super(name);
        this._director = director;
        this._runTime = runTime;
    }

    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }
}

class CD extends (School) {
    constructor(name, artist, songs) {
        super(name);
        this._artist = artist;
        this._songs = songs;
    }

    get artist() {
        return this._artist;
    }

    get songs() {
        return this._songs;
    }
}

const school = new School('William B', 'middle');
console.log(school);
console.log(school.level);
school.numberOfStudents = 90;
console.log(school);
