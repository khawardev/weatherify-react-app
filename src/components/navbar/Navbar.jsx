/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import './navbar.scss'
import { FiSearch } from 'react-icons/fi';
import { TbCurrentLocation } from 'react-icons/tb';
import { useEffect, useContext, useState, useRef } from 'react';
import { Context } from '../../context/AppContext';
import { BiSolidHandDown } from 'react-icons/bi';

const Navbar = () => {

    const { lat, setlat } = useContext(Context);
    const { lon, setlon } = useContext(Context);
    const inputRef = useRef(null);

    const { DateEndpoint, setDateEndpoint } = useContext(Context);
    const { isget, Setisget } = useContext(Context);
    const { islocation, seislocation } = useContext(Context);

    function getLocation() {
        lat == null ? Setisget(true) : Setisget(false)

        navigator.geolocation.getCurrentPosition(function (location) {
            setlat(location.coords.latitude);
            setlon(location.coords.longitude);
            // setlat(null)
            // setlon(null)
        });

    }

    useEffect(() => {
        Setisget(false)
        // lat == null ? seislocation(false) : seislocation(true)
        // lat && seislocation(true)
    }, [lat]);


    const Weathersvg =
        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" width="45" height="45">
            <path d="M11.4,6C9.2,4.3,6.1,4.8,4.5,7C4,7.7,3.7,8.4,3.6,9.1C2,9.7,1.1,11.3,1.6,12.9C2,14,2.9,14.8,4,15c0.2-1.7,1.2-3.2,2.7-3.9	C7.4,8.7,9.2,6.8,11.4,6z M19.5,10.5c-1.4-3-4.9-4.4-7.9-3c-1.9,0.8-3.2,2.6-3.5,4.6c-1.9,0.5-3,2.4-2.4,4.3C6,18,7.4,19,9,19h9.2
	             c2.4,0,4.3-1.9,4.3-4.3C22.5,12.8,21.3,11.1,19.5,10.5z" fill="#ffffff"></path>
        </svg>

    const { Text, setText } = useContext(Context);
    const [query, setquery] = useState(''); // setquery from input into the state
    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) { // function to handle on Enter event
            setText(event.target.value)
            setquery('')
            inputRef.current.blur();
        }
    }







    return (
        <>

            <div className='flex items-center justify-between  mx-auto sm:pb-10  pt-6 pb-6  w-11/12 mb-5' >
                <div className=' w-1/3'>

                    <div className='flex items-center '>
                        <div >
                            {Weathersvg}
                        </div>
                        <div className='text-2xl font-bold text-white'>
                            Weatherify
                        </div>
                    </div>
                </div>

                <div className='flex  lg:justify-between justify-end lg:gap-0 gap-4 w-2/3'>

                    <div className='flex items-center search-input-header-div '>
                        <div >

                            <input
                                type="text"
                                placeholder="Enter the Location"
                                className="search-input-header px-3 font-medium"
                                value={query}
                                onChange={(event) => setquery(event.target.value)}
                                onKeyUp={searchQueryHandler}
                                ref={inputRef}
                            />

                        </div>

                        <div>
                            <FiSearch size={22} style={{ strokeWidth: '2', color: 'white' }} />
                        </div>
                    </div>
                    <div>

                        <button onClick={lat === null ? getLocation : null} className='button flex   items-center gap-3  tracking-tight font-medium'>
                            <span> <TbCurrentLocation size={20} style={{ strokeWidth: '2' }} /></span>
                            <span className='button-text'>
                                {isget ? (
                                    <div className="flex justify-between items-center w-[70px] mx-[21px] my-[6px]">
                                        <div className="pulse-bubble pulse-bubble-1"></div>
                                        <div className="pulse-bubble pulse-bubble-2"></div>
                                        <div className="pulse-bubble pulse-bubble-3"></div>
                                    </div>
                                ) : (
                                    islocation ? (
                                        <>
                                            Your Location
                                        </>
                                    ) : (
                                        <>Current Location</>
                                    )
                                )}

                            </span>
                            {
                                islocation && (
                                    <>
                                        <span> <BiSolidHandDown /> </span>
                                    </>
                                )
                            }
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar