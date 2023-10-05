import React from "react";
import Company from "../../assets/company.png";
import Settings from "../../assets/settings.png";
import Question from "../../assets/question.png";

export default function Header(props) {
	const companyData = props.data;
	const setIsModalOpened = props.setIsModalOpened;
	const isMobileHeaderOpened = props.isMobileHeaderOpened;
	const setIsMobileHeaderOpened = props.setIsMobileHeaderOpened;
	return (
		<div className="header-wrapper">
			<header className={`header ${isMobileHeaderOpened ? "opened" : null}`}>
				<div className="header-container">
					<h2 className="text-headline-l color-neutral-99 bold">
						{companyData.companyName}
					</h2>
					<div className="menu">
						<div className="menu-top">
							{" "}
							<button
								className="button button-m text text-body-m change-company"
								onClick={() => {
									setIsModalOpened(true);
								}}
							>
								<img
									src={Company}
									alt="x"
								/>
								<span>Change Company</span>
							</button>
						</div>
						<div className="menu-bottom">
							<button className="button button-m text text-body-m">
								<img
									src={Settings}
									alt="x"
								/>
								<span>Settings</span>
							</button>
							<button className="button button-m text text-body-m">
								<img
									src={Question}
									alt="x"
								/>
								<span>Instructions</span>
							</button>
						</div>
					</div>
				</div>
			</header>
			{isMobileHeaderOpened ? (
				<div
					className="overlay header-overlay"
					onClick={() => {
						setIsMobileHeaderOpened(false);
					}}
				></div>
			) : null}
		</div>
	);
}
