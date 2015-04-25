var React = require('react');
var WeatherContainerLocal = require('./Components/Weather/WeatherContainerLocal.jsx');

var App = React.createClass({

    render: function() {
        return (
            <WeatherContainerLocal/>
        );
    }

});

module.exports = App;
