/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */
import { createContext, useEffect } from "react";
import { useState } from "react"
export const Context = createContext();
// export const ThemeContext = createContext('Dark_mode');
const AppContext = ({ children }) => {

    const [theme, setTheme] = useState('Dark_mode');
    const [baseColor, setbaseColor] = useState('#202020');
    const [highlightColor, sethighlightColor] = useState('#444');


    const [islocation, seislocation] = useState(false)

    const [lat, setlat] = useState(null);
    const [lon, setlon] = useState(null);
    const [Text, setText] = useState('');

    const [isget, Setisget] = useState(false)

    const [utcEpoch, setutcEpoch] = useState();
    const [DateEndpoint, setDateEndpoint] = useState();
    const [localDate, setlocalDate] = useState();
    const [formattedDate, setformattedDate] = useState();
    const [dayName, setdayName] = useState();

    // Realtime Time Data
    const [TimeZone, setTimeZone] = useState();
    const [Timedata, setTimedata] = useState();
    // Realtime Time Data





    useEffect(() => {
        setlocalDate(convertUTCEpochToLocalDate(utcEpoch));
        setdayName(getDayNameFromUTCEpoch(utcEpoch));
        setformattedDate(convertLocalDateToCustomFormat(localDate));
        TimeZone && setTimedata(new Date()?.toLocaleString("en-US", { timeZone: `${TimeZone}`, timeStyle: 'short', hourCycle: 'h12' }))

    }, [utcEpoch, localDate, TimeZone]);



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





    return (

        <Context.Provider
            value={{
                DateEndpoint, setDateEndpoint,
                utcEpoch, setutcEpoch,
                formattedDate, setformattedDate,
                dayName, setdayName,
                localDate, setlocalDate,
                Timedata, setTimedata,
                TimeZone, setTimeZone,
                lat, setlat,
                lon, setlon,
                Text, setText,
                isget, Setisget,
                islocation, seislocation,
                theme, setTheme,
                baseColor, setbaseColor,
                highlightColor, sethighlightColor
            }}>
            {children}
        </Context.Provider>


    )
}

export default AppContext