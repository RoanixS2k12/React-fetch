var React = require('react');

var CurrentWeather = React.createClass({

    componentWillMount: function() {
        this.weather = this.props.data.weather;
    },

    render: function() {

        return (
            <div>
                <span>{this.weather.main}</span>
            </div>
        );
    }

});

module.exports = CurrentWeather;
