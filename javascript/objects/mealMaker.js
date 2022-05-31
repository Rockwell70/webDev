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

// const newMenu = Object.assign({dessert: 'cake'}, menu);
// newMenu.price = 4.5
// console.log(newMenu);

const special = {'popcorn': 1.25, 'ice-cream': 2.45, 'cake slice': 4.50}
console.log(special["cake slice"])

menu.price = 100;
menu.meal = 'Beans';
console.log(menu);
console.log(menu.todaysSpecial);