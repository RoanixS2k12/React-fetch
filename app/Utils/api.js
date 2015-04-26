require('es6-promise').polyfill();
require('isomorphic-fetch');

var api = {

    config : {
        urlCurrent: 'http://api.openweathermap.org/data/2.5/weather',
        urlForecast: 'http://api.openweathermap.org/data/2.5/forecast/daily',
        urlIcon: 'http://api.openweathermap.org/img/w/',
        lat: 47.3685,
        lon: 2.80342
    },

    get : function(url) {
        return fetch(url);
    },

    getCurrent : function() {
        return this.get(this.config.urlCurrent + '?' + 'lat=' + this.config.lat + 'lon=' + this.config.lon);
    },

    weatherIcon : function(icon) {
        return this.config.urlIcon + icon + '.png';
    }

};

module.exports = api;
