import { CiTempHigh } from 'react-icons/ci';
import { FaEyeLowVision } from 'react-icons/fa6';
import { TbWind } from 'react-icons/tb';
import { WiHumidity, WiWindy } from 'react-icons/wi';
import { BsSun, BsMoon } from 'react-icons/bs';

const Highlights = () => {
    return (
        <>
            <div className="w-11/12 mx-auto my-10 ">
            <p className=' text-white  px-1 text-xl font-semibold mb-5'>Todays Highlights</p>

                <div className="xl:flex flex-none   gap-5 sidebar rounded-2xl  py-1 md:px-10 px-2">

                    <div className='xl:w-1/2 my-10'>
                        <div className=" sidebar-darker rounded-2xl  p-6 ">
                            <div className='flex justify-between'>
                                <p className='mb-4 font-semibold'>Air Quality Index</p>
                                <div>
                                    <p className='px-3 mx-3 bg-red-500 text-white rounded-full font-semibold'>Very poor</p>
                                </div>
                            </div>
                            <div className=" flex justify-between items-center  ">
                                <div className="py-8">
                                    <div className='text-6xl text-white'>
                                        <TbWind />
                                    </div>
                                </div>
                                <div className=" grid xl:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-10 py-8 items-center">
                                    <div className='text-center'>
                                        <p className='font-semibold '>PM25</p>
                                        <div className='text-4xl font-semibold text-white'>
                                            177
                                        </div>
                                    </div>
                                    <div className='text-center'>
                                        <p className='font-semibold '>SO2</p>
                                        <div className='text-4xl font-semibold text-white'>
                                            29.8
                                        </div>
                                    </div>
                                    <div className='text-center'>
                                        <p className='font-semibold '>NO2</p>
                                        <div className='text-4xl font-semibold text-white'>
                                            43.8
                                        </div>
                                    </div>
                                    <div className='text-center'>
                                        <p className='font-semibold '>O3</p>
                                        <div className='text-4xl font-semibold text-white'>
                                            0.15
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>



                        <div className="flex sm:gap-5 gap-4 mt-5">
                            <div className="  w-1/2 p-5 sm:text-start text-center  sidebar-darker rounded-2xl">
                                <div>
                                    <p className='mb-7 font-semibold '>Humidity</p>
                                </div>
                                <div className="sm:flex sm:text-start text-center justify-between text-white  items-center ">
                                    <div className='text-6xl  sm:mb-0 mb-4 justify-center flex'>
                                        <WiHumidity />
                                    </div>
                                    <div className='sm:text-4xl text-3xl font-semibold'>
                                        73 <span className=' text-2xl '>%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="  w-1/2 p-5 sm:text-start text-center  sidebar-darker rounded-2xl">
                                <div>
                                    <p className='mb-7 font-semibold '>Pressure</p>
                                </div>
                                <div className="sm:flex sm:text-start text-center justify-between text-white  items-center ">
                                    <div className='text-6xl  sm:mb-0 mb-4 justify-center flex'>
                                        <WiWindy />
                                    </div>
                                    <div className='sm:text-4xl text-3xl font-semibold'>
                                        1020 <span className=' text-2xl '>hpa</span>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>






                    <div className='xl:w-1/2  my-10'>
                        <div className=" sidebar-darker rounded-2xl  p-6">
                            <p className='mb-4 font-semibold'>Sunrise & Sunset</p>
                            <div className=" sm:flex  flex-none gap-10 ">
                                <div className="  flex justify-between py-8 items-center sm:w-1/2 ">
                                    <div className='text-6xl text-white'>
                                        <BsSun />
                                    </div>
                                    <div>
                                        <p className='font-semibold '>Sunrise</p>
                                        <div className='text-4xl font-semibold text-white'>
                                            6:45 AM
                                        </div>
                                    </div>
                                </div>
                                <div className="  flex justify-between py-8 items-center sm:w-1/2">
                                    <div className='text-6xl text-white'>
                                        <BsMoon />
                                    </div>
                                    <div>
                                        <p className='font-semibold '>Sunset</p>
                                        <div className='text-4xl font-semibold text-white'>
                                            6:45 PM
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>



                        <div className="flex gap-5 mt-5">
                            <div className="  w-1/2 p-5 sm:text-start text-center  sidebar-darker rounded-2xl">
                                <div>
                                    <p className='mb-7 font-semibold '>Visibility</p>
                                </div>
                                <div className="sm:flex sm:text-start text-center justify-between text-white  items-center ">
                                    <div className='text-5xl  sm:mb-0 mb-4 justify-center flex'>
                                        <FaEyeLowVision />
                                    </div>
                                    <div className='sm:text-4xl text-3xl font-semibold'>
                                        2.5 <span className=' text-2xl '>km</span>
                                    </div>
                                </div>
                            </div>
                            <div className="  w-1/2 p-5 sm:text-start text-center  sidebar-darker rounded-2xl">
                                <div>
                                    <p className='mb-7 font-semibold '>Feels Like</p>
                                </div>
                                <div className="sm:flex sm:text-start text-center justify-between text-white  items-center ">
                                    <div className='text-6xl  sm:mb-0 mb-4 justify-center flex'>
                                        <CiTempHigh />
                                    </div>
                                    <div className='sm:text-4xl text-3xl font-semibold'>
                                    20°C
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}

export default Highlights