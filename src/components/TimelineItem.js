import React from "react";

function TimelineItem(props) {
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <span
          className="tag"
          style={{ background: props.data.category.colour }}
        >
          {props.data.category.tag}
        </span>
        <time>{props.data.date}</time>
        <p className="timeline-item-title">{props.data.title}</p>
        <p className="timeline-item-p">"{props.data.text}"</p>
        {props.data.image && (
          <img src={props.data.image.source} alt={props.data.image.alt} />
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
