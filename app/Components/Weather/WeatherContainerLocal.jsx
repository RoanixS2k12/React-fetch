var React = require('react');
var WeatherWidget = require('./WeatherWidget.jsx');
var data = require('../../Dummy/data.js');

var WeatherContainerLocal = React.createClass({

    getInitialState: function() {
        return {
            weather : data
        };
    },

    render: function() {
        return (
            <WeatherWidget weather={this.state.weather}/>
        );
    }

});

module.exports = WeatherContainerLocal;
