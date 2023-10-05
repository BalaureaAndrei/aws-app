import React from "react";
import People from "../../assets/people.png";
import Salary from "../../assets/salary.png";
import Industry from "../../assets/industry.png";
import Company from "../../assets/company.png";

export default function MainData(props) {
	const data = props.data;
	// console.log("companyData", data);
	return (
		<div className="main-content-container">
			<div className="main-content-data-wrapper">
				<div className="card card-1 bg-secondary">
					<img
						src={People}
						alt="x"
					/>
					<div className="card-content">
						<h2 className="text-title-l card-content-title color-neutral-99">
							Employees
						</h2>
						<p className="text-body-m color-neutral-99">
							{data.mainData.employees} employees
						</p>
					</div>
				</div>
				<div className="card card-2 bg-tertiary">
					<img
						src={Salary}
						alt="x"
					/>
					<div className="card-content">
						<h2 className="text-title-l card-content-title color-neutral-99">
							Business Tags
						</h2>
						<p className="text-body-m color-neutral-99">{data.tags}</p>
					</div>
				</div>
				<div className="card card-3 bg-tonal">
					<img
						src={Industry}
						alt="x"
					/>
					<div className="card-content">
						<h2 className="text-title-l card-content-title color-neutral-99">
							Industry
						</h2>
						<p className="text-body-m color-neutral-99">
							{data.mainData.industry}
						</p>
					</div>
				</div>
				<div className="card card-4 bg-primary">
					<img
						src={Company}
						alt="x"
					/>
					<div className="card-content">
						<h2 className="text-title-l card-content-title color-neutral-99">
							Year Founded
						</h2>
						<p className="text-body-m color-neutral-99">
							Founded in {data.mainData.yearFounded}
						</p>
					</div>
				</div>
			</div>
			<div className="iframe-wrapper bg-neutral-99">
				<iframe
					title="map"
					width="600"
					height="450"
					loading="lazy"
					allowFullScreen
					referrerPolicy="no-referrer-when-downgrade"
					src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCNDIy730bB49tdv3M3S5YSm3qmPgepVIc
        &q=${data.mainData.companyAdress}`}
				></iframe>
			</div>
		</div>
	);
}
