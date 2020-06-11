import React, { Component } from "react";

import TimelineItem from "./TimelineItem";
import Data from "../Data.js";

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timelineData: [],
    };
  }

  //Once the component mounts, we can make the data API call
  componentDidMount() {
    const retrievedData = Data;

    //We call setState() so that the React will know to re-render this component
    this.setState({
      timelineData: retrievedData,
    });
  }

  render() {
    if (this.state.timelineData != null && this.state.timelineData.length > 0) {
      return (
        <div className="timeline-container">
          {this.state.timelineData.map((data, index) => (
            <TimelineItem data={data} key={index} />
          ))}
        </div>
      );
    }

    return <div></div>;
  }
}

export default Timeline;
