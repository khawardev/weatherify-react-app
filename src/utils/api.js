/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import axios from 'axios';

const language = 'en';
const apiKey = 'a06be27671514c478d0102205231207';
const yes = 'yes'

// const date='2023-07-17'; &dt=${DateEndpoint}
export const fetchDataFromApi = async (location, DateEndpoint) => {
    // astronomy
    const current_url = 'http://api.weatherapi.com/v1/current.json';
    const astronomy_url = 'http://api.weatherapi.com/v1/astronomy.json';
    const Forcast_url = `http://api.weatherapi.com/v1/forecast.json?key=a06be27671514c478d0102205231207&q=${location}&days=7&aqi=no&alerts=no`;
    const timezone_url = `http://api.timezonedb.com/v2.1/get-time-zone?key=FD18KT7T2N5C&format=json&by=position&lat=30.8944964&lng=72.7196354`
    try {
        const currentresponse = await axios?.get(`${current_url}?key=${apiKey}&q=${location}&lang=${language}&aqi=${yes}`);
        const astronomyresponse = await axios?.get(`${astronomy_url}?key=${apiKey}&q=${location}&lang=${language}&dt=${DateEndpoint}`);
        const Forcastresponse = await axios?.get(`${Forcast_url}`);
        const responseData = {
            currentResponseData: currentresponse?.data,
            astronomyResponseData: astronomyresponse?.data?.astronomy?.astro,
            ForcastresponseResponseData: Forcastresponse?.data?.forecast?.forecastday.slice(1, 7)
        };

        return responseData;
        // return currentresponse?.data;
    } catch (error) {
        console.log("Error in fetching API: ", error);
        throw error;
    }

};


