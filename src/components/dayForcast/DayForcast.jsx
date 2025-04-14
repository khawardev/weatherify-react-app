/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Forcast from '../forcast/Forcast';
const DayForcast = ({ DayForcast }) => {

    return (
        <>
            <div className="w-11/12 mx-auto pb-10">
                <Forcast DayForcast={DayForcast} text={'Today at'} AvailaibleToday={true} LocationToday={true} />
            </div>


        </>
    )
}

export default DayForcast;