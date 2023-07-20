/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState} from "react";
import { fetchDataFromApi } from "../utils/api"

// console.log("🚀 ~ file: UseFetch.jsx:4 ~ useFetch ~ location:", location)
const useFetch = (location,DateEndpoint, lat , lon ) => {

    
    const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // setLoading('loading...');
        setData(null);
        setError(null);

        fetchDataFromApi(location,DateEndpoint,lat,lon )
            .then((res) => {
                // setLoading(false);
                setData(res);
            })
            .catch((error) => {
                // setLoading(false);
                setError("Something went wrong!", error);
            });
    }, [location,lat,lon]);
    console.log("🚀 ~ file: UseFetch.jsx:28 ~ useFetch ~ location:", location)



    

    return { data, error };
};


export default useFetch;