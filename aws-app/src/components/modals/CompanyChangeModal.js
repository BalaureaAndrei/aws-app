import React, { useState } from "react";

export default function CompanyChangeModal(props) {
	const setIsModalOpened = props.setIsModalOpened;
	const setCompany = props.setCompany;
	const [companyInput, setCompanyInput] = useState("");
	return (
		<div
			className={`dialog-wrapper dialog-animate ${
				props.isOpened ? "opened" : "closed"
			}`}
		>
			<div
				id="dialog-1"
				class="dialog opened"
			>
				<div class="dialog-inner width-320">
					<div class="text-title-l">Change company</div>
					<p class="text-body-m">
						Use the multiselector to change the company or enter a company in
						the user input
					</p>
					<form
						onSubmit={(e) => {
							e.preventDefault();
						}}
					>
						<div class="input-wrapper">
							<input
								type="text"
								class="input"
								placeholder="Company name"
								value={companyInput}
								onChange={(e) => {
									setCompanyInput(e.target.value);
								}}
							/>
						</div>
					</form>
					<button
						class="button button-m outlined ripple dialog-action"
						data-close-dialog="dialog-1"
						onClick={() => {
							setIsModalOpened(false);
						}}
					>
						<span>Cancel</span>
					</button>
					<button
						onClick={() => {
							setCompany(companyInput);
							setIsModalOpened(false);
						}}
						class="button button-m ripple"
					>
						<span>Save</span>
					</button>
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
