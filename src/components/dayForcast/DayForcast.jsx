/* eslint-disable no-unused-vars */
import { HiMoon } from 'react-icons/hi';
import { WiMoonFull } from 'react-icons/wi';
import { FaLocationArrow } from 'react-icons/fa';

import Forcast from '../forcast/Forcast';
const DayForcast = () => {
    
    return (
        <>
            <div className="w-11/12 mx-auto ">
                <Forcast text={'Today at'} classes={'grid xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 '} AvailaibleToday={true} />
            </div>

           
        </>
    )
}

export default DayForcast;