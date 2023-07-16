// import { CiTempHigh } from 'react-icons/ci';
// import { FaEyeLowVision } from 'react-icons/fa6';
import { TbWind } from 'react-icons/tb';
import QualityAirCard from './airQualityCard/QualityAirCard';
import HumPressuresCard from './humPresCard/HumPressuresCard';
import TimeRiseCard from './riseTimeCard/TimeRiseCard';
import FeelsLikeVis from './visFeellike/FeelsLikeVis';




const Highlights = () => {
    return (
        <>
            <div className="w-11/12 mx-auto my-10 ">
                <p className=' text-white  px-1 text-xl font-semibold mb-5'>Todays Highlights</p>
                <div className="xl:flex flex-none   gap-5 sidebar rounded-2xl  py-1 md:px-10 px-2">
                    <div className='xl:w-1/2 sm:my-10 my-5'>


                        <div className=" sidebar-darker rounded-2xl  p-6 ">
                            <div className='flex justify-between'>
                                <p className='mb-4 font-semibold'>Air Quality Index</p>
                                <div>
                                    <p className='px-3 sm:mx-3 mx-0  bg-red-500 text-white rounded-full font-semibold'>Very poor</p>
                                </div>
                            </div>
                            <div className=" flex justify-between items-center  ">
                                <div className="py-8">
                                    <div className='sm:text-6xl text-5xl text-white'>
                                        <TbWind />
                                    </div>
                                </div>
                                <div className=" grid xl:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-10 py-8 items-center">
                                    <QualityAirCard Text={'PM225'} Number={'177'} />
                                    <QualityAirCard Text={'SO2'} Number={'29.8'} />
                                    <QualityAirCard Text={'NO2'} Number={'43.8'} />
                                    <QualityAirCard Text={'O3'} Number={'0.15'} />
                                </div>
                            </div>
                        </div>


                        <div className="sm:flex sm:gap-5 gap-4 mt-5">
                            <HumPressuresCard Text={'Humidity'} Icon={'WiHumidity'} Number={'73'} power={'%'} />
                            <HumPressuresCard Text={'Pressure'} Number={'1020'} power={'hpa'} />
                        </div>
                    </div>






                    <div className='xl:w-1/2 sm:my-10 my-5'>
                        <div className=" sidebar-darker rounded-2xl  p-6">
                            <p className='mb-4 font-semibold'>Sunrise & Sunset</p>
                            <div className=" sm:flex  flex-none gap-10 ">
                                <TimeRiseCard Icon={'BsSun'} Day={'Sunrise'} Time={'6:45'} Zone={'AM'}  />
                                <hr className=" sm:hidden block  border-slate-400" />
                                <TimeRiseCard Day={'Sunset'} Time={'6:45'} Zone={'PM'}  />
                            </div>
                        </div>



                        <div className="flex gap-5 mt-5">
                            <FeelsLikeVis Name={'Visibility'} Icon={'FaEyeLowVision'} Number={'2.5'} power={'km'} size={'2.25'}  /> 
                            <FeelsLikeVis Name={'Feels Like'}  Number={'20'} size={'3'}    /> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Highlights