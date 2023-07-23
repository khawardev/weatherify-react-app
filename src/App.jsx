/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

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
  const { Text, setText } = useContext(Context);

  const { lat, setlat } = useContext(Context);
  const { lon, setlon } = useContext(Context);
  const { islocation, seislocation } = useContext(Context);
  const [Defaultlocation, setDefaultlocation] = useState('Islamabad')


  const { data, error } = useFetch(Text ? Text : Defaultlocation, DateEndpoint);

  useEffect(() => {
    data && setTimeZone(data?.currentResponseData?.location?.tz_id)
  }, [data]);
  useEffect(() => {
    Text && setlat(null)
    Text && setlon(null)
    !lat && seislocation(false)

  }, [Text]);
  useEffect(() => {
    lat && setText(`${lat} , ${lon}`)
    lat && seislocation(true)
  }, [lat]);


  return (
    <>

      <Navbar />
      <ForcastCurrent data={data?.currentResponseData} ForcastData={data?.ForcastresponseResponseData} />
      <Highlights data={data?.currentResponseData} astronomyData={data?.astronomyResponseData} />
      <DayForcast DayForcast={data?.DayForcastresponseResponseData?.hour} />

    </>

  )
}

export default App
