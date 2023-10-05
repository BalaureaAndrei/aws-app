import React from "react";

export default function Skeleton() {
	return (
		<div className="loading">
			<div className="skeleton sidebar-skeleton"></div>
			<div className="loading-skeleton">
				<div className="content-skeleton skeleton"></div>
				<div className="content-skeleton skeleton"></div>
				<div className="content-skeleton skeleton"></div>
				<div className="content-skeleton skeleton"></div>
			</div>
		</div>
	);
}
