/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaLocationArrow } from 'react-icons/fa';
import { useState } from 'react';
import { useEffect } from 'react';
import Sunny from '../../../assets/113.png';
import ForcastCardSkeleton from './ForcastCardSkeleton';


const Forcastcards = ({ forcats, ForcastData, AvailaibleToday, DayForcast, LocationToday }) => {

    
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
    useEffect(() => {
        const epochs = ForcastData?.map((ForcastData) => ForcastData?.date_epoch) || [];
        setDateEpochs(epochs);
    }, [ForcastData]);

    const daysOfWeek = dateEpochs.map((dateEpochs) => getDayNameFromUTCEpoch(dateEpochs));
    function getDayNameFromUTCEpoch(utcEpoch) {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const date = new Date(utcEpoch * 1000);
        const dayOfWeekIndex = date.getUTCDay();
        const dayName = daysOfWeek[dayOfWeekIndex];
        return dayName;
    }





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



    return (
        <>
            {forcats &&
                <>
                    {ForcastData ?

                        <>
                            {ForcastData?.map((ForcastData, index) => (

                                <div key={index} className="sidebar rounded-2xl p-5 text-center">
                                    <p className="font-semibold text-white-black">{daysOfWeek[index]}</p>
                                    <div className='flex justify-center my-[1.58rem]'>
                                        {ForcastData?.day?.condition?.text === 'Sunny' ? <img className='sm:w-18 ' src={Sunny} alt="" /> : <img className='sm:w-18 ' src={ForcastData?.day?.condition?.icon} alt="" />}
                                    </div>
                                    <p className='rounded-full w-3/5 mx-auto text-white-black' style={{ fontSize: '14px' }}>
                                        {ForcastData?.day?.avgtemp_c === 'Thundery outbreaks possible' ? 'Thundery' : ForcastData?.day?.avgtemp_c.toFixed(0)}°C
                                    </p>
                                    <p className='w-full' style={{ fontSize: '14px' }}>
                                        {ForcastData?.day?.condition?.text === 'Thundery outbreaks possible' ? 'Thundery' : ForcastData?.day?.condition?.text?.split(' ').slice(0, 2).join(' ')}
                                    </p>
                                </div>
                            ))}
                        </>

                        : <ForcastCardSkeleton card={2} />}
                </>
            }




            {AvailaibleToday && (


                <>
                    {Dayapi()?.map((data) => (

                        <div key={data?.time_epoch} className="sidebar rounded-2xl p-5 text-center  w-full min-w-[157px]">
                            <p className="font-semibold text-white-black">{HandleDay(data?.time_epoch)}</p>
                            <div className="flex justify-center my-5">
                                {data?.condition?.text === 'Clear' ? <img className='w-24 ' src={data?.condition?.icon} alt="" /> : <img className='sm:w-18 my-4' src={data?.condition?.icon} alt="" />}
                            </div>
                            <p className="rounded-full w-3/5 mx-auto text-white-black" style={{ fontSize: '14px' }}>
                                {data?.temp_c}°C
                            </p>
                        </div>
                    ))}
                </>

            )}


            {LocationToday &&

                <>
                    {Dayapi()?.map((data, index) => (
                        <div key={index} className="sidebar rounded-2xl p-5 text-center w-full min-w-[157px] ">
                            <p className="font-semibold text-white-black">{HandleDay(data?.time_epoch)}</p>
                            <div className='flex justify-center my-12'>
                                <FaLocationArrow size={33} style={{ transform: `rotate(${index * 45}deg)`, color: '#2298F1' }} />
                            </div>
                            <p className='rounded-full w-3/5 mx-auto text-white-black' style={{ fontSize: '14px' }}>
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