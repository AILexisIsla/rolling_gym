import { useEffect } from "react";

export function useFetch() {
    const [weather, SetWeather] = useState(null);

    useEffect(() => {
        fetch(" http://api.weatherapi.com/")
        .then((response) => Response.json())
        .then((weather) => SetWeather(weather));
    },[]);
}