/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import './App.css'
import Navbar from './components/navbar/Navbar'

import Highlights from './components/highlights/Highlights';
import DayForcast from './components/dayForcast/DayForcast';
import { useEffect, useState } from 'react';
import useFetch from './hook/UseFetch';

import ForcastCurrent from './components/forcastCurrent/ForcastCurrent';
import { Context } from './context/Contextapi';
import { useContext } from 'react';



function App() {


  // http://api.weatherapi.com/v1/astronomy.json?key=a06be27671514c478d0102205231207&q=paris&dt=2023-07-17
  // http://api.weatherapi.com/v1/astronomy.json?key=a06be27671514c478d0102205231207&q=paris&aqi=yes&dt=2023-07-17
  // console.log("🚀 ~ file: App.jsx:25 ~ App ~ Endpoint:", DateEndpoint)
  const { DateEndpoint, setDateEndpoint } = useContext(Context);
  const { data, error } = useFetch(`uk`, { DateEndpoint });
  



  return (
    <>

      <Navbar />
      <ForcastCurrent data={data} />
      <Highlights data={data} />
      <DayForcast />

    </>

  )
}

export default App
