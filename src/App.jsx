/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import './App.scss'
import Navbar from './components/navbar/Navbar'
import { FaHeart } from 'react-icons/fa';

import Highlights from './components/highlights/Highlights';
import DayForcast from './components/dayForcast/DayForcast';
import { useEffect, useState } from 'react';
import useFetch from './hook/UseFetch';
import ForcastCurrent from './components/forcastCurrent/ForcastCurrent';
import { Context } from './context/AppContext';
import { useContext, createContext } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


function App() {


  const {theme, setTheme} = useContext(Context);
  const {baseColor, setbaseColor} = useContext(Context);
  const {highlightColor, sethighlightColor} = useContext(Context);

  const { DateEndpoint, setDateEndpoint } = useContext(Context);
  const { TimeZone, setTimeZone } = useContext(Context);
  const { Text, setText } = useContext(Context);

  const { lat, setlat } = useContext(Context);
  const { lon, setlon } = useContext(Context);
  const { islocation, seislocation } = useContext(Context);
  const [Defaultlocation, setDefaultlocation] = useState('Islamabad')


  const { data, error, loading } = useFetch(Text ? Text : Defaultlocation, DateEndpoint);

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

  const footer = () => {
    return (

      <>
        <div className='mt-10 pb-5  w-11/12 m-auto flex items-center'>
          <hr className='hr-border w-full sm:block  hidden ' />
          <p className='w-full font-bold text-1xl italic flex items-center justify-center text-white-black'  >
            Made with <span className='mx-2'><FaHeart color='#b5a1e5' size={15} /></span> by Khawar Sultan
          </p>
          <hr className='hr-border  w-full sm:block  hidden' />
        </div>
      </>

    )
  }

  return (
    <>
      <div className={` ${theme}`}>
        <SkeletonTheme baseColor={`${baseColor}`} highlightColor={`${highlightColor}`}>

          <Navbar />
          <ForcastCurrent data={data?.currentResponseData} ForcastData={data?.ForcastresponseResponseData} loading={loading} />
          <Highlights data={data?.currentResponseData} astronomyData={data?.astronomyResponseData} />
          <DayForcast DayForcast={data?.DayForcastresponseResponseData?.hour} />
          {footer()}

        </SkeletonTheme>
        
      </div>

    </>

  )
}

export default App
