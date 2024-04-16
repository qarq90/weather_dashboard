import styledDashboard from "@/app/styles/dashboard.module.css"
import {Location} from "@/app/components/cards/Location";
import {Wind} from "@/app/components/cards/Wind";
import {GeoPosition} from "@/app/components/cards/GeoPosition";
import {Temperature} from "@/app/components/cards/Temperature";
import {Sun} from "@/app/components/cards/Sun";
import {Pressure} from "@/app/components/cards/Pressure";
import {Humidity} from "@/app/components/cards/Humidity";
import {Visibility} from "@/app/components/cards/Visibility";
import {Weather} from "@/app/components/cards/Weather";

export const Dashboard = () => {

    return (
        <div className={styledDashboard.dashboardContainer}>
            <div className={`${styledDashboard.card0} ${styledDashboard.card}`}>
                <Temperature/>
            </div>
            <div className={`${styledDashboard.card1} ${styledDashboard.card}`}>
                <Weather/>
            </div>
            <div className={`${styledDashboard.card2} ${styledDashboard.card}`}>
                <Sun/>
            </div>
            <div className={`${styledDashboard.card3} ${styledDashboard.card}`}>
                <Wind/>
            </div>
            <div className={`${styledDashboard.card4} ${styledDashboard.card}`}>
                <Pressure/>
            </div>
            <div className={`${styledDashboard.card5} ${styledDashboard.card}`}>
                <Humidity/>
            </div>
            <div className={`${styledDashboard.card6} ${styledDashboard.card}`}>
                <Visibility/>
            </div>
            <div className={`${styledDashboard.card7} ${styledDashboard.card}`}>
                <Location/>
            </div>
            <div className={`${styledDashboard.card8} ${styledDashboard.card}`}>
                <GeoPosition/>
            </div>
        </div>
    )
}