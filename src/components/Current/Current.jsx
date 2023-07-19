/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './current.scss'
import { BsFillCalendarEventFill } from 'react-icons/bs';
import { FaLocationDot } from 'react-icons/fa6';
import { WiCloud } from 'react-icons/wi';
import { BiSolidTimeFive } from 'react-icons/bi';
import { WiDaySunny } from 'react-icons/wi';
import useFetch from '../../hook/UseFetch';
import { useState, useEffect, useContext } from 'react';
import { Context } from '../../context/AppContext';
const Current = ({ data,formattedTime }) => {



    const { DateEndpoint, setDateEndpoint } = useContext(Context);
    const { utcEpoch, setutcEpoch } = useContext(Context);
    const { localDate, setlocalDate } = useContext(Context);
    const { dayName, setdayName } = useContext(Context);
    const { formattedDate, setformattedDate } = useContext(Context);
    const { modifiedTime, setmodifiedTime } = useContext(Context);
    // console.log("🚀 ~ file: Current.jsx:23 ~ Current ~ modifiedTime:", modifiedTime)



    useEffect(() => {
        setutcEpoch(data?.location?.localtime_epoch);
        setDateEndpoint(data && localDate)
    }, [data,localDate]);





    return (

        <>

            <div className=' my-5 '>
                <p className=' text-white  px-1 text-xl font-semibold mb-5'>Current Weather</p>

                <div className="sidebar rounded-2xl px-5 py-12 " >

                    <p className=" text-xl  font-semibold mb-3 text-white"> Now </p>
                    <div className='flex items-center justify-between '>
                        <div>
                            <p className="text-white font-semibold sm:text-6xl text-5xl ">
                                {data ? `${data?.current?.temp_c}°C` : 'loading...'}
                            </p>
                        </div>
                        <div className='text-white sm:text-9xl text-8xl  '>
                            <WiCloud />
                        </div>

                    </div>

                    <p className='font-semibold'>{data ? `${data?.current?.condition?.text}` : 'loading...'}</p>

                    <hr className=" border-slate-400 my-5" />

                    <div className='flex gap-2 items-center mb-4'>
                        <div className='text-white '>
                            <BiSolidTimeFive size={20} />
                        </div>
                        <div>
                            {data ? `${formattedTime}` : 'loading...'}

                        </div>

                    </div>
                    <div className='flex gap-3 items-center mb-4'>
                        <div className='text-white '>
                            <BsFillCalendarEventFill size={16} />
                        </div>
                        <div>
                            {data ? ` ${dayName} - ${formattedDate}` : 'loading...'}
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