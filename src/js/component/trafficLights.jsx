import React, { useState } from "react";
import LightsColors from "./lightsColors.jsx";

//create your first component

const TrafficLights = () => {
	const [selectedColor, setSelectedColor] = useState("");
	function turnOn(color) {
		setSelectedColor(color);
	}

	function isOnColor(color) {
		return color === selectedColor;
	}

	return (
		<div>
			<div className="barra"></div>
			<div className="traffic-light text-center">
				<LightsColors
					color="red"
					selectedColor={selectedColor}
					onClick={turnOn}
					isOn={isOnColor("red")}
				/>
				<LightsColors
					color="orange"
					selectedColor={selectedColor}
					onClick={turnOn}
					isOn={isOnColor("red")}
				/>
				<LightsColors
					color="green"
					selectedColor={selectedColor}
					onClick={turnOn}
					isOn={isOnColor("red")}
				/>
			</div>
		</div>
	);
};
export default TrafficLights;
