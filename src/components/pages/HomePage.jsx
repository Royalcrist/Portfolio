import React from 'react';
import Header from '../Header';
import SocialMedia from '../SocialMedia';


class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <React.Fragment>
                < Header />
                < SocialMedia/>
            </React.Fragment>
        );
    }
}

export default HomePage;