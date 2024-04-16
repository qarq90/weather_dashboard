import {VisibilityIcons} from "../../../../public/icons/VisibilityIcon";
import styledLocation from "@/app/styles/cards/card.module.css";
import {useAtom} from "jotai/index";
import {cityJSONState} from "@/app/states/cityState";

export const Visibility = () => {

    const [visibility] = useAtom(cityJSONState)

    return (
        <div className={styledLocation.Card}>
            <VisibilityIcons/>
            <div>
                <h1>Visibility</h1>
                <br/>
                Metres: {visibility.visibility}m
            </div>
        </div>
    )
}