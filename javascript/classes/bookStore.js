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