import React, { useState, useEffect } from "react";
import Select from "react-select";
import SingleSkeleton from "../helpers/SingleSkeleton";

export default function CompanyChangeModal(props) {
	const setIsModalOpened = props.setIsModalOpened;
	const setCompany = props.setCompany;
	const setAdress = props.setAddress;
	const [companyInput, setCompanyInput] = useState("");
	const [adressInput, setAdressInput] = useState("");
	const [companies, setCompanies] = useState([]);
	const [companiesLoading, setCompaniesLoading] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();
		console.log("companyInput", companyInput);
		try {
			const response = await fetch("/save-company", {
				method: "POST",
				body: JSON.stringify({ companyInput, adressInput }),
				headers: {
					"Content-Type": "application/json",
				},
			});
			const responseData = await response.json();
			console.log("responseData", responseData);

			setCompany(companyInput);
			setAdress(adressInput);
			setIsModalOpened(false);
		} catch (error) {
			console.log("error", error);
		}
	}

	async function getSavedCompanies() {
		setCompaniesLoading(true);
		const response = await fetch("/get-saved-companies");
		const responseData = await response.json();
		console.log("responseData", responseData);

		const options = [];
		responseData.data.forEach((company) => {
			options.push({
				label: company.name,
				value: company.name,
				adress: company.address,
			});
		});
		setCompanies(options);
		setCompaniesLoading(false);
	}

	function handleCompanyChange(e) {
		setAdress(e.adress);
		setCompany(e.value);
		setIsModalOpened(false);
	}

	useEffect(() => {
		getSavedCompanies();
	}, []);

	return (
		<div
			className={`dialog-wrapper dialog-animate ${
				props.isOpened ? "opened" : "closed"
			}`}
		>
			<div
				id="dialog-1"
				className="dialog opened"
			>
				<div className="dialog-inner width-320">
					<div className="text-title-l">Change company</div>
					<p className="text-body-m">
						Use the multiselector to change the company or enter a company in
						the user input
					</p>
					<form
						onSubmit={(e) => {
							handleSubmit(e);
						}}
					>
						<div className="input-wrapper">
							<input
								type="text"
								className="input"
								placeholder="Company name"
								value={companyInput}
								onChange={(e) => {
									setCompanyInput(e.target.value);
								}}
							/>
						</div>
						<div className="input-wrapper">
							<input
								type="text"
								className="input"
								placeholder="Adress"
								value={adressInput}
								onChange={(e) => {
									setAdressInput(e.target.value);
								}}
							/>
						</div>
						{companiesLoading ? (
							<SingleSkeleton />
						) : (
							<div className="select-companies">
								<Select
									className="company-selector"
									options={companies}
									onChange={(e) => {
										handleCompanyChange(e);
									}}
								/>
							</div>
						)}
						<button
							type="button"
							className="button button-m outlined ripple dialog-action"
							data-close-dialog="dialog-1"
							onClick={() => {
								setIsModalOpened(false);
							}}
						>
							<span>Cancel</span>
						</button>
						<button className="button button-m ripple">
							<span>Save</span>
						</button>
					</form>
				</div>
			</div>
			<div
				onClick={() => {
					setIsModalOpened(false);
				}}
				className="overlay"
			></div>
		</div>
	);
}
