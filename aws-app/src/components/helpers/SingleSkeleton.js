import React from "react";

export default function SingleSkeleton(props) {
	return (
		<div className={`loading ${props.big ? 'single-loading-big' : 'single-loading-small'}`}>
			<div className="loading-skeleton">
				<div className="content-skeleton skeleton"></div>
			</div>
		</div>
	);
}
