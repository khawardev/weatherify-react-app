/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { WiCloud } from 'react-icons/wi';
import { HiMoon } from 'react-icons/hi';
import { WiMoonFull } from 'react-icons/wi';
import { FaLocationArrow } from 'react-icons/fa';
import { useState } from 'react';
import { useEffect, useContext } from 'react';
import { Context } from '../../../context/AppContext';
const Forcastcards = ({ colorclass, Iconparams, LocationIconclasses, Style, index, ForcastData }) => {
    const LocationIcon = Style && FaLocationArrow;
    const DaysIcon = index < 90 || index > 225 ? HiMoon : WiMoonFull;
    const ForcastIcon = Iconparams === 'cloud' ? WiCloud : DaysIcon;
    const Defaultclasses = 'my-2  flex justify-center text-8xl'
    const UsedClasses = LocationIconclasses ? LocationIconclasses : Defaultclasses;

    const [dateEpochs, setDateEpochs] = useState([]);
    useEffect(() => {
        const epochs = ForcastData?.map((ForcastData) => ForcastData?.date_epoch) || [];
        setDateEpochs(epochs);
    }, [ForcastData]);

    const daysOfWeek = dateEpochs.map((dateEpochs) => getDayNameFromUTCEpoch(dateEpochs));

    function getDayNameFromUTCEpoch(utcEpoch) {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const date = new Date(utcEpoch * 1000);
        const dayOfWeekIndex = date.getUTCDay();
        const dayName = daysOfWeek[dayOfWeekIndex];
        return dayName;
    }

    // 
    return (
        <>

            {ForcastData?.map((ForcastData, index) => (
                <div key={index} className="sidebar rounded-2xl p-5 text-center">
                    <p className="font-semibold text-white">{daysOfWeek[index]}</p>
                    <div className={UsedClasses}>
                        {Style ? (
                            <LocationIcon style={Style} />
                        ) : (
                            ForcastIcon.name === 'WiMoonFull' ? (
                                <ForcastIcon style={{ color: '#FFC107' }} />
                            ) : (
                                <ForcastIcon />
                            )
                        )}
                    </div>
                    <p className='w-full mb-1' style={{ fontSize: '14px' }}>
                        {ForcastData?.day?.condition?.text?.split(' ').slice(0, 2).join(' ')}
                    </p>
                    <p className={colorclass} style={{ fontSize: '14px' }}>
                        {ForcastData?.day?.avgtemp_c.toFixed(0)}°C
                    </p>
                </div>


            ))}



        </>
    )
}

export default Forcastcards