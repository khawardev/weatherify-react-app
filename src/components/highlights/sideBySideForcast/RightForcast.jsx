/* eslint-disable react/prop-types */
import TimeRiseCard from '../riseTimeCard/TimeRiseCard';
import FeelsLikeVis from '../visFeellike/FeelsLikeVis';
const RightForcast = ({data, astronomyData}) => {
    return (
        <>


            <div className='w-full sm:my-10 my-5'>
                <div className=" sidebar-darker rounded-2xl  p-6">
                    <p className='mb-4 font-semibold'>Sunrise & Sunset</p>
                    <div className=" sm:flex  flex-none gap-10 ">
                        <TimeRiseCard Icon={'BsSun'} Day={'Sunrise'} Time={astronomyData?.sunrise} />
                        <hr className=" sm:hidden block  border-slate-400" />
                        <TimeRiseCard Day={'Sunset'} Time={astronomyData?.sunset} />
                    </div>
                </div>


                <div className="flex gap-5 mt-5">
                    <FeelsLikeVis Name={'Visibility'} Icon={'FaEyeLowVision'} Number={data?.current?.vis_km} power={'km'} size={'2.25'} />
                    <FeelsLikeVis Name={'Feels Like'} Number={data?.current?.feelslike_c} size={'3'} />
                </div>
            </div>



        </>
    )
}

export default RightForcast