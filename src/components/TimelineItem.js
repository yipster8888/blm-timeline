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
        <p>{props.data.text}</p>
        {props.data.image && (
          <img src={props.data.image.source} alt={props.data.image.alt} />
        )}
        {props.data.link && (
          <a
            href={props.data.link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.data.link.text}
          </a>
        )}
        <span className="circle"></span>
      </div>
    </div>
  );
}

export default TimelineItem;
