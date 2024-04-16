import {useAtom} from "jotai/index";
import {cityJSONState, cityState} from "@/app/states/cityState";
import {LocationIcon} from "../../../../public/icons/LocationIcon";
import styledLocation from "@/app/styles/cards/card.module.css"

export const Location = () => {

    const [userCity] = useAtom(cityState)

    const [location] = useAtom(cityJSONState)

    return (
        <div className={styledLocation.Card}>
            <LocationIcon/>
            <div>
                <h1>Location</h1>
                <br/>
                Country: {location.sys.country}
                <br/>
                City: {userCity}
            </div>
        </div>
    )
}