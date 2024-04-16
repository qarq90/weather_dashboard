import {PressureIcons} from "../../../../public/icons/PressureIcon";
import styledLocation from "@/app/styles/cards/card.module.css";
import {useAtom} from "jotai/index";
import {cityJSONState} from "@/app/states/cityState";

export const Pressure = () => {

    const [pressure] = useAtom(cityJSONState)

    return (
        <div className={styledLocation.Card}>
            <PressureIcons/>
            <div className={styledLocation.iconSpacing}></div>
            <div>
                <h1>Pressure</h1>
                <br/>
                Pascal (Pa): {pressure.main.pressure}
            </div>
        </div>
    )
}