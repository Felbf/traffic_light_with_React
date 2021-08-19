import React from "react";
import PropTypes from "prop-types";

const LightsColors = ({ color, selectedColor, onClick }) => {
	function turnOnColor() {
		onClick(color);
	}

	const selectedColorClass = selectedColor === color ? "glow" : "";

	return (
		<div
			className={`traffic-lights text-center ${color} ${selectedColorClass}`}
			onClick={turnOnColor}></div>
	);
};

LightsColors.propTypes = {
	color: PropTypes.string,
	selectedColor: PropTypes.string,
	onClick: PropTypes.func
};
document.querySelector("#app");

export default LightsColors;
