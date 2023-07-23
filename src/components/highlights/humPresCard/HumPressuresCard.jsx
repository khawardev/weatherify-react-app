/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { WiHumidity, WiWindy } from 'react-icons/wi';

const HumpressuresCard = ({ Text, Icon, Number, power }) => {


    const UsedIcon = Icon ? WiHumidity : WiWindy;
    const icon = <UsedIcon />;


    return (
        <>
            <div className=" w-full  p-5 text-start sm:my-0 my-5  sidebar-darker rounded-2xl">
                <div>
                    <p className=' mb-8 font-semibold '>{Text}</p>
                </div>
                <div className="flex text-start justify-between text-white  items-center sm:mb-1">
                    <div className='text-6xl  sm:mb-0 mb-4 justify-center flex'>
                        {icon}
                    </div>
                    <div className='sm:text-4xl text-3xl font-semibold'>
                        {Number ? ` ${Number}` : 'loading...'} <span className=' sm:text-3xl text-2xl '>{power}</span>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HumpressuresCard;