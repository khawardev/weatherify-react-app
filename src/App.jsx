/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import './App.scss'
import Navbar from './components/navbar/Navbar'
import Highlights from './components/highlights/Highlights';
import DayForcast from './components/dayForcast/DayForcast';
import { useEffect, useState, useCallback } from 'react';
import useFetch from './hook/UseFetch';
import ForcastCurrent from './components/forcastCurrent/ForcastCurrent';
import { Context } from './context/AppContext';
import { useContext, createContext } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


function App() {


  const { theme, setTheme } = useContext(Context);
  const { baseColor, setbaseColor } = useContext(Context);
  const { highlightColor, sethighlightColor } = useContext(Context);

  const { DateEndpoint, setDateEndpoint } = useContext(Context);
  const { TimeZone, setTimeZone } = useContext(Context);
  const { Text, setText } = useContext(Context);

  const { lat, setlat } = useContext(Context);
  const { lon, setlon } = useContext(Context);
  const { islocation, seislocation } = useContext(Context);
  const Defaultlocation = 'Islamabad'


  const { data, error, loading } = useFetch(Text ? Text : Defaultlocation, DateEndpoint);

  useEffect(() => {
    data && setTimeZone(data?.currentResponseData?.location?.tz_id)
    Text && setlat(null)
    Text && setlon(null)
    !lat && seislocation(false)
    lat && setText(`${lat} , ${lon}`)
    lat && seislocation(true)


  }, [data, Text, lat]);






  return (
    <>
      <div className={` ${theme}`}>
        <SkeletonTheme baseColor={`${baseColor}`} highlightColor={`${highlightColor}`}>
          <Navbar />
          <ForcastCurrent data={data?.currentResponseData} ForcastData={data?.ForcastresponseResponseData} loading={loading} />
          <Highlights data={data?.currentResponseData} astronomyData={data?.astronomyResponseData} />
          <DayForcast DayForcast={data?.DayForcastresponseResponseData?.hour} />
        </SkeletonTheme>

      </div>

    </>

  )
}

export default App
