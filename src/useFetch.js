import { useState } from 'react';

const url = 'https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=Washington%2CDC%2CUSA&contentType=csv&unitGroup=us&shortColumnNames=0';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '44b16709fcmsh7f8b4858a0b5406p142d3fjsnbc9ef7bf9d2c',
		'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

export const useFetch = async (url, options) => {
const response = await fetch(url, options);
const data = await response.json();

return data,
}