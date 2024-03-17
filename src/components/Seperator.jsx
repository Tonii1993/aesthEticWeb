import React from "react";
import PropTypes from "prop-types";

const Separator = ({ heading, paragraph, className }) => {
  const separatorStyle = {
    className: className,
  };

  return (
    <div className={`text-center p-8 ${className}`} style={separatorStyle}>
      {heading && (
        <h2 className="text-2xl md:text-3xl lg:text-4xl">{heading}</h2>
      )}
      {paragraph && (
        <p className="text-base md:text-lg lg:text-xl">{paragraph}</p>
      )}
    </div>
  );
};

Separator.propTypes = {
  heading: PropTypes.string,
  paragraph: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
};

Separator.defaultProps = {
  color: "#000", // Default color is black
};

export default Separator;
