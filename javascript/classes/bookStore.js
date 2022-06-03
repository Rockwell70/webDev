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

    toggleCheckOutStatus(status) {
        this._isCheckOut = status;
    }

    getAverageRating(title) {

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

const newMovie = new Movie('William B', 'Sammy', 98);

newMovie.toggleCheckOutStatus(true);
console.log(newMovie.isCheckOut);