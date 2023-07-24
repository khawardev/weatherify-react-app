/* eslint-disable react/prop-types */
import LeftForcast from './sideBySideForcast/LeftForcast';
import RightForcast from './sideBySideForcast/RightForcast';

const Highlights = ({data,astronomyData}) => {
    return (
        <>
            <div className="w-11/12 mx-auto sm:my-10 my-5 ">
                <p className=' text-white  px-1 text-xl font-semibold sm:mb-5'>Todays Highlights</p>
                <div className="xl:flex flex-none gap-5 highlights-sidebar rounded-2xl   py-1 md:px-10 ">

                    <LeftForcast data={data} />
                    <RightForcast data={data} astronomyData={astronomyData} />

                </div>
            </div>
        </>
    )
}

export default Highlights