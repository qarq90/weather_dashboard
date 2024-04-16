import styledLocation from "@/app/styles/cards/card.module.css";
import {useAtom} from "jotai/index";
import {cityJSONState} from "@/app/states/cityState";
import {TemperatureIcon} from "../../../../public/icons/TemperatureIcon";
import {Feels} from "../../../../public/icons/Feels";

export const Temperature = () => {

    const [temperature] = useAtom(cityJSONState)

    const ogTemp = (temperature.main.temp - 273.15).toFixed(2).substring(0, 6);
    const feelsTemp = (temperature.main.feels_like - 273.15).toFixed(2).substring(0, 6);

    return (
        <div className={styledLocation.Card}>
            <TemperatureIcon/>
            <div>
                <h1>Temperature</h1>
                <br/>
                Celsius: {ogTemp}&deg;
            </div>
            <Feels/>
            <div>
                <div>
                    <h1>Feels Like</h1>
                    <br/>
                    Celsius: {feelsTemp}&deg;
                </div>
            </div>
        </div>
    )
}