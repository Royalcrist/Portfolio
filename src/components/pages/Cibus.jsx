import React from 'react';
import { Link } from 'react-router-dom';


class Cibus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div>
                <h1>Verga</h1>
                <Link to="/" >Home</Link>
            </div>
        );
    }
}

export default Cibus;