/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import axios from 'axios';

const language = 'en';
const apiKey = 'a06be27671514c478d0102205231207';
const yes = 'yes'

// const date='2023-07-17'; &dt=${date}
export const fetchDataFromApi = async (location,DateEndpoint) => {
    console.log("🚀 ~ file: api.js:11 ~ fetchDataFromApi ~ DateEndpoint:", DateEndpoint)
 
    const api_url = 'http://api.weatherapi.com/v1/current.json';

    try {
        const response = await axios?.get(`${api_url}?key=${apiKey}&q=${location}&lang=${language}&aqi=${yes}`);
        return response?.data;
    } catch (error) {
        console.log("Error in fetching API: ", error);
        throw error;
    }

};


