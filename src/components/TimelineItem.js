import React from "react";

import CityData from "../CityData";

function TimelineItem(props) {
  //Determine the colour for the tag
  let tagColour;
  const city = CityData.find((element) => element.name === props.data.tag);
  city ? (tagColour = city.colour) : (tagColour = "grey");

  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <span className="tag" style={{ background: tagColour }}>
          {props.data.tag}
        </span>
        <time>{props.data.date}</time>
        <p className="timeline-item-title">{props.data.title}</p>
        <p className="timeline-item-p">"{props.data.text}"</p>
        {props.data.source && (
          <img src={props.data.source} alt={props.data.title} />
        )}
        {props.data.url && (
          <a href={props.data.url} target="_blank" rel="noopener noreferrer">
            {"read more"}
          </a>
        )}
        <span className="circle"></span>
      </div>
    </div>
  );
}

export default TimelineItem;
