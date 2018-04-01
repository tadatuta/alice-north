const helpers = {
    getRandom: function(max) {
        return Math.floor(Math.random() * max);
    },

    getRandomArrayItem: function(arr) {
        return arr[helpers.getRandom(arr.length)];
    },

    isOneOf: function(text, arr) {
        return arr.some(item => text.includes(item));
    }
};

module.exports = helpers;
