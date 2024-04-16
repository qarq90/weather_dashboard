import axios from "axios";

export const fetchWeatherData = async (currentCityLatitude, currentCityLongitude) => {

    const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${currentCityLatitude}&lon=${currentCityLongitude}&appid=f52100a1e77852d08e5b63260b0747d3`
    );

    const {base, visibility, dt, id, main, name, sys, timezone, weather, wind} = response.data;

    return {
        base: base,
        visibility: visibility,
        dt: dt,
        id: id,
        main: {
            temp: main.temp,
            feels_like: main.feels_like,
            temp_min: main.temp_min,
            temp_max: main.temp_max,
            pressure: main.pressure,
            humidity: main.humidity
        },
        name: name,
        sys: {
            type: sys.type,
            id: sys.id,
            country: sys.country,
            sunrise: sys.sunrise,
            sunset: sys.sunset
        },
        timezone: timezone,
        weather: {
            id: weather[0].id,
            main: weather[0].main,
            description: weather[0].description,
            icon: weather[0].icon
        },
        wind: {
            speed: wind.speed,
            deg: wind.deg
        }
    };
}