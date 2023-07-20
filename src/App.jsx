/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
// IoMdSunny     
// IoIosPartlySunny

import './App.css'
import Navbar from './components/navbar/Navbar'

import Highlights from './components/highlights/Highlights';
import DayForcast from './components/dayForcast/DayForcast';
import { useEffect, useState } from 'react';
import useFetch from './hook/UseFetch';

import ForcastCurrent from './components/forcastCurrent/ForcastCurrent';
import { Context } from './context/AppContext';
import { useContext } from 'react';



function App() {

  const { DateEndpoint, setDateEndpoint } = useContext(Context);
  const { TimeZone, setTimeZone } = useContext(Context);
  
  const { lat, setlat } = useContext(Context);
  const { lon, setlon } = useContext(Context);
  
  const { data, error } = useFetch(`Mamu Kanjan`, DateEndpoint , lat , lon );


  useEffect(() => {
    data && setTimeZone(data?.currentResponseData?.location?.tz_id)
    setlat(lat)
    setlon(lon)
  }, [data,lon,lat]);




  return (
    <>

      <Navbar />
      <ForcastCurrent data={data?.currentResponseData} ForcastData={data?.ForcastresponseResponseData} />
      <Highlights data={data?.currentResponseData} astronomyData={data?.astronomyResponseData} />
      <DayForcast />

    </>

  )
}

export default App
