import React from "react";
import "../style.css";

function SpeakerCard({
  speakerPhoto,
  companyPhoto,
  explainTexts,
  companyName,
  speakerName,
  jobLevel,
}) {
  return (
    <div className="card-container">
      <div className="photo-container">
        <div className="speaker-photo">
          <img src={speakerPhoto} alt="Speaker" />
        </div>
        <div className="company-photo">
          <img src={companyPhoto} alt="Company" />
        </div>
      </div>
      <div className="speaker-explain">
        <div className="company-name">{companyName}</div>
        <div className="spname-joblev">
          <div className="speaker-name">{speakerName}</div>
          <div className="job-level">{jobLevel}</div>
        </div>
        <div className="explain-texts">{explainTexts}</div>
      </div>
    </div>
  );
}

export default SpeakerCard;