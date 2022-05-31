const menu = {
    _meal: '',
    _price: 0,
    //accessor property(setter)
    set meal(mealToCheck) {
        if (typeof mealToCheck === "string") {
            this._meal = mealToCheck;
        } else {
            return 'meal must be a string';
        }
    },

    set price(priceToCheck) {
        if (typeof priceToCheck === "number"){
            this._price = priceToCheck;
        } else {
            console.log('Price must be numeric');
        }
    },
    //getter
    get todaysSpecial() {
        if (this._meal && this._price) {
            return `Today's special is ${this._meal} at $${this._price}.`
        } else {
            return 'Meal or price was not set correctly!'
        }
    },

};

menu.price = 100;
menu.meal = 'Beans';
console.log(menu.todaysSpecial);