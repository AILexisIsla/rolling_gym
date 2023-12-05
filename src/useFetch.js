import { useState, useEffect } from "react";


export function useFetch(url) {
    const [weather, SetWeather] = useState(null);

    useEffect(() => {
        fetch("url")
        .then((response) => Response.json())
        .then((weather) => SetWeather(weather));
    },[]);

    return { weather};
}