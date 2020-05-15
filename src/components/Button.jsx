import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../../assets/styles/Button.scss'

const Button = props => (
    < Link to={props.url} className={`button button-${props.color ?props.color : 'blue'} button-${props.size ? props.size : '' }`}>
        {props.children}
    </Link>
)

export default Button;