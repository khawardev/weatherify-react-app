import TimeRiseCard from '../riseTimeCard/TimeRiseCard';
import FeelsLikeVis from '../visFeellike/FeelsLikeVis';
const RightForcast = () => {
    return (
        <>


            <div className='w-full sm:my-10 my-5'>
                <div className=" sidebar-darker rounded-2xl  p-6">
                    <p className='mb-4 font-semibold'>Sunrise & Sunset</p>
                    <div className=" sm:flex  flex-none gap-10 ">
                        <TimeRiseCard Icon={'BsSun'} Day={'Sunrise'} Time={'6:45'} Zone={'AM'} />
                        <hr className=" sm:hidden block  border-slate-400" />
                        <TimeRiseCard Day={'Sunset'} Time={'6:45'} Zone={'PM'} />
                    </div>
                </div>


                <div className="flex gap-5 mt-5">
                    <FeelsLikeVis Name={'Visibility'} Icon={'FaEyeLowVision'} Number={'2.5'} power={'km'} size={'2.25'} />
                    <FeelsLikeVis Name={'Feels Like'} Number={'20'} size={'3'} />
                </div>
            </div>



        </>
    )
}

export default RightForcast