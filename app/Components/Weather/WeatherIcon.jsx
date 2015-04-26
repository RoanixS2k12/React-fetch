var React = require('react');
	Api = require('../../Utils/api.js');

var WeatherIcon = React.createClass({

	render: function() {

		var iconUrl = Api.weatherIcon(this.props.icon);

		return (
			<img src={iconUrl}/>
		);
	}

});

module.exports = WeatherIcon;