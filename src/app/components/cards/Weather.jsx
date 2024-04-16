import styledLocation from "@/app/styles/cards/card.module.css";
import {Main} from "@/app/components/cards/Main";
import {Timezone} from "@/app/components/cards/Timezone";

export const Weather = () => {
    return (
        <div className={styledLocation.CardCol}>
            <Main/>
            <Timezone/>
        </div>
    )
}