import React from "react";

export default function Description(props) {
	return (
		<div className="main-content-description-wrapper">
			<div className="main-content-description">
				<h2 className="text-display-s color-primary">Description</h2>
				<div className="description-wrapper bg-neutral-99">
					<p className="text-body-l">{props.data}</p>
				</div>
			</div>
		</div>
	);
}
