/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import LeftForcast from './sideBySideForcast/LeftForcast';
import RightForcast from './sideBySideForcast/RightForcast';
import Skeleton from 'react-loading-skeleton';
import { Context } from '../../context/AppContext';
import { useContext } from 'react';
const Highlights = ({ data, astronomyData }) => {

    return (
        <>
            <div className="w-11/12 mx-auto sm:my-10 my-5 ">
                <p className=' text-white-black  px-1 text-xl font-semibold sm:mb-5'>Todays Highlights</p>
                {data ?
                    <div className="xl:flex flex-none gap-5 highlights-sidebar  rounded-3xl   py-1 md:px-10 ">

                        <LeftForcast data={data} />
                        <RightForcast data={data} astronomyData={astronomyData} />

                    </div>
                    : <Skeleton height={450} style={{ borderRadius: '1rem' }} />}
            </div>
        </>
    )
}

export default Highlights