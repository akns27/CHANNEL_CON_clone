import React from "react";
import "../style.css";

function TrackBox({ time, tags, title, description, speakers }) {
  return (
    <div className="whole-box">
      <div className="event-box">
        <div className="evt-without-speaker">
          <div className="event-time">{time}</div>
          <div className="event-tags-title-description">
            <div className="evt-tags-title">
              <div className="event-tags">{tags}</div>
              <div className="event-title">{title}</div>
            </div>
            <div className="event-description">{description}</div>
          </div>
        </div>
        <div className="event-speakers">
          {speakers.map((speaker, index) => (
            <div className="speaker" key={index}>
              <span className="speaker-title">{speaker.title}</span> {speaker.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrackBox;