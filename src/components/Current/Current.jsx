import './current.scss'
import { BsFillCalendarEventFill } from 'react-icons/bs';
import { FaLocationDot } from 'react-icons/fa6';
import { WiCloud } from 'react-icons/wi';

const Sidebar = () => {
    return (
        <>
            <div className=' my-5 '>
                <p className=' text-white  px-1 text-xl font-semibold mb-5'>Current Weather</p>

                <div className="sidebar rounded-2xl px-5 py-12 " >

                    <p className=" text-xl  font-semibold mb-3 text-white"> Now </p>
                    <div className='flex items-center justify-between  mb-3'>
                        <div >
                            <p className="text-white font-semibold sm:text-6xl text-5xl ">20°C</p>
                        </div>
                        <div className='text-white sm:text-9xl text-8xl  '>
                            <WiCloud />
                        </div>

                    </div>

                    <p className='font-semibold mb-3'>Partly Cloudy</p>

                    <hr className=" border-slate-400 mb-3" />

                    <div className='flex gap-3 items-center mb-2'>
                        <div className='text-white '>
                            < BsFillCalendarEventFill />
                        </div>
                        <div>
                            Thursday 2, Mar
                        </div>

                    </div>
                    <div className='flex gap-3 items-center'>
                        <div className='text-white '>
                            <FaLocationDot size={18} />
                        </div>
                        <div>
                            New, Dehli, IN
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Sidebar