import {SunsetIcon} from "../../../../public/icons/SunsetIcon";
import {useAtom} from "jotai/index";
import {cityJSONState} from "@/app/states/cityState";
import {convertTimestampToNormalTime} from "@/app/lib/helper";
import styledLocation from "@/app/styles/cards/card.module.css"

export const Sunset = () => {

    const [sunset] = useAtom(cityJSONState)

    const formattedTime = convertTimestampToNormalTime(sunset.sys.sunset);

    return (
        <div className={styledLocation.Card}>
            <SunsetIcon/>
            <div className={styledLocation.iconSpacing}></div>
            <div>
                <h1>Sunset</h1>
                <br/>
                Time: {formattedTime}
            </div>
        </div>
    )
}