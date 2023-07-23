/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Forcastcards from './forcastcards/Forcastcards';
const Forcast = ({ classes, text, AvailaibleToday, ForcastData ,DayForcast}) => {
   
    return (
        <div >
            <div className=' my-5 '>
                <p className=' text-white  px-1 text-xl font-semibold mb-5'>{text}</p>
                <div className={classes} >
                    {AvailaibleToday ? (
                        <>
                            {/* colorclass='text-white' LocationIconclasses={'my-6  flex justify-center text-6xl'} */}
                            <Forcastcards AvailaibleToday={AvailaibleToday}  DayForcast={DayForcast} />
                        </>
                    ) : (
                        <>
                            <Forcastcards Iconparams={'cloud'} colorclass={'rounded-full w-3/5 mx-auto text-white'} ForcastData={ForcastData} />
                        </>
                    )}



                </div>
            </div>
        </div>
    )
}

export default Forcast