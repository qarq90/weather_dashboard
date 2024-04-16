import {TimeIcon} from "../../../../public/icons/TimeIcon";
import styledLocation from "@/app/styles/cards/card.module.css";
import {useAtom} from "jotai/index";
import {cityJSONState} from "@/app/states/cityState";
import {convertTimezoneToGMTPlus} from "@/app/lib/helper";

export const Timezone = () => {

    const [timzone] = useAtom(cityJSONState)
    const formattedTimezone = convertTimezoneToGMTPlus(timzone.dt)

    return (
        <div className={styledLocation.Card}>
            <TimeIcon/>
            <div className={styledLocation.iconSpacing}></div>
            <div>
                <h1>Timezone</h1>
                <br/>
                {formattedTimezone}
            </div>
        </div>
    )
}