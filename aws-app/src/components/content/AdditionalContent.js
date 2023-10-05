import React from "react";

export default function AdditionalContent(props) {
	const companyData = props.data;
	return (
		<div className="additional-data bg-neutral-99">
			<div>
				<div className="logo">
					<img
						src={companyData.companyLogo}
						alt="x"
					/>
				</div>
				<div className="addresses-and-contact bg-secondary-tonal">
					<div className="address">
						<p className="text-body-l">{companyData.mainData.companyAdress}</p>
					</div>
					<div className="contact">
						<p className="text-body-l">Phone: {companyData.companyPhone}</p>
						<p className="text-body-l">Email: {companyData.companyEmail}</p>
					</div>
					<div className="website">
						<p className="text-body-l">
							Website:{" "}
							<a href={companyData.companyWebsite}>
								{companyData.companyWebsite}
							</a>
						</p>
					</div>
				</div>
			</div>
			<div>
				<div className="additional-company-data">
					<div className="bg-secondary card">
						<h2 className="text-title-m card-content-title color-neutral-99">
							{companyData.mainData.industry}
						</h2>
					</div>
					<div className="bg-tertiary card">
						<h2 className="text-title-m card-content-title color-neutral-99">
							{companyData.sector}
						</h2>
					</div>
					<div className="bg-tonal card">
						<h2 className="text-title-m card-content-title color-neutral-99">
							{companyData.subSector}
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
}
