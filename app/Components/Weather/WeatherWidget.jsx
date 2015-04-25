var React = require('react');

var WeatherWidget = React.createClass({
    //
    // getInitialState: function(){
    //     return {data: {cities: []}};
    // },

    render: function() {
        return (
            <ul>
                {
                    this.props.cities.map(function(elem) {
                        return <li>{elem.name}</li>
                    })
                }
            </ul>
        );
    }

});

module.exports = WeatherWidget;
