var React = require('react');
var Favicon = require('react-favicon');
var WeatherContainerLocal = require('./Components/Weather/WeatherContainerLocal.jsx');

var App = React.createClass({

    getInitialState: function() {
        return {
            favicon: '../assets/favicon.ico'
        };
    },

    render: function() {
        return (
            <div>
                <Favicon url={this.state.favicon}/>
                <WeatherContainerLocal/>
            </div>
        );
    }

});

module.exports = App;
