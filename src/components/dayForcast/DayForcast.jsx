/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { HiMoon } from 'react-icons/hi';
import { WiMoonFull } from 'react-icons/wi';
import { FaLocationArrow } from 'react-icons/fa';
import './dayforcast.scss';
import Forcast from '../forcast/Forcast';
const DayForcast = ({ DayForcast }) => {

    return (
        <>
            <div className="w-11/12 mx-auto">
                <Forcast DayForcast={DayForcast} text={'Today at'} AvailaibleToday={true} LocationToday={true} />
            </div>


        </>
    )
}

export default DayForcast;