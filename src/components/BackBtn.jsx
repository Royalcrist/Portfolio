import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../../assets/styles/BackBtn.scss";
import BackBtnIcon from "../../assets/static/BackBtn.svg";

const BackBtn = (props) => {
    return (
        <div className={`back-btn-bg ${props.hideBg ? "hide" : ""}`}>
            <Link to={props.url} className={`back-btn ${props.className}`}>
                <img className="back-btn-icon" src={BackBtnIcon} alt="Back" />
                <span>Go back</span>
            </Link>
        </div>
    );
};

export default BackBtn;
