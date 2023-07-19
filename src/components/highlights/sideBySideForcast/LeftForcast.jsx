/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { TbWind } from 'react-icons/tb';
import QualityAirCard from '../airQualityCard/QualityAirCard';
import HumPressuresCard from '../humPresCard/HumPressuresCard';


const LeftForcast = ({ data }) => {

    const airQualityData = data?.current?.air_quality;
    const firstFourElements = airQualityData ? Object.entries(airQualityData).slice(0, 4) : [];
    const AQI = airQualityData ? Object.entries(airQualityData).slice(-1)[0][1] : null;

    // console.log("🚀 ~ file: LeftForcast.jsx:14 ~ LeftForcast ~ AQI:", AQI)
    const [index, setIndex] = useState();
    const [indexclasss, setIndexclass] = useState();

    useEffect(() => {
        let newIndex = '';
        let newIndexClass = '';
        switch (AQI) {
            case 1:
            case 2:
            case 3:
                newIndex = 'Good';
                newIndexClass = 'bg-green-500';
                break;
            case 4:
            case 5:
            case 6:
                newIndex = 'Moderate';
                newIndexClass = 'bg-yellow-500';
                break;
            case 7:
            case 8:
            case 9:
                newIndex = 'Unhealthy';
                newIndexClass = 'bg-red-500';
                break;
            default:
                newIndex = 'Hazardous';
                newIndexClass = 'bg-purple-500';
                break;
        }

        setIndex(newIndex);
        setIndexclass(newIndexClass);
    }, [AQI]);






    return (
        <>
            <div className='w-full sm:my-10 my-5'>
                <div className=" sidebar-darker rounded-2xl  p-6 ">
                    <div className='flex justify-between'>
                        <p className='mb-4 font-semibold'>Air Quality Index</p>
                        <div>


                            {data ? <p className={`px-3 sm:mx-3 mx-0   ${indexclasss} text-white rounded-full font-semibold `} style={{ fontSize: '13px' }}>{index}</p> : 'loading...'}
                        </div>
                    </div>
                    <div className=" flex justify-between items-center  ">
                        <div className="py-8">
                            <div className='sm:text-6xl text-5xl text-white'>
                                <TbWind />
                            </div>
                        </div>
                        <div className=" grid xl:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6 py-8  items-center">

                            {data ?
                                <>
                                    {firstFourElements.map(([key, value]) => (
                                        <div key={key}>
                                            <QualityAirCard data={data} Text={key.toUpperCase()} Number={value.toFixed(0)} />
                                        </div>
                                    ))}
                                </>
                                :
                                'loading....'
                            }

                        </div>
                    </div>
                </div>


                <div className="sm:flex sm:gap-5 gap-4 mt-5">
                    <HumPressuresCard Text={'Humidity'} Icon={'WiHumidity'} Number={data?.current?.humidity} power={'%'} />
                    <HumPressuresCard Text={'Pressure'} Number={data?.current?.pressure_mb} power={'hpa'} />
                </div>
            </div>


        </>
    )
}

export default LeftForcast