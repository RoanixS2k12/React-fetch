var React = require('react');
var ExampleComponent = require('./Components/ExampleComponent.jsx');

var App = React.createClass({

    render: function() {
        return (
            <ExampleComponent/>
        );
    }

});

module.exports = App;
