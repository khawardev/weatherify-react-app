import LeftForcast from './sideBySideForcast/LeftForcast';
import RightForcast from './sideBySideForcast/RightForcast';

const Highlights = () => {
    return (
        <>
            <div className="w-11/12 mx-auto my-10 ">
                <p className=' text-white  px-1 text-xl font-semibold mb-5'>Todays Highlights</p>
                <div className="xl:flex flex-none gap-5 highlights-sidebar rounded-2xl   py-1 md:px-10 ">

                    <LeftForcast />
                    <RightForcast />

                </div>
            </div>
        </>
    )
}

export default Highlights