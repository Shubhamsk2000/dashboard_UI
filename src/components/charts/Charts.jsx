import OverallOverview from "./OverallOverview"
import RecentBars from "./RecentBars";
import MainDailyTrend from "./MainDailyTrend";
import '../css/charts.css'
function Charts() {
    return (
        <div className="charts-container">
          <div className="overall-overview">
            <OverallOverview />
          </div>
          <div className="recent-bars">
            <RecentBars />
          </div>
          <div className="recent-bars">
            <MainDailyTrend />
          </div>
        </div>
      );
}

export default Charts
