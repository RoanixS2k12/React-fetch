var React = require('react');
var Favicon = require('react-favicon');
var ExampleComponent = require('./Components/ExampleComponent.jsx');

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
                <ExampleComponent/>
            </div>
        );
    }

});

module.exports = App;
