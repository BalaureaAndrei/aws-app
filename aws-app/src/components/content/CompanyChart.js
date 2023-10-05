import React, { useEffect, useState, useRef } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto"; // ADD THIS

export default function CompanyRevenue(props) {
	const companyData = props.data;
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const ref = useRef();

	async function getCompanyRevenue() {
		setLoading(true);
		const generateRevenue = await fetch("/get-company-revenues", {
			method: "POST",
			body: JSON.stringify({ companyName: companyData.companyName }),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const generatedRevenueData = await generateRevenue.json();
		console.log(generateRevenue);

		const dataArray =
			generatedRevenueData.data.choices[0].message.content.split(",");

		const data = {
			labels: ["2019", "2020", "2021", "2022"],
			datasets: [
				{
					label: "Revenue (dollars)",
					data: dataArray,
					borderColor: "#06367a",
					borderWidth: 1,
				},
			],
		};

		setData(data);
		setLoading(false);
	}

	useEffect(() => {
		getCompanyRevenue();
	}, []);

	if (loading) {
		return <div className="company-revenue">Loading...</div>;
	}

	return (
		<div className="company-revenue">
			<h2 className="text-display-s color-primary">Company Revenue</h2>
			<div className="chart-wrapper">
				<Line
					ref={ref}
					datasetIdKey="id"
					data={data}
				/>
			</div>
		</div>
	);
}
