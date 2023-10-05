import React from "react";

export default function Button(props) {
	return (
		<button
			className={`ripple button button-${props.size || "m"}`}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
}
