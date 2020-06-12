import React, { Component } from "react";

import TimelineItem from "./TimelineItem";
import Data from "../Data.js";
import Api from "../api/Timeline";
import "../css/Timeline.css";

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timelineData: [],
      targetCity: "",
    };

    //Binding event handlers here
    this.handleChangeTargetCity = this.handleChangeTargetCity.bind(this);
  }

  //Changes state to reflect a change to targetCity
  handleChangeTargetCity(event) {
    const { value } = event.target;
    this.setState({
      targetCity: value,
    });
  }

  //Once the component mounts, we can make the data API call
  componentDidMount() {
    Api.getPosts().then(res => {
      this.setState({
        timelineData: [...(res.data || []), ...Data]
      });
    });
  }

  render() {
    console.log(this.state.targetCity);

    if (this.state.timelineData != null && this.state.timelineData.length > 0) {
      return (
        <div className="timeline">
          <div className="timeline-container">
            {this.state.timelineData.map((data, index) => (
              <TimelineItem data={data} key={index} />
            ))}
          </div>
        </div>
      );
    }

    return <div></div>;
  }
}

export default Timeline;
