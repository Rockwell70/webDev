/**
 * @fileoverview This file contains a school class
 * and subclasses of different types of schools.
 */

class Media {
    constructor(title) {
        this._title = title;
        this._isCheckOut = false;
        this._ratings = [];
    }

    get title() {
        return this._title;
    }

    get isCheckOut() {
        return this._isCheckOut;
    }

    get ratings() {
        return this._ratings;
    }

    addRating(rating) {
        this._ratings.push(rating);
    }

    toggleCheckOutStatus() {
        this._isCheckOut = !this._isCheckOut;
    }

    getAverageRating() {
        const sumRatings = this.ratings.reduce((previousValue, currentValue) => {
            return previousValue + currentValue;
        }, 0)

        return (sumRatings / this.ratings.length).toFixed(1);

    }

    getBestRating() {
        return Math.max.apply(null, this.ratings);
    }
}

class Book extends (Media) {
    constructor(title, author, pages) {
        super(title);
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

class Movie extends (Media) {
    constructor(title, director, runTime) {
        super(title);
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

class CD extends (Media) {
    constructor(title, artist, songs) {
        super(title);
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

const newMovie = new Movie('Speed', 'Jan de Bont', 116);
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544)

//
// historyOfEverything.toggleCheckOutStatus();
// console.log(`The book ${historyOfEverything.title} is checked out: ${historyOfEverything.isCheckOut}`);
//
// historyOfEverything.addRating(4);
// historyOfEverything.addRating(5);
// historyOfEverything.addRating(5);
//
// console.log(`The book ${historyOfEverything.title} has average rating of ${historyOfEverything.getAverageRating()}`);
//
// console.log(newMovie.ratings);
// console.log(newMovie.getAverageRating());
// console.log(newMovie.getBestRating());
// console.log(newMovie.isCheckOut);
// newMovie.toggleCheckOutStatus();
// console.log(newMovie.isCheckOut);

class MediaHolder {
    /**
     * This class holds all types of media
     * */
    constructor(name) {
        this._name = name;
        this._items = [];
    }

    get name() {
        return this._name;
    }

    get items() {
        return this._items;
    }

    addItem(thing) {
        this.items.push(thing);
    }

    printItems() {
        this.items.forEach(item =>{
            console.log(`This is ${item.title}.`)
        })
    }
}

const holder = new MediaHolder(newMovie);
holder.addItem(historyOfEverything);
holder.addItem(newMovie);
holder.printItems();
