import {useAtom} from "jotai";
import {cityJSONState} from "@/app/states/cityState";
import {WindIcon} from "../../../../public/icons/WindIcon";
import styledLocation from "@/app/styles/cards/card.module.css";

export const Wind = () => {

    const [wind] = useAtom(cityJSONState)

    return (
        <div className={styledLocation.Card}>
            <WindIcon/>
            <div>
                <h1>Wind</h1>
                <br/>
                Speed: {wind.wind.speed}
                <br/>
                Degree: {wind.wind.deg}
            </div>
        </div>
    )
}