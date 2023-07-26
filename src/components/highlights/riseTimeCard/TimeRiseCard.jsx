
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { BsSun, BsMoon } from 'react-icons/bs';
import React from 'react'
const TimeRiseCard = ({ Day, Time, Icon }) => {
    const UsedIcon = Icon ? BsSun : BsMoon;
    const icon = <UsedIcon />;
    return (
        <>

            <div className="  flex justify-between py-8 items-center  w-full ">
                <div className='sm:text-6xl text-5xl text-white-black'>
                    {icon}
                </div>
                <div>
                    <p className='font-semibold '>{Day}</p>
                    <div className='sm:text-4xl text-3xl font-semibold text-white-black'>
                        {Time}
                    </div>
                </div>
            </div>

        </>
    )
}

export default TimeRiseCard