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
  const { data, error } = useFetch(`paris`, { DateEndpoint });

  // console.log("🚀 ~ file: App.jsx:26 ~ App ~ data:", data?.currentResponseData?.location?.lat)

  const [currentTime, setCurrentTime] = useState();
  const [formattedTime, setFormattedTime] = useState();
  const [formattedDate, setFormattedDate] = useState();

  useEffect(() => {
    data && getTimeByLatLong();
  }, [data]);

  const getTimeByLatLong = () => {
    fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=FD18KT7T2N5C&format=json&by=position&lat=${data?.currentResponseData?.location?.lat}&lng=${data?.currentResponseData?.location?.lon}`)
      .then((response) => response.json())
      .then((data) => {
        setCurrentTime(data);
        const dateTimeString = data?.formatted;
        const [dateString, timeString] = dateTimeString.split(' ');
        const [year, month, day] = dateString.split('-');
        const [hours, minutes, seconds] = timeString.split(':');

        const formattedTime = new Date(0, 0, 0, hours, minutes, seconds).toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true
        });


        const formattedDate = new Date(year, month - 1, day).toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        });

        setFormattedTime(formattedTime);
        setFormattedDate(formattedDate);
      })
      .catch((error) => {
        console.error('Error retrieving time:', error);
      });
  };

  // console.log(formattedTime);
  // console.log(formattedDate);





  return (
    <>

      <Navbar />
      <ForcastCurrent data={data?.currentResponseData} ForcastData={data?.ForcastresponseResponseData} formattedTime={formattedTime} />
      <Highlights data={data?.currentResponseData} astronomyData={data?.astronomyResponseData} />
      <DayForcast />

    </>

  )
}

export default App
