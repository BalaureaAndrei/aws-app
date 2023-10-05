import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainContent from "./components/content/MainContent";
import Logo from "./assets/main-logo.png";
import Skeleton from "./components/helpers/Skeleton";
import CompanyChangeModal from "./components/modals/CompanyChangeModal";

const dummyData = {
	companyName: "Veridion",
	companyLogo: Logo,
	companyDescription:
		"We utilize advanced web scraping techniques to acquire vast amounts of data from a multitude of sources, such as supplier websites, online marketplaces, and social media platforms. Our data acquisition engine is designed to capture and structure large volumes of unstructured data to make it easily searchable and usable. We understand that data can quickly become outdated, which is why we constantly refresh our data to ensure it is accurate and up-to-date. Our data is refreshed on a regular basis, ensuring that our clients have access to the most current and reliable data available. This allows businesses to make informed decisions with confidence and minimize their risk.",
	mainData: {
		employees: 145,
		averageSalary: 2000,
		yearFounded: 1974,
		industry: "IT & Technology",
	},
};

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState([]);
	const [isModalOpened, setIsModalOpened] = useState(false);
	const [company, setCompany] = useState("Veridion");
	const [address, setAddress] = useState(
		"Str. Nicolae G. Caramfil 49, București 077190"
	);
	const [isMobileHeaderOpened, setIsMobileHeaderOpened] = useState(false);

	async function fetchData(company) {
		try {
			setIsLoading(true);
			const response = await fetch("/get-company-data", {
				method: "POST",
				body: JSON.stringify({ company, address }),
				headers: {
					"Content-Type": "application/json",
				},
			});
			const responseData = await response.json();
			console.log("responseData", responseData);

			const reworkedData = {
				companyName: responseData.data.company_name,
				companyLogo: Logo,
				companyDescription: responseData.data.long_description,
				companyEmail: responseData.data.primary_email,
				companyPhone: responseData.data.primary_phone,
				companyWebsite: responseData.data.website_url,
				sector: responseData.data.sics_sector.label,
				subSector: responseData.data.sics_subsector.label,
				tags: responseData.data.business_tags[0],
				mainData: {
					employees: responseData.data.employee_count,
					averageSalary: 2000,
					yearFounded: responseData.data.year_founded,
					industry: responseData.data.sics_industry.label,
					companyAdress:
						responseData.data.main_street + " , " + responseData.data.main_city,
				},
			};

			setData(reworkedData);
			console.log("data", reworkedData);
			setIsLoading(false);
		} catch (error) {
			console.log("error", error);
			setData(dummyData);
			setIsLoading(false);
		}
	}

	useEffect(() => {
		async function startApp() {
			await fetchData(company);
			console.log("data", company);
		}
		startApp();
	}, [company]);

	if (isLoading) {
		return <Skeleton />;
	}

	return (
		<div className="App">
			<div className="app-wrapper">
				<Header
					data={data}
					setIsModalOpened={setIsModalOpened}
					isMobileHeaderOpened={isMobileHeaderOpened}
					setIsMobileHeaderOpened={setIsMobileHeaderOpened}
				></Header>
				<div className="container">
					<MainContent
						data={data}
						setIsMobileHeaderOpened={setIsMobileHeaderOpened}
					></MainContent>
					{/* <Footer data={data}></Footer> */}
				</div>
			</div>
			<CompanyChangeModal
				isOpened={isModalOpened}
				setIsModalOpened={setIsModalOpened}
				setCompany={setCompany}
			/>
		</div>
	);
}

export default App;
