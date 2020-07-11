import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../../assets/styles/Button.scss";

const Button = (props) => {
    const { children, color, size, url, isDisable } = props;

    return (
        <Link
            to={url}
            className={`button button-${color ? color : "blue"} button-${
                size ? size : ""
            } ${isDisable ? "button-disable" : ""}`}
        >
            {children}
        </Link>
    );
};

export default Button;
