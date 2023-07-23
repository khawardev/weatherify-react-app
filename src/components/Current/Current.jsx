/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { WiCloud, WiMoonFull, WiDaySunny, WiThunderstorm, WiDayRainMix, WiDaySunnyOvercast, WiNightThunderstorm } from 'react-icons/wi';
import { HiMoon } from 'react-icons/hi';
import { FaLocationArrow } from 'react-icons/fa';
import { IoPartlySunnyOutline, IoRainyOutline } from 'react-icons/io5';
import { BsCloudFog, BsCloudRainHeavy, BsCloudLightningRain } from 'react-icons/bs';
import { PiCloudRain } from 'react-icons/pi';
import { FiCloudRain } from 'react-icons/fi';
import { BiCloudLightRain } from 'react-icons/bi';
import './current.scss'
import { BsFillCalendarEventFill } from 'react-icons/bs';
import { FaLocationDot } from 'react-icons/fa6';
import { BiSolidTimeFive } from 'react-icons/bi';
import { CgCalendarToday } from 'react-icons/cg';
import useFetch from '../../hook/UseFetch';
import { useState, useEffect, useContext } from 'react';
import { Context } from '../../context/AppContext';
const Current = ({ data }) => {



    const { DateEndpoint, setDateEndpoint } = useContext(Context);
    const { utcEpoch, setutcEpoch } = useContext(Context);
    const { localDate, setlocalDate } = useContext(Context);
    const { dayName, setdayName } = useContext(Context);
    const { formattedDate, setformattedDate } = useContext(Context);
    const { Timedata, setTimedata } = useContext(Context);


    useEffect(() => {
        setutcEpoch(data?.location?.localtime_epoch);
        setDateEndpoint(data && localDate)
    }, [data, localDate]);

    const getWeatherIcon = (condition) => {
        switch (condition) {
            case 'Partly cloudy':
                return <IoPartlySunnyOutline size={95} />;
            case 'Sunny':
                return <WiDaySunny size={95} />;
            case 'Mist':
                return <BsCloudFog size={95} />;
            case 'Heavy rain':
                return <BsCloudRainHeavy size={95} />;
            case 'Moderate or heavy rain with thunder':
                return <WiThunderstorm size={95} />;
            case 'Moderate rain':
                return <IoRainyOutline size={95} />;
            case 'Patchy rain possible':
                return <WiDayRainMix size={95} />;
            case 'Overcast':
                return <WiDaySunnyOvercast size={95} />;
            case 'Light rain':
            case 'Light rain shower':
                return <PiCloudRain size={95} />;
            case 'Torrential rain shower':
                return <FiCloudRain size={95} />;
            case 'Thundery outbreaks possible':
                return <BsCloudLightningRain size={95} />;
            case 'Light drizzle':
                return <BiCloudLightRain size={95} />;
            case 'Patchy light rain with thunder':
                return <WiNightThunderstorm size={95} />;
            default:
                return <WiCloud size={95} />;
        }
    };



    return (

        <>

            <div className=' my-5 '>
                <p className=' text-white  px-1 text-xl font-semibold mb-5'>Current Weather</p>

                <div className="sidebar rounded-2xl px-5 py-14 " >

                    <p className=" text-xl  font-semibold mb-3 text-white"> Now </p>
                    <div className='flex items-center justify-between '>
                        <div>
                            <p className="text-white font-semibold sm:text-6xl text-5xl ">
                                {data ? `${data?.current?.temp_c.toFixed(0)}°C` : 'loading...'}
                            </p>
                        </div>
                        <div className='text-white  my-7 '>
                            {data ? getWeatherIcon(data?.current?.condition?.text) : 'loading...'}
                            {/* {getWeatherIcon(data?.current?.condition?.text)} */}
                            {/* <WiCloud /> */}
                        </div>

                    </div>

                    <p className='font-semibold'>{data ? `${data?.current?.condition?.text}` : 'loading...'}</p>

                    <hr className="  my-5" style={{border:'1px solid #6E6E70'}} />

                    <div className='flex gap-2 items-center mb-4'>
                        <div className='text-white mr-1'>
                            <BiSolidTimeFive size={20} />
                        </div>
                        <div>
                            {data ? `${Timedata}` : 'loading...'}
                        </div>
                    </div>
                    <div className='flex gap-3 items-center mb-4'>
                        <div className='text-white '>
                            <CgCalendarToday size={20} />
                        </div>
                        <div>
                            {data ? `${dayName} - ${formattedDate}` : 'loading...'}
                        </div>

                    </div>
                    <div className='flex gap-3 items-center'>
                        <div className='text-white '>
                            <FaLocationDot size={18} />
                        </div>
                        <div>
                            {data ? `${data?.location?.name}, ${data?.location?.country}` : 'loading...'}
                        </div>

                    </div>
                </div>
            </div>
        </>

    )

}

export default Current