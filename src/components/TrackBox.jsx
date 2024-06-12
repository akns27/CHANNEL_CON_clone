import React from "react";
import "../style.css";

function TrackBox() {
  return (
    <div className="whole-box">
      <div className="event-box">
        <div className="evt-without-speaker">
          <div className="event-time">13:20 - 14:00</div>
          <div className="event-tags-title-description">
            <div className="evt-tags-title">
              <div className="event-tags">#스타트업 #글로벌</div>
              <div className="event-title">
                데스 밸리를 넘어 그로스 스테이지로, 스타트업 대표들의 치열한 생존 스토리
              </div>
            </div>
            <div className="event-description">
              스타트업 대표라면 한 번쯤 겪어봤을 데스 밸리. 이 위기를 극복하고,
              성장을 만든 대표들의 비하인드 스토리를 들어보세요.
            </div>
          </div>
        </div>
        <div className="event-speakers">
          <div className="speaker">
            <span className="speaker-title">타임트리</span> 박차진 대표
          </div>
          <div className="speaker">
            <span className="speaker-title">EO</span> 김태용 대표
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrackBox;