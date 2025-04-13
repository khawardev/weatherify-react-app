/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from 'axios';
import { useState, useEffect } from 'react';
import { TbWind } from 'react-icons/tb';
import QualityAirCard from '../airQualityCard/QualityAirCard';
import HumPressuresCard from '../humPresCard/HumPressuresCard';
import { Context } from '../../../context/AppContext';
import { useContext } from 'react';
import Skeleton from 'react-loading-skeleton';

const LeftForcast = ({ data }) => {

    const [AQISkeleton, setAQISkeleton] = useState(false)

    const [index, setIndex] = useState();
    const [indexclasss, setIndexclass] = useState();
    const [AQI, setAQI] = useState();
    

    const city = data?.location?.name;
    const aqiValues = [
        AQI?.CO?.aqi,
        AQI?.NO2?.aqi,
        AQI?.O3?.aqi,
        AQI?.PM10?.aqi,

    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.api-ninjas.com/v1/airquality?city=${city}`, {
                    headers: {
                        'X-Api-Key': 'n8xg7zBRKuAyRz8uzyQgSw==Vox8oh3HYHK9xgJP',
                        'Content-Type': 'application/json',
                    },
                });
                setAQIData(response.data.overall_aqi)
                setAQI(response.data);
            } catch (error) {
                console.error('Error: ', error.response ? error.response.data : 'Request failed');
            }
        };

        const setAQIData = (AQI) => {
            let newIndex = '';
            let newIndexClass = '';

            switch (true) {
                case AQI >= 0 && AQI <= 50:
                    newIndex = 'Good';
                    newIndexClass = 'bg-green-500';
                    break;
                case AQI > 50 && AQI <= 100:
                    newIndex = 'Moderate';
                    newIndexClass = 'bg-yellow-500';
                    break;
                case AQI > 100 && AQI <= 200:
                    newIndex = 'Unhealthy';
                    newIndexClass = 'bg-red-500';
                    break;
                case AQI > 200 && AQI <= 300:
                    newIndex = 'Hazardous';
                    newIndexClass = 'bg-purple-500';
                    break;
                default:
                    newIndex = 'Hazardous';
                    newIndexClass = 'bg-purple-500';
                    break;
            }

            setIndex(newIndex);
            setIndexclass(newIndexClass);
        }
        fetchData();
        AQI && setAQISkeleton(true);
    }, [city,AQI]);


    return (
        <>
            <div className='w-full sm:my-10 my-5'>
                <>
                    {
                        AQISkeleton && (
                            <section className="sidebar-darker border rounded-3xl p-6">
                                <div className='flex justify-between'>
                                    <p className='mb-4 font-semibold'>Air Quality Index</p>
                                    <div>
                                        <p className={`px-3 sm:mx-3 mx-0 ${indexclasss} text-white-black rounded-full font-semibold`} style={{ fontSize: '14px' }}>{index}</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="py-8">
                                        <div className='sm:text-6xl text-5xl text-white-black'>
                                            <TbWind />
                                        </div>
                                    </div>
                                    <div className="grid xl:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6 py-8 items-center">
                                        {aqiValues && (
                                            <>
                                                {aqiValues.map((data, index) => (
                                                    <div key={index}>
                                                        <QualityAirCard data={data} index={index} />
                                                        {/* Number={value.toFixed(0)} */}
                                                    </div>
                                                ))}
                                            </>
                                        )}
                                    </div>
                                </div>
                            </section>
                        ) 
                    }

                </>



                <div className="sm:flex sm:gap-5 gap-4 mt-5">
                    <HumPressuresCard Text={'Humidity'} Icon={'WiHumidity'} Number={data?.current?.humidity} power={'%'} />
                    <HumPressuresCard Text={'Pressure'} Number={data?.current?.pressure_mb} power={'hpa'} />
                </div>
            </div>


        </>
    )
}

export default LeftForcast