var React = require('react');
var CurrentWeather = require('./CurrentWeather.jsx');
var ForecastWeather = require('./ForecastWeather.jsx');

var WeatherWidget = React.createClass({

    componentWillMount: function() {
        this.city = this.props.weather.city.name;
        this.current = this.props.weather.current;
        this.forecast = this.props.weather.forecast;
    },

    render: function() {

        console.log(this.props.weather.forecast);

        return (
            <div className="weatherInfo">
                <h4>Weather test</h4>
                <h5>{this.city.name}</h5>
                <h4>Current Weather</h4>
                <CurrentWeather data={this.current}/>

                <h4>Forecast</h4>
                {
                    this.forecast.map(function(day) {
                        return <ForecastWeather key={day.key} data={day}/>
                    })
                }

            </div>
        );
    }

});

module.exports = WeatherWidget;
