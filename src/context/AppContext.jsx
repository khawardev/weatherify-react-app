/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */
import { createContext, useEffect } from "react";
import { useState } from "react"
export const Context = createContext();

const AppContext = ({ children }) => {
    const [DateEndpoint, setDateEndpoint] = useState();
    const [utcEpoch, setutcEpoch] = useState();
    const [localDate, setlocalDate] = useState();
    const [localTime, setlocalTime] = useState();
    const [formattedDate, setformattedDate] = useState();
    const [dayName, setdayName] = useState();
    const [modifiedTime, setmodifiedTime] = useState();

    useEffect(() => {
        setlocalDate(convertUTCEpochToLocalDate(utcEpoch));
        setdayName(getDayNameFromUTCEpoch(utcEpoch));
        setlocalTime(extractLocalTimeFromUTCEpoch(utcEpoch))
        setformattedDate(convertLocalDateToCustomFormat(localDate));

        localTime && setmodifiedTime(modifyTimeWithAMPM(localTime));

    }, [utcEpoch, localDate, localTime]);


    function convertUTCEpochToLocalDate(utcEpoch) {
        const date = new Date(utcEpoch * 1000);
        const localYear = date.getFullYear();
        const localMonth = date.getMonth() + 1; // Months are zero-based, so add 1
        const localDay = date.getDate();
        const localDate = `${localYear}-${String(localMonth).padStart(2, '0')}-${String(localDay).padStart(2, '0')}`;
        return localDate;
    }
    function convertLocalDateToCustomFormat(localDate) {
        const date = new Date(localDate);
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        const customFormattedDate = date.toLocaleDateString('en-US', options);
        return customFormattedDate;
    }

    function getDayNameFromUTCEpoch(utcEpoch) {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const date = new Date(utcEpoch * 1000);
        const dayOfWeekIndex = date.getUTCDay();
        const dayName = daysOfWeek[dayOfWeekIndex];
        return dayName;
    }
    function extractLocalTimeFromUTCEpoch(utcEpoch) {
        const date = new Date(utcEpoch * 1000);
        const localHours = date.getHours();
        const localMinutes = date.getMinutes();
        const localTime = `${String(localHours).padStart(2, '0')}:${String(localMinutes).padStart(2, '0')}`;
        return localTime;
    }

    function modifyTimeWithAMPM(localTime) {

        const [hours, minutes] = localTime.split(':');
        const numericHours = parseInt(hours);
        const period = numericHours >= 12 ? 'PM' : 'AM';
        const modifiedHours = numericHours % 12 || 12;
        const modifiedTime = `${modifiedHours}:${minutes} ${period}`;
        return modifiedTime;
    }








    return (

        <Context.Provider
            value={{
                DateEndpoint, setDateEndpoint,
                utcEpoch, setutcEpoch,
                formattedDate, setformattedDate,
                dayName, setdayName,
                modifiedTime, setmodifiedTime,
                localDate, setlocalDate,
            }}>
            {children}
        </Context.Provider>


    )
}

export default AppContext