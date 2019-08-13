const cars = require('./data/cars');

module.exports = {
  cart: [],
  total: 0,

  addToCart: function(carToAdd) {
    this.cart.push(carToAdd);
    this.total += carToAdd.price;
  },

  removeFromCart: function(indexToRemove, carPrice) {
    this.cart.splice(indexToRemove, 1);
    this.total -= carPrice;
  },
  
  checkout: function() {
    this.cart = [];
    this.total = 0;
  }
};