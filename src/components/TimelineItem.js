import React from "react";

import CityData from "../CityData";

function TimelineItem(props) {
  //Determine the colour for the tag
  let tagColour;
  const city = CityData.find((element) => element.name === props.data.location);
  city ? (tagColour = city.colour) : (tagColour = "grey");

  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <span className="tag" style={{ background: tagColour }}>
          {props.data.location}
        </span>
        <time>{props.data.date}</time>
        <p className="timeline-item-title">{props.data.title}</p>
        <p className="timeline-item-p">"{props.data.text}"</p>
        {props.data.imageURL && (
          <img src={props.data.imageURL} alt={props.data.title} />
        )}
        {props.data.newsURL && (
          <a
            href={props.data.newsURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {"read more"}
          </a>
        )}
        <span className="circle"></span>
      </div>
    </div>
  );
}

export default TimelineItem;
