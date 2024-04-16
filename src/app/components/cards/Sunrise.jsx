import {useAtom} from "jotai/index";
import {cityJSONState} from "@/app/states/cityState";
import {SunriseIcon} from "../../../../public/icons/SunriseIcon";
import {convertTimestampToNormalTime} from "@/app/lib/helper";
import styledLocation from "@/app/styles/cards/card.module.css";

export const Sunrise = () => {

    const [sunrise] = useAtom(cityJSONState)

    const formattedTime = convertTimestampToNormalTime(sunrise.sys.sunrise);

    return (
        <div className={styledLocation.Card}>
            <SunriseIcon/>
            <div>
                <h1>Sunrise</h1>
                <br/>
                Time: {formattedTime}
            </div>
        </div>
    )
}