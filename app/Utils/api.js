require('es6-promise').polyfill();
require('isomorphic-fetch');

var api = {

    get : function(url) {
        return fetch(url);
    }

};

module.exports = api;
