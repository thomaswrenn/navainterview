var React = require('react');

var Badge = React.createClass({
    render() {
        var style = {
            backgroundColor: '#FF5F5C',
            borderRadius: 10,
            padding: '3px 7px',
            fontFamily: 'sans-serif',
            margin: 5,
            display: 'inline-block'
        };
        return (
            <div style={style}>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Badge;
