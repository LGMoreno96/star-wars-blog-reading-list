import React from "react";
import PropTypes from "prop-types";

export const Title = ({text}) => {
return (
    <h1 className = "display-5" style={{color:"#db2818"}}><strong>{text}</strong></h1>
)
};

Title.propTypes = {
    text: PropTypes.string,
};