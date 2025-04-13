/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import './App.scss'
import Navbar from './components/navbar/Navbar'
import { FaHeart } from 'react-icons/fa';
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






  const footer = useCallback(() => {
    return (
      <>
        <div className="md:flex items-center whitespace-nowrap md:space-x-7 pt-10 pb-5 w-11/12 mx-auto">
          <div className="flex items-center md:flex-row-reverse gap-2 md:w-full">
            <div className="select-none flex items-center gap-2">
              <p className="sohne_bold font-bold ">
                <span className="text-muted-foreground"></span>
                <a
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/khawardev/weatherify-react-app"
                >
                  Github
                </a>
              </p>
              <img
                className="sm:block  rounded-lg"
                src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png"
                alt="GitHub Logo"
                width={25}
                height={100}
              />
            </div>
            <div className="select-none flex items-center">
              <p className="sohne_bold font-bold">
                <span className="text-muted-foreground">By</span>{" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://khawarsultan.vercel.app"
                >
                  Khawar Sultan
                </a>
              </p>
              <img  src={'https://attic.sh/r44qhgzfghw52b64th6ixln2hfbx'} alt='s' width={30} height={100} />
            </div>
          </div>
        </div>
      </>
    );
  }, []);


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
