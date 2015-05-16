'use strict';

const React = require('react');
const fecha = require('fecha');

const DateDisplay = React.createClass({
    render() {
        return <span>{this.props.data ? fecha.format(new Date(this.props.data), 'D MMM YYYY') : ''}</span>;
    }
});

module.exports = DateDisplay;
