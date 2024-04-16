import {HumidityIcons} from "../../../../public/icons/HumidityIcon";
import styledLocation from "@/app/styles/cards/card.module.css";
import {useAtom} from "jotai/index";
import {cityJSONState} from "@/app/states/cityState";

export const Humidity = () => {

    const [humidity] = useAtom(cityJSONState)

    return (
        <div className={styledLocation.Card}>
            <HumidityIcons/>
            <div className={styledLocation.iconSpacing}></div>
            <div>
                <h1>Humidity</h1>
                <br/>
                Percentage: {humidity.main.humidity}
            </div>
        </div>
    )
}