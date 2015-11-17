var React = require('react');

var axios = require('axios');

var Badge = require('./Badge.jsx');

var Page = React.createClass({
    getInitialState() {
        return {
            locations: []
        };
    },
    componentDidMount() {
        var self = this;
        axios
            .get('https://api.foursquare.com/v2/venues/search?client_id=OLLKKOPDBW54XMH2WJJXQSBACVUGOGHIH4HR1GIORUJOCWXA&client_secret=UXUNS2OKRA0KM4ZNMUGDG1ZCI2HADM3AI0PNYN4LQARZNGSA&v=20130815&ll=40.7,-74')
            .then((result) => {
                console.log(result);
                self.setState({
                    locations: result.data.response.venues
                });
            });
    },
    render() {
        return (
            <div>
                {this.state.locations.map((location) => {
                    // console.log(location);
                    return (
                        <div style={{fontFamily: 'sans-serif', marginBottom: 10}}>
                            <div>
                                {location.name}
                            </div>
                            <div>
                                {location.categories.map((category) => {
                                    return (
                                        <Badge>
                                            {category.shortName}
                                        </Badge>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
});


module.exports = Page;
