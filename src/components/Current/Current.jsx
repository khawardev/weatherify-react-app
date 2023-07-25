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
import Sunny from '../../assets/113.png';
import Skeleton from 'react-loading-skeleton';
import ForcastCardSkeleton from '../forcast/forcastcards/ForcastCardSkeleton';









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




    return (

        <>

            <div className='my-5 '>
                <p className=' text-white  px-1 text-xl font-semibold mb-5'>Current Weather</p>
                {data ?
                    <div className="sidebar rounded-2xl px-5 py-14 " >
                        <p className=" text-xl  font-semibold mb-3 text-white"> Now </p>
                        <div className='flex items-center justify-between '>
                            <div>
                                <p className="text-white font-semibold sm:text-6xl text-5xl ">
                                    {data?.current?.temp_c.toFixed(0)}°C
                                </p>
                            </div>
                            <div className='text-white sm:my-7  my-4  '>
                                {data?.current?.condition?.text === 'Sunny' ? <img className='w-20' src={Sunny} alt="" /> : (data?.current?.condition?.text === 'Clear' ?
                                    <img className='w-24' src={data?.current?.condition?.icon} alt="" /> :
                                    <img className='sm:w-20' src={data?.current?.condition?.icon} alt="" />
                                )}
                            </div>

                        </div>

                        <p className='font-semibold'>{data?.current?.condition?.text}</p>

                        <hr className="hr-border  my-5" />
                        <div className='flex gap-2 items-center mb-4'>
                            <div className='text-white mr-1'>
                                <BiSolidTimeFive size={20} />
                            </div>
                            {data ?
                                <div>
                                    {Timedata}
                                </div>

                                : <Skeleton />
                            }
                        </div>

                        <div className='flex gap-3 items-center mb-4'>
                            <div className='text-white '>
                                <CgCalendarToday size={20} />
                            </div>
                            <div>
                                {dayName} - {formattedDate}
                            </div>

                        </div>

                        <div className='flex gap-3 items-center'>
                            <div className='text-white '>
                                <FaLocationDot size={18} />
                            </div>
                            <div>
                                {data?.location?.name}, {data?.location?.country}
                            </div>
                        </div>

                    </div>



                    : <Skeleton style={{ borderRadius: '1rem' }} height={454} />}

            </div>
        </>



    )

}

export default Current