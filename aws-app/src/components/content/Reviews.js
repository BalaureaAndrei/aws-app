import React, { useEffect, useState } from "react";
import Avatar from "../../assets/avatar.png";
import Button from "../helpers/Button";
import ReviewsSkeleton from "../helpers/ReviewsSkeleton";
import Star from "../../assets/star.png";

export default function Reviews(props) {
	const companyData = props.data;
	const [reviews, setReviews] = useState([]);
	const [reviewsLoaded, setReviewsLoaded] = useState(false);

	async function getReviews() {
		setReviewsLoaded(false);
		const generateReviews = await fetch("/generate-reviews", {
			method: "POST",
			body: JSON.stringify({ companyName: companyData.companyName }),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const generatedReviews = await generateReviews.json();

		// SET REVIEWS TO PREVIOUSLY GENERATED REVIEWS PLUS THE NEWLY GENERATED ONES
		setReviews([...reviews, generatedReviews.data.choices[0].message.content]);

		setReviewsLoaded(true);
	}

	useEffect(() => {
		getReviews();
		// eslint-disable-next-line
	}, []);

	return (
		<div
			id="#reviews"
			className="main-content-reviews-wrapper"
		>
			<div className="main-content-reviews">
				<h2 className="text-display-s color-primary">Reviews</h2>
				{!reviewsLoaded ? (
					<ReviewsSkeleton />
				) : (
					<div className="reviews-wrapper">
						{reviews.map((review, i) => {
							return (
								<div
									key={i}
									className="review bg-neutral-99"
								>
									<div className="review-header">
										<img
											src={Avatar}
											alt="x"
										/>
										<div className="stars">
											<img
												src={Star}
												alt="star"
											/>
											<img
												src={Star}
												alt="star"
											/>
											<img
												src={Star}
												alt="star"
											/>
											<img
												src={Star}
												alt="star"
											/>
											<img
												src={Star}
												alt="star"
											/>
										</div>
									</div>
									<div className="review-content">
										<h3 className="text-title-m bold name">User</h3>
										<p className="text-body-m">{review}</p>
									</div>
								</div>
							);
						})}
					</div>
				)}
				<Button
					size="l"
					onClick={getReviews}
				>
					Request more reviews
				</Button>
			</div>
		</div>
	);
}
