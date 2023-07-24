/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { WiCloud, WiMoonFull, WiDaySunny, WiThunderstorm, WiDayRainMix, WiDaySunnyOvercast, WiNightThunderstorm, WiNightRain } from 'react-icons/wi';
import { HiMoon } from 'react-icons/hi';
import { FaLocationArrow } from 'react-icons/fa';
import { IoPartlySunnyOutline, IoRainyOutline } from 'react-icons/io5';
import { BsCloudFog, BsCloudRainHeavy, BsCloudLightningRain } from 'react-icons/bs';
import { PiCloudRain } from 'react-icons/pi';
import { FiCloudRain } from 'react-icons/fi';
import { BiCloudLightRain } from 'react-icons/bi';
import { RiHeavyShowersLine, RiMoonClearLine } from 'react-icons/ri';
import { useState } from 'react';
import { useEffect, useContext } from 'react';
import { Context } from '../../../context/AppContext';


import Sunny from '../../../assets/113.png';


const Forcastcards = ({ ForcastData, AvailaibleToday, DayForcast, LocationToday }) => {
    const Dayapi = () => {
        function extractObjectsWithGap(apiResponse, gap) {
            const result = [];
            let index = 0;
            while (index < apiResponse?.length) {
                result.push(apiResponse[index]);
                index += gap;
            }
            return result;
        }
        const extractedObjects = extractObjectsWithGap(DayForcast, 3);
        return (extractedObjects)
    }







    const [dateEpochs, setDateEpochs] = useState([]);
    const [DayDateEpochs, setDayDateEpochs] = useState([]);
    // const [avgtemp_c, setavgtemp_c] = useState([]);
    useEffect(() => {
        // setavgtemp_c(temp)
        const epochs = ForcastData?.map((ForcastData) => ForcastData?.date_epoch) || [];
        const dayEpoach = DayForcast?.map((DayForcast) => DayForcast?.time_epoch) || [];
        const temp = ForcastData?.map((ForcastData) => ForcastData?.day?.condition?.text) || [];
        setDateEpochs(epochs);
        setDayDateEpochs(dayEpoach)
    }, [ForcastData]);

    const daysOfTime = DayDateEpochs.map((DayDateEpochs) => getDayNameFromUTCEpoch(DayDateEpochs));
    const daysOfWeek = dateEpochs.map((dateEpochs) => getDayNameFromUTCEpoch(dateEpochs));
    function getDayNameFromUTCEpoch(utcEpoch) {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const date = new Date(utcEpoch * 1000);
        const dayOfWeekIndex = date.getUTCDay();
        const dayName = daysOfWeek[dayOfWeekIndex];
        return dayName;
    }
    const getWeatherIcon = (condition) => {
        switch (condition) {
            case 'Partly cloudy':
                return <IoPartlySunnyOutline className='my-7' size={70} />;
            case 'Sunny':
                return <WiDaySunny size={70} className='my-7' />;
            case 'Mist':
                return <BsCloudFog size={70} className='my-7' />;
            case 'Heavy rain':
                return <BsCloudRainHeavy size={70} className='my-[1.69rem]' />;
            case 'Moderate or heavy rain with thunder':
                return <WiThunderstorm size={70} className='my-7' />;
            case 'Moderate rain':
                return <IoRainyOutline size={70} className='my-7' />;
            case 'Patchy rain possible':
                return <WiNightRain size={75} className='my-[1.45rem]' />;
            case 'Overcast':
                return <WiDaySunnyOvercast size={85} className='my-[1.20rem]' />;
            case 'Light rain':
            case 'Light rain shower':
                return <PiCloudRain size={70} className='my-7' />;
            case 'Torrential rain shower':
                return <FiCloudRain size={70} className='my-7' />;
            case 'Thundery outbreaks possible':
                return <BsCloudLightningRain size={70} className='my-7' />;
            case 'Light drizzle':
                return <BiCloudLightRain size={70} className='my-7' />;
            case 'Patchy light rain with thunder':
                return <WiNightThunderstorm size={70} className='my-7' />;
            case 'Moderate or heavy rain shower':
                return <RiHeavyShowersLine size={70} className='my-7' />;
            case 'Clear':
                return <RiMoonClearLine size={65} className='my-7' />;
            default:
                return <WiCloud size={80} className='my-7' />;
        }
    };




    const HandleDay = (Epoach) => {
        const currentTimeEpoch = Epoach * 1000;
        const currentTime = new Date(currentTimeEpoch);
        let hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        const time12hr = `${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`;

        return (time12hr);

    }

    const rotationAngles = Array.from({ length: 8 }, (_, index) => index * 45);


    return (
        <>

            {ForcastData?.map((ForcastData, index) => (
                <div key={index} className="sidebar rounded-2xl p-5 text-center">
                    <p className="font-semibold text-white">{daysOfWeek[index]}</p>
                    <div className='flex justify-center my-[1.58rem]'>
                        {ForcastData?.day?.condition?.text === 'Sunny' ? <img className='sm:w-18 ' src={Sunny} alt="" /> : <img className='sm:w-18 ' src={ForcastData?.day?.condition?.icon} alt="" />}
                        {/* <img className='sm:w-18 ' src={ForcastData?.day?.condition?.icon} alt="" /> */}
                        {/* {getWeatherIcon(ForcastData?.day?.condition?.text)} */}
                    </div>
                    <p className='rounded-full w-3/5 mx-auto text-white' style={{ fontSize: '14px' }}>
                        {ForcastData?.day?.avgtemp_c === 'Thundery outbreaks possible' ? 'Thundery' : ForcastData?.day?.avgtemp_c.toFixed(0)}°C
                    </p>
                    <p className='w-full' style={{ fontSize: '14px' }}>
                        {ForcastData?.day?.condition?.text === 'Thundery outbreaks possible' ? 'Thundery' : ForcastData?.day?.condition?.text?.split(' ').slice(0, 2).join(' ')}
                        {/* {ForcastData?.day?.condition?.text?.split(' ').slice(0, 2).join(' ')} */}
                    </p>
                </div>
            ))}




            {AvailaibleToday && (
                <>
                    {Dayapi()?.map((data) => (
                        <div key={data?.time_epoch} className="sidebar rounded-2xl p-5 text-center  w-full min-w-[150px]">
                            <p className="font-semibold text-white">{HandleDay(data?.time_epoch)}</p>
                            <div className="flex justify-center my-5">
                                {data?.condition?.text === 'Clear' ? <img className='w-24 ' src={data?.condition?.icon} alt="" /> : <img className='sm:w-18 my-4' src={data?.condition?.icon} alt="" />}


                            </div>
                            <p className="rounded-full w-3/5 mx-auto text-white" style={{ fontSize: '14px' }}>
                                {data?.temp_c}°C
                            </p>
                        </div>
                    ))}
                </>
            )}


            {LocationToday &&
                <>
                    {Dayapi()?.map((data, index) => (
                        <div key={index} className="sidebar rounded-2xl p-5 text-center w-full min-w-[150px] ">
                            <p className="font-semibold text-white">{HandleDay(data?.time_epoch)}</p>
                            <div className='flex justify-center my-12'>
                                <FaLocationArrow size={33} style={{ transform: `rotate(${index * 45}deg)`, color: '#2298F1' }} />
                            </div>
                            <p className='rounded-full w-3/5 mx-auto text-white' style={{ fontSize: '14px' }}>
                                {data?.wind_kph.toFixed(0)} km/h
                            </p>
                        </div>
                    ))}

                </>
            }





        </>
    )
}

export default Forcastcards