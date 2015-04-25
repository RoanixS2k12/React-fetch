var React = require('react');
var WeatherWidget = require('./WeatherWidget.jsx');

var WeatherContainerLocal = React.createClass({

    getInitialState: function() {
        var data = [
            { 'name' : 'Montluçon' },
            { 'name' : 'Paris' },
            { 'name' : 'Marseille' },
            { 'name' : 'New York' }
        ];

        return {
            cities : data
        };
    },

    componentDidMount: function() {

    },

    render: function() {
        return (
            <WeatherWidget cities={this.state.cities}/>
        );
    }

});

module.exports = WeatherContainerLocal;
