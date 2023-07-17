/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './current.scss'
import { useState, useEffect,useContext } from 'react';
import { BsFillCalendarEventFill } from 'react-icons/bs';
import { FaLocationDot } from 'react-icons/fa6';
import { WiCloud } from 'react-icons/wi';
import { BiSolidTimeFive } from 'react-icons/bi';
import { WiDaySunny } from 'react-icons/wi';
import useFetch from '../../hook/UseFetch';
import { Context } from '../../context/Contextapi';
const Current = ({ data }) => {

    const {DateEndpoint, setDateEndpoint} = useContext(Context);

    const datetime = data?.location?.localtime.split(' ')[1];
    const dateStr = data?.location?.localtime.split(' ')[0];
    { dateStr ? setDateEndpoint(dateStr) : '' }

    // date, month year
    const date = new Date(dateStr);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    // Day
    const currentDate = new Date();
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = weekdays[currentDate.getDay()];

    // Am or Pm
    const [isPm, setisPm] = useState("");

    useEffect(() => {
        if (datetime) {
            const hour = parseInt(datetime.split(':')[0]);
            const isPM = hour >= 12;
            setisPm(isPM ? " pm" : " am");
        }
    }, [datetime]);



    return (

        <>

            <div className=' my-5 '>
                <p className=' text-white  px-1 text-xl font-semibold mb-5'>Current Weather</p>

                <div className="sidebar rounded-2xl px-5 py-12 " >

                    <p className=" text-xl  font-semibold mb-3 text-white"> Now </p>
                    <div className='flex items-center justify-between '>
                        <div>
                            <p className="text-white font-semibold sm:text-6xl text-5xl ">
                                {data === null ? 'loading...' : `${data?.current?.temp_c}°C`}
                            </p>
                        </div>
                        <div className='text-white sm:text-9xl text-8xl  '>
                            <WiCloud />
                        </div>

                    </div>

                    <p className='font-semibold'>{data === null ? 'loading...' : `${data?.current?.condition?.text}`}</p>

                    <hr className=" border-slate-400 my-5" />

                    <div className='flex gap-3 items-center mb-4'>
                        <div className='text-white '>
                            <BiSolidTimeFive size={20} />
                        </div>
                        <div>
                            {data?.location?.localtime.split(' ')[1]}{isPm}
                        </div>

                    </div>
                    <div className='flex gap-3 items-center mb-4'>
                        <div className='text-white '>
                            <BsFillCalendarEventFill size={16} />
                        </div>
                        <div>
                            {data === null ? 'loading...' : ` ${currentDay} - ${formattedDate}`}
                        </div>

                    </div>
                    <div className='flex gap-3 items-center'>
                        <div className='text-white '>
                            <FaLocationDot size={18} />
                        </div>
                        <div>
                            {data === null ? 'loading...' : `${data?.location?.name}, ${data?.location?.country}`}
                        </div>

                    </div>
                </div>
            </div>
        </>

    )

}

export default Current