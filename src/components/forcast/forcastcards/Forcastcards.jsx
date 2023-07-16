/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { WiCloud } from 'react-icons/wi';
import { HiMoon } from 'react-icons/hi';
import { WiMoonFull } from 'react-icons/wi';
import { FaLocationArrow } from 'react-icons/fa';
const Forcastcards = ({ colorclass, Iconparams, LocationIconclasses, Style, index }) => {
    // console.log(Iconparams);
    const LocationIcon = Style && FaLocationArrow;
    const DaysIcon = index < 90 || index > 225 ? HiMoon : WiMoonFull;
    const ForcastIcon = Iconparams === 'cloud' ? WiCloud : DaysIcon;
    const Defaultclasses = 'my-3 flex justify-center text-8xl'
    const UsedClasses = LocationIconclasses ? LocationIconclasses : Defaultclasses;

    return (
        <>

            <div className="sidebar rounded-2xl p-5 text-center">
                <p className=' font-semibold text-white '>Sun</p>
                <div className={UsedClasses}>
                    {Style ? <LocationIcon style={Style} /> : (ForcastIcon.name === 'WiMoonFull' ? <ForcastIcon style={{ color: '#FFC107' }} /> : <ForcastIcon />)}
                </div>
                <p className={colorclass}  >20°C</p>
            </div>

        </>
    )
}

export default Forcastcards