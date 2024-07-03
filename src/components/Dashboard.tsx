import { useState } from "react";
import "./Dashboard.css";
import data from "../data.json";

type Timeframe = "daily" | "weekly" | "monthly";

export const Dashboard = () => {
  const [timeFrame, setTimeFrame] = useState<Timeframe>("weekly");

  return (
    <main>
      <div className="dashboard_container">
        <div className="activities">
          <div className="dashboard">
            <div className="dashboard_report">
              <div className="dashboard_image">
                <img src="./image-jeremy.png" alt="jeremy" />
              </div>
              <div className="dashboard_name">
                <span>Report for</span>
                <h1>Jeremy Robson</h1>
              </div>
            </div>
            <div className="dashboard_format">
              <ul>
                <li
                  className={timeFrame === "daily" ? "active" : ""}
                  onClick={() => setTimeFrame("daily")}
                >
                  Daily
                </li>
                <li
                  className={timeFrame === "weekly" ? "active" : ""}
                  onClick={() => setTimeFrame("weekly")}
                >
                  Weekly
                </li>
                <li
                  className={timeFrame === "monthly" ? "active" : ""}
                  onClick={() => setTimeFrame("monthly")}
                >
                  Monthly
                </li>
              </ul>
            </div>
          </div>
          {data.map((item) => (
            <div
              key={item.id}
              className="activity_background"
              style={{ backgroundColor: item["background-color"] }}
            >
              <div className="activity_container">
                <div className="icon_image">
                  <img src={item.icon} alt={`${item.title} icon`} />
                </div>
                <div className="activity">
                  <div className="activity_title">
                    <span>{item.title}</span>
                    <i className="fa-solid fa-ellipsis"></i>
                  </div>
                  <div className="activity_time">
                    <div className="activity_current">
                      <h2>{item.timeframes[timeFrame].current}hrs</h2>
                    </div>
                    <div className="activity_last">
                      <p>
                        Last Week - {item.timeframes[timeFrame].previous}hrs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
