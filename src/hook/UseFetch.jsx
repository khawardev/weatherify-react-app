/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState} from "react";
import { fetchDataFromApi } from "../utils/api"

// console.log("🚀 ~ file: UseFetch.jsx:4 ~ useFetch ~ location:", location)
const useFetch = (location,DateEndpoint) => {
    
    const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // setLoading('loading...');
        setData(null);
        setError(null);

        fetchDataFromApi(location,DateEndpoint)
            .then((res) => {
                // setLoading(false);
                setData(res);
            })
            .catch((error) => {
                // setLoading(false);
                setError("Something went wrong!", error);
            });
    }, [location]);



    

    return { data, error };
};


export default useFetch;