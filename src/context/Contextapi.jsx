/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */
import { createContext} from "react";
import { useState } from "react"
export const Context = createContext();

const Contextapi = ({ children }) => {
    const [DateEndpoint, setDateEndpoint] = useState();
    // console.log("🚀 ~ file: Contextapi.jsx:11 ~ Contextapi ~ Endpoint:", Endpoint)


    
    return (

        <Context.Provider value={{DateEndpoint, setDateEndpoint}}>
            {children}
        </Context.Provider>


    )
}

export default Contextapi