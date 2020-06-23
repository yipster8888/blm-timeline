import React, { Component } from "react";

import TimelineItem from "../timeline-item/TimelineItem";
import Api from "../../api/Timeline";
import "./Timeline.css";

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timelineData: [],
      targetCity: "",
      loading: true,
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
    Api.getPosts()
      .then((res) => {
        this.setState({
          timelineData: res.data || [],
        });
      })
      .finally(() => {
        this.setState({
          loading: false,
        });
      });
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      );
    }

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
}

export default Timeline;
