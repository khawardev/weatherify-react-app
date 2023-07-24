/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Forcastcards from './forcastcards/Forcastcards';
import './forcast.scss';
const Forcast = ({ grid, text, AvailaibleToday, ForcastData, DayForcast, LocationToday }) => {

    return (
        <div >
            <div className=' my-5 '>

                {AvailaibleToday ? (
                    <>
                    <div className='flex justify-between'>
                        <p className='text-white px-1 text-xl font-semibold mb-5'>{text}</p>
                        <p className='text-white px-1 text-xl font-semibold mb-5 sm:hidden block'>{'-->'}</p>

                    </div>
                        <div className='flex-nowrap overflow-x-auto'>
                            <div className={`flex gap-4 mb-4`}>
                                <Forcastcards AvailaibleToday={AvailaibleToday} DayForcast={DayForcast} />
                            </div>
                            <div className={`flex gap-4`}>
                                <Forcastcards LocationToday={LocationToday} DayForcast={DayForcast} />
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <p className='text-white px-1 text-xl font-semibold mb-5'>{text}</p>
                        <div className={`grid ${grid} gap-4`}>
                            <Forcastcards Iconparams={'cloud'} colorclass={'rounded-full w-3/5 mx-auto text-white'} ForcastData={ForcastData} />
                        </div>
                    </>
                )}



            </div>
        </div>
    )
}

export default Forcast