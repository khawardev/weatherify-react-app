/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api"

const useFetch = (location, DateEndpoint) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    // useEffect(() => {
    //     lat = null;
    //     lon = null;
    // }, [location]);

    useEffect(() => {
        setData(null);
        setError(null);

        fetchDataFromApi(location, DateEndpoint)
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