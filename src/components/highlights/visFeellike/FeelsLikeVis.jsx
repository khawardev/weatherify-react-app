/* eslint-disable react/prop-types */
import { CiTempHigh } from 'react-icons/ci';
import { FaEyeLowVision } from 'react-icons/fa6';
const FeelsLikeVis = ({ Name, Icon, Number, power, size }) => {
    const Usedpower = power ? 'km' : '°C';
    const UsedIcon = Icon ? FaEyeLowVision : CiTempHigh;
    const icon = <UsedIcon />;
    return (
        <>
            <div className="w-full p-5 sm:text-start text-center  sidebar-darker border rounded-3xl">
                <div>
                    <p className='sm:mb-12 mb-7 font-semibold '>{Name}</p>
                </div>
                <div className="sm:flex sm:text-start text-center justify-between text-white-black  items-center ">
                    <div className='sm:my-0  my-8 justify-center flex' style={{ fontSize: `${size}rem` }}>
                        {icon}
                    </div>
                    <div className='sm:text-4xl text-2xl font-semibold'>
                        {Number} <span className=' sm:text-3xl text-2xl '>{Usedpower}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeelsLikeVis