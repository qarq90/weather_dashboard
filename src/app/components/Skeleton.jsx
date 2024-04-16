import styledDashboard from "@/app/styles/dashboard.module.css";

export const Skeleton = () => {
    return (
        <div className={styledDashboard.dashboardContainer}>
            <div className={`${styledDashboard.card0} ${styledDashboard.card} ${styledDashboard.skeletonItem}`}></div>
            <div className={`${styledDashboard.card1} ${styledDashboard.card} ${styledDashboard.skeletonItem}`}></div>
            <div className={`${styledDashboard.card2} ${styledDashboard.card} ${styledDashboard.skeletonItem}`}></div>
            <div className={`${styledDashboard.card3} ${styledDashboard.card} ${styledDashboard.skeletonItem}`}></div>
            <div className={`${styledDashboard.card4} ${styledDashboard.card} ${styledDashboard.skeletonItem}`}></div>
            <div className={`${styledDashboard.card5} ${styledDashboard.card} ${styledDashboard.skeletonItem}`}></div>
            <div className={`${styledDashboard.card6} ${styledDashboard.card} ${styledDashboard.skeletonItem}`}></div>
            <div className={`${styledDashboard.card7} ${styledDashboard.card} ${styledDashboard.skeletonItem}`}></div>
            <div className={`${styledDashboard.card8} ${styledDashboard.card} ${styledDashboard.skeletonItem}`}></div>
        </div>
    );
};
