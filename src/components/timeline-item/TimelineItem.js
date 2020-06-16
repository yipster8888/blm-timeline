import React from "react";
import "./TimelineItem.css";

function TimelineItem(props) {
  //Determine the colour for the tag
  const date = new Date(props.data.date);

  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        {props.data.cityName && (
          <span className="tag" style={{ background: props.data.colour }}>
            {props.data.cityName}
          </span>
        )}
        <time>
          {getMonthName(date.getMonth()) +
            " " +
            date.getDate() +
            ", " +
            date.getFullYear()}
        </time>
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

// Shortened months included to avoid date/location tag being squished
function getMonthName(index) {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  return monthNames[index];
}

export default TimelineItem;
