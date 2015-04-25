/** @jsx
 *  React.DOM
 */
var React = require('react');
// React instance for chrome dev tools
window.React = React;

var App = require('./App.jsx');
React.renderComponent(<App/>, document.body);
