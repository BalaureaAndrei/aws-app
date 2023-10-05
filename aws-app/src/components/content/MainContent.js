import React from "react";
import MainData from "./MainData";
import Description from "./Description";
import AdditionalContent from "./AdditionalContent";
import Reviews from "./Reviews";
import Burger from "../../assets/burger.png";
import CompanyRevenue from "./CompanyChart";

export default function MainContent(props) {
	const companyData = props.data;
	const setIsMobileHeaderOpened = props.setIsMobileHeaderOpened;
	return (
		<div className="main-content">
			<div className="main-content-wrapper">
				<div className="headline">
					<h1 className="text-display-m color-primary">
						{companyData.companyName}
					</h1>
					<div
						className="burger-menu"
						onClick={() => {
							setIsMobileHeaderOpened(true);
						}}
					>
						<img
							src={Burger}
							alt=""
						/>
					</div>
				</div>
				<div className="main-company-data">
					<MainData data={companyData}></MainData>
					<AdditionalContent data={companyData}></AdditionalContent>
				</div>
				<div className="company-description">
					<Description data={companyData.companyDescription}></Description>
				</div>
				<div className="company-revenue">
					<CompanyRevenue data={companyData}></CompanyRevenue>
				</div>
				<div className="company-reviews">
					<Reviews data={companyData}></Reviews>
				</div>
			</div>
		</div>
	);
}
