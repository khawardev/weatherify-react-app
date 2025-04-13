/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Forcastcards from './forcastcards/Forcastcards';
import ForcastSkeleton from './ForcastSkeleton';
const Forcast = ({ grid, text, AvailaibleToday, ForcastData, DayForcast, LocationToday }) => {

    return (
        <div >
            <div className='md:mt-0 mt-6' >
                {AvailaibleToday ? (
                    <>
                        <div className='flex justify-between'>
                            <p className='text-white-black px-1 text-xl font-semibold mb-5'>{text}</p>
                            <p className='text-white-black px-1 text-xl font-semibold mb-5 sm:hidden block'>{'-->'}</p>
                        </div>
                        <div className='flex-nowrap overflow-x-auto sm:pb-0 pb-4 '>
                            {DayForcast ?
                                <>
                                    <div className={`flex gap-4 mb-4 md:px-[1px] md:pt-[1px]`}>
                                        <Forcastcards AvailaibleToday={AvailaibleToday} DayForcast={DayForcast} />
                                    </div>

                                    <div className={`flex gap-4 md:px-[1px] md:pt-[1px] md:pb-[2px]`}>
                                        <Forcastcards LocationToday={LocationToday} DayForcast={DayForcast} />
                                    </div>
                                </>

                                : <ForcastSkeleton card={2} />
                            }
                        </div>
                    </>
                ) : (
                    <>
                        <p className='text-white-black px-1 text-xl font-semibold mb-5'>{text}</p>
                        <div className={`grid ${grid} gap-4`}>
                            <Forcastcards ForcastData={ForcastData} forcats={true} />
                        </div>
                    </>
                )}



            </div>
        </div>
    )
}

export default Forcast