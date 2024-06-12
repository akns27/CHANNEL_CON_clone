import React from "react";
import "../style.css";
import TrackBox from "./TrackBox";

function Tracks() {
  return (
    <div className="tracks-background">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.5625rem",
        }}
      >
        <div className="title" style={{ color: "#fff" }}>
          2가지 인사이트 트랙을 만나보세요
        </div>
        <div className="family-paragraph">
          리더십을 위한 비즈니스 스토리부터 실무자를 위한 노하우까지!
        </div>
        <div className="caption">
          * 강연 일정 및 내용은 상황에 따라 조정될 수 있습니다
        </div>
      </div>
      <div className="track-connect">
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "0.3125rem",
          }}>
          <div className="track-text-box">
            <div className="track-title">Track 1</div>
            <div className="track-description">
              리더십을 위한 비즈니스 스토리
            </div>
          </div>
          <TrackBox />
        </div>
      </div>
    </div>
  );
}

export default Tracks;
