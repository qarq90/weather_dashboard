import {GlobeIcon} from "../../../../public/icons/GlobeIcon";
import {useAtom} from "jotai/index";
import {cityLatitude, cityLongitude} from "@/app/states/cityState";
import styledLocation from "@/app/styles/cards/card.module.css";

export const GeoPosition = () => {

    const [currentCityLatitude] = useAtom(cityLatitude)
    const [currentCityLongitude] = useAtom(cityLongitude)

    const trimmedLatitude = currentCityLatitude.substring(0, 10);
    const trimmedLongitude = currentCityLongitude.substring(0, 10);

    return (
        <div className={styledLocation.Card}>
            <GlobeIcon/>
            <div style={{width: "1rem", height: "4rem"}}>
            </div>
            <div>
                <h1>Geo-Position</h1>
                <br/>
                Latitude: ~{trimmedLatitude}&deg;
                <br/>
                Longitude: ~{trimmedLongitude}&deg;
            </div>
        </div>
    )
}