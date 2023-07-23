/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useState } from 'react';
const language = 'en';
const apiKey = 'a06be27671514c478d0102205231207';
const yes = 'yes'

export const fetchDataFromApi = async (location, DateEndpoint) => {


    const current_url = 'https://api.weatherapi.com/v1/current.json';
    const astronomy_url = 'https://api.weatherapi.com/v1/astronomy.json';
    const Forcast_url = `https://api.weatherapi.com/v1/forecast.json`;
    // http://api.weatherapi.com/v1/forecast.json?key=a06be27671514c478d0102205231207&q=Mamu Kanjan&days=7&aqi=no&alerts=no
    try {
        const currentresponse = await axios?.get(`${current_url}?key=${apiKey}&q=${location}&lang=${language}&aqi=${yes}`);
        const astronomyresponse = await axios?.get(`${astronomy_url}?key=${apiKey}&q=${location}&lang=${language}&dt=${DateEndpoint}`);
        const Forcastresponse = await axios?.get(`${Forcast_url}?key=${apiKey}&q=${location}&days=7&aqi=no&alerts=no`);
        const responseData = {
            currentResponseData: currentresponse?.data,
            astronomyResponseData: astronomyresponse?.data?.astronomy?.astro,
            ForcastresponseResponseData: Forcastresponse?.data?.forecast?.forecastday.slice(1, 7),
            DayForcastresponseResponseData: Forcastresponse?.data?.forecast?.forecastday?.[0],
        };

        return responseData;
    } catch (error) {
        console.log("Error in fetching API ....");
        throw error;
    }

};


