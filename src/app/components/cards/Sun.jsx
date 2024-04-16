import {Sunset} from "@/app/components/cards/Sunset";
import {Sunrise} from "@/app/components/cards/Sunrise";
import styledLocation from "@/app/styles/cards/card.module.css";

export const Sun = () => {
    return (
        <div className={styledLocation.Card}>
            <Sunrise/>
            <Sunset/>
        </div>
    )
}