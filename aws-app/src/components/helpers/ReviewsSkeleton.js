import React from "react";

export default function ReviewsSkeleton() {
	return (
		<div className="loading review-loading">
			<div className="loading-skeleton">
				<div className="content-skeleton skeleton"></div>
				<div className="content-skeleton skeleton"></div>
				<div className="content-skeleton skeleton"></div>
			</div>
		</div>
	);
}
