// server/index.js

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const axios = require("axios");
const OpenAI = require("openai");
const dotenv = require("dotenv");
const process = require("process");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json());

const openai = new OpenAI({
	apiKey: process.env["OPENAI_API_KEY"],
});

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../aws-app/build")));

app.post("/get-company-data", async (req, res) => {
	const company = req.body.company;

	try {
		const apiResponse = await axios({
			method: "post",
			url: "https://data.soleadify.com/match/v4/companies",
			data: {
				commercial_names: [company],
				address_txt: "Str. Nicolae G. Caramfil 49, București 077190",
			},
			headers: {
				"x-api-key": process.env.VERIDION_API_KEY,
				"Content-type": "application/json",
			},
		});

		res.json({
			success: true,
			data: apiResponse.data,
		});
	} catch (error) {
		res.json({
			success: false,
			data: error,
		});
	}
});

app.post("/generate-reviews", async (req, res) => {
	const companyName = req.body.companyName;

	const chatCompletion = await openai.chat.completions.create({
		messages: [
			{
				role: "user",
				content: `Write a short review about the company ${companyName} , only if you dont have real data , write a mock review , dont write anything else , just the review`,
			},
		],
		model: "gpt-4",
	});

	res.json({
		success: true,
		data: chatCompletion,
	});
});

app.post("/get-company-revenues", async (req, res) => {
	const companyName = req.body.companyName;

	const chatCompletion = await openai.chat.completions.create({
		messages: [
			{
				role: "user",
				content: `Get me the last 4 years financial data about the company ${companyName} , use your database or if you dont have data generate mock data , give me only the 4 numbers in dollars sepparated by commas so i can use them in a chart , dont write anything else , just the numbers with all the decimals`,
			},
		],
		model: "gpt-4",
	});

	res.json({
		success: true,
		data: chatCompletion,
	});
});

// All other GET requests not handled before will return our React app

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../aws-app/build/index.html"));
});

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
