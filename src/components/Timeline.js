import React from "react";

import timelineData from "../Data.js";
import TimelineItem from "./TimelineItem";

function Timeline() {
  return (
    timelineData.length > 0 && (
      <div className="timeline-container">
        {timelineData.map((data, index) => (
          <TimelineItem data={data} key={index} />
        ))}
      </div>
    )
  );
}

export default Timeline;
