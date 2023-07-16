import { TbWind } from 'react-icons/tb';
import QualityAirCard from '../airQualityCard/QualityAirCard';
import HumPressuresCard from '../humPresCard/HumPressuresCard';
const LeftForcast = () => {
    return (
        <>
            <div className='w-full sm:my-10 my-5'>
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


        </>
    )
}

export default LeftForcast