"use client"

import {useEffect} from "react";
import {useAtom} from "jotai";
import {Dashboard} from "@/app/components/Dashboard";
import {cityJSONState, cityLatitude, cityLongitude, cityState} from "@/app/states/cityState";
import {fetchWeatherData} from "@/app/lib/fetchData";
import {Skeleton} from "@/app/components/Skeleton";

export default function Home() {

    const [currentCity, setCurrentCity] = useAtom(cityState);
    const [currentCityJSON, setCurrentCityJSON] = useAtom(cityJSONState)
    const [currentCityLatitude, setCurrentCityLatitude] = useAtom(cityLatitude)
    const [currentCityLongitude, setCurrentCityLongitude] = useAtom(cityLongitude)

    useEffect(() => {

        const getCoordinates = () => {

            const options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            };

            const success = (pos) => {

                const crd = pos.coords;
                const lat = crd.latitude.toString();
                const lng = crd.longitude.toString();
                const coordinates = [lat, lng];
                setCurrentCityLatitude(lat)
                setCurrentCityLongitude(lng)
                getCity(coordinates);
                return;
            };

            const error = (err) => {
                console.warn(`ERROR(${err.code}): ${err.message}`);
                if (err.code === 1) {
                    alert("Please allow location access to use this feature.");
                }
            };

            navigator.geolocation.getCurrentPosition(success, error, options);
        };

        const getCity = (coordinates) => {

            const xhr = new XMLHttpRequest();
            const lat = coordinates[0];
            const lng = coordinates[1];

            xhr.open('GET', `https://us1.locationiq.com/v1/reverse.php?key=pk.7df6eb21948da83793af6baefb678974&lat=${lat}&lon=${lng}&format=json`, true);
            xhr.send();
            xhr.onreadystatechange = processRequest;
            xhr.addEventListener("readystatechange", processRequest, false);

            function processRequest(e) {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    const response = JSON.parse(xhr.responseText);
                    const city = response.address.city;
                    setCurrentCity(city)
                    return;
                }
            }
        };

        getCoordinates();

    }, [])

    useEffect(() => {
        if (currentCityLatitude !== 0.0 || currentCityLongitude !== 0.0) {
            const result = fetchWeatherData(currentCityLatitude, currentCityLongitude);
            setCurrentCityJSON(result)
        }
    }, [currentCity]);

    return (
        <>
            {
                Object.keys(currentCityJSON).length !== 0 ?
                    <>
                        <Dashboard/>
                    </> :
                    <>
                        <Skeleton/>
                    </>
            }
        </>
    );
}
