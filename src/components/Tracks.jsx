import React from "react";
import "../style.css";
import TrackBox from "./TrackBox";
import TrackBox2 from "./TrackBox2";

function Tracks() {
  const track1Events = [
    {
      time: "13:20 - 14:00",
      tags: "#스타트업 #글로벌",
      title:
        "데스 밸리를 넘어 그로스 스테이지로, 스타트업 대표들의 치열한 생존 스토리",
      description:
        "스타트업 대표라면 한 번쯤 겪어봤을 데스 밸리. 이 위기를 극복하고, 성장을 만든 대표들의 비하인드 스토리를 들어보세요.",
      speakers: [
        { title: "타임트리", name: "박차진 대표" },
        { title: "EO", name: "김태용 대표" },
      ],
    },
    {
      time: "14:15 - 14:45",
      tags: "#이커머스 #글로벌",
      title:
        "연 매출 6000억 일본 패션 기업 준, 온라인 구매전환율 40% 만든 비결은?",
      description:
        "준은 온라인몰에서 채팅상담으로만 매월 약 1억 원의 매출을 만들어내고 있어요. 오프라인 기반으로 성장한 패션 기업이 온라인몰에서 성과를 낼 수 있었던 이유는 무엇일까요?",
      speakers: [
        { title: "준", name: "나카지마 켄지 EC 사업부 이사" },
      ],
    },
  ];
  const track2Events = [
    {
      time: "13:20 - 14:00",
      tags: "#CX #이커머스",
      title:
        "채널팀이 준비하는 온라인 비즈니스의 미래: 마일스톤 대방출",
      description:
        "AI 인터넷 전화, 영상 미트, 워크플로우 그리고 채널엑스까지. 채널톡 비즈니스 세계관의 주역, 새로운 기능들을 소개합니다.",
      speakers: [
        { title: "채널코퍼레이션", name: "최시원 공동 대표" },
        //, name: "최완섭 CPO", name:"이해빈 리드 백엔드 엔지니어"
        
      ],
    },
    {
      time: "14:15 - 15:00",
      tags: "#CX #CX",
      title:
        "AI 시대의 CS 진화, 상담을 넘어 고객 경험까지",
      description:
        "AI가 단순･반복 문의를 처리하면 상담원은 무엇을 해야 할까요? VoC 분석, 제품 개선, 매출 전환, VIP 고객 관리까지. AI 시대에 CX스페셜리스트로 거듭날 수 있는 방법을 알려드릴게요.",
      speakers: [
        { title: "스펙터", name: "안현경 CX 리드" },
        { title: "팀스파르타", name: "이다희 CX 팀장" },
        { title: "세터", name: "박진욱 MD" },
        //, name: "최완섭 CPO", name:"이해빈 리드 백엔드 엔지니어"
        
      ],
    },
  ];
  

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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "0.3125rem",
          }}
        >
          <div className="track-text-box">
            <div className="track-title">Track 1</div>
            <div className="track-description">
              리더십을 위한 비즈니스 스토리
            </div>
          </div>
          {track1Events.map((event, index) => (
            <TrackBox
              key={index}
              time={event.time}
              tags={event.tags}
              title={event.title}
              description={event.description}
              speakers={event.speakers}
            />
          ))}
        </div>
      </div>
      <div className="track-connect">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "0.3125rem",
          }}
        >
          <div className="track-text-box">
            <div className="track-title" style={{color:"#EA94FF"}}>Track 2</div>
            <div className="track-description" style={{color:"#EA94FF"}}>
              실무자를 위한 직무 노하우
            </div>
          </div>
          {track2Events.map((event, index) => (
            <TrackBox2
              key={index}
              time={event.time}
              tags={event.tags}
              title={event.title}
              description={event.description}
              speakers={event.speakers}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tracks;
