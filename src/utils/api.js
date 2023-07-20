/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import axios from 'axios';

const language = 'en';
const apiKey = 'a06be27671514c478d0102205231207';
const yes = 'yes'


export const fetchDataFromApi = async (location, DateEndpoint, lat, lon) => {
    // console.log("🚀 ~ file: api.js:11 ~ fetchDataFromApi ~ DateEndpoint:", DateEndpoint)
    // console.log("🚀 ~ file: api.js:11 ~ fetchDataFromApi ~ location:", location)
    if (lat, lon) {
        location = null
    }
    // ? location  : `${lat} , ${lon}`

    // astronomy
    const current_url = 'http://api.weatherapi.com/v1/current.json';
    const astronomy_url = 'http://api.weatherapi.com/v1/astronomy.json';
    const Forcast_url = `http://api.weatherapi.com/v1/forecast.json`;
    // http://api.weatherapi.com/v1/forecast.json?key=a06be27671514c478d0102205231207&q=Mamu Kanjan&days=7&aqi=no&alerts=no
    try {
        const currentresponse = await axios?.get(`${current_url}?key=${apiKey}&q=${location ? location : `${lat} , ${lon}`}&lang=${language}&aqi=${yes}`);
        const astronomyresponse = await axios?.get(`${astronomy_url}?key=${apiKey}&q=${location}&lang=${language}&dt=${DateEndpoint}`);
        const Forcastresponse = await axios?.get(`${Forcast_url}?key=${apiKey}&q=${location}&days=7&aqi=no&alerts=no`);
        const responseData = {
            currentResponseData: currentresponse?.data,
            astronomyResponseData: astronomyresponse?.data?.astronomy?.astro,
            ForcastresponseResponseData: Forcastresponse?.data?.forecast?.forecastday.slice(1, 7)
        };
        return responseData;
    } catch (error) {
        console.log("Error in fetching API ....");
        throw error;
    }

};


