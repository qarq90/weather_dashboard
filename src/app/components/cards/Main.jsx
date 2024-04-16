import styledLocation from "@/app/styles/cards/card.module.css";
import {PanelIcon} from "../../../../public/icons/PanelIcon";
import {useAtom} from "jotai/index";
import {cityJSONState} from "@/app/states/cityState";

export const Main = () => {

    const [main] = useAtom(cityJSONState)

    return (
        <div className={styledLocation.Card}>
            <PanelIcon/>
            <div>
                <h1>Weather</h1>
                <br/>
                Currently: {main.weather.main}
            </div>
        </div>
    )
}