var React = require('react')
    WeatherIcon = require('./WeatherIcon.jsx');

var CurrentWeather = React.createClass({

    componentWillMount: function() {
        this.weather = this.props.data.weather;
    },
    render: function() {
        return (
            <div>
                <WeatherIcon icon={this.weather.icon}/>
                <span>{this.weather.main}</span>
            </div>
        );
    }

});

module.exports = CurrentWeather;
