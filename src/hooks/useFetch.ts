import { useState, useEffect } from "react";
import { Character } from "../types/types";
import axios from "axios";



export const useFetch = (url: string ) => {
    const [data, setData] = useState<Character[]>(
        [
            {
                id: 0,
                name: "",
                species: "",
                image: "",
                status: "Unknown",
                gender: "Unknown"
            }
        ]
        );

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(url);
            setData(res?.data?.results);
        }
        fetchData()
    }, [url]);

    return data;

}