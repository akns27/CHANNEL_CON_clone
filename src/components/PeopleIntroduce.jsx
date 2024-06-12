import React from "react";
import "../style.css";
import Category from "./Category";
import SpeakerCard from "./SpeakerCard";

function People_Introduce() {
  const categories = ["전체보기", "#스타트업", "#이커머스", "#CX", "#글로벌"];

  const speakers = [
    {
      speakerPhoto: "https://github.com/akns27/CHANNEL_CON_clone/blob/master/src/assets/speaker/%EA%B9%80%ED%83%9C%EC%9A%A9.png?raw=true", 
      companyPhoto: "https://github.com/akns27/CHANNEL_CON_clone/blob/master/src/assets/company/EO.png?raw=true",
      explainTexts: "글로벌 미디어 EO 창업자. 실리콘밸리, 한국, 베트남에 이어 최근에는 일본 시장을 개척 중이다. 벤처 파트너로서 투자도 진행하고 있다.",
      companyName: "EO",
      speakerName: "김태용",
      jobLevel: "대표"
    },
    {
      speakerPhoto: "https://github.com/akns27/CHANNEL_CON_clone/blob/master/src/assets/speaker/%EA%B9%80%EC%9E%AC%ED%99%8D.png?raw=true", 
      companyPhoto: "https://github.com/akns27/CHANNEL_CON_clone/blob/master/src/assets/company/%EC%B1%84%EB%84%90%EC%BD%94%ED%8D%BC%EB%A0%88%EC%9D%B4%EC%85%98.png?raw=true",
      explainTexts: "채널톡 공동 창업자이자 채널톡을 처음 세일즈 한 사람. 황무지에서 Zero to One을 만드는 것이 취미이자 특기. 요즘은 한국, 일본에 이어 미국 시장을 개척하고 있다.",
      companyName: "채널코퍼레이션",
      speakerName: "김재홍",
      jobLevel: "공동대표"
    },
    {
      speakerPhoto: "https://github.com/akns27/CHANNEL_CON_clone/blob/master/src/assets/speaker/%EB%B0%95%ED%95%98%EB%AF%BC.png?raw=true", 
      companyPhoto: "https://raw.githubusercontent.com/akns27/CHANNEL_CON_clone/master/src/assets/company/%EB%A9%94%EB%94%94%EC%BF%BC%ED%84%B0%EC%8A%A4.webp",
      explainTexts: "일본 Z세대 타깃 패션 커머스 플랫폼'NUGU(누구)'를 창업, 비지니스 총괄하고 있다. 3년 만에 연 매출 400억을달성. 일본 온/오프라인에서 K-패션, 뷰티를 알리며 성장 중이다.",
      companyName: "메디쿼터스",
      speakerName: "박하민",
      jobLevel: "COO"
    },
    
      {
        speakerPhoto: "https://github.com/akns27/CHANNEL_CON_clone/blob/master/src/assets/speaker/%EC%9D%B4%EC%A7%80%EC%9B%90.png?raw=true", 
        companyPhoto: "https://raw.githubusercontent.com/akns27/CHANNEL_CON_clone/master/src/assets/company/%ED%94%8C%EB%9E%AB%ED%8D%BC.webp",
        explainTexts: "체형커버 맛집 쇼핑알고리즘으로 불리는 9년차 플랫퍼 쇼핑몰의 대표. 폐업위기였던 쇼핑몰을 광고 없이 고객 중심으로 2년 만에 연 매출 50억 이상 달성. 고객과 함께 성장하는 것을 즐기고 고객에게 집착하는 프로집착러.",
        companyName: "플랫퍼",
        speakerName: "이지원",
        jobLevel: "대표"
      },
      {
        speakerPhoto: "https://github.com/akns27/CHANNEL_CON_clone/blob/master/src/assets/speaker/%EC%9D%B4%ED%98%84%ED%9D%AC.png?raw=true", 
        companyPhoto: "https://raw.githubusercontent.com/akns27/CHANNEL_CON_clone/master/src/assets/company/%EB%8B%B9%EA%B7%BC%EC%84%9C%EB%B9%84%EC%8A%A4.webp",
        explainTexts: "당근의 서비스 운영 자회사인 당근서비스의 COO. T전화, FLO 등 SKT의 다양한 제품에서 서비스 운영 조직을 세팅하고 리드한 서비스 운영 전문가.",
        companyName: "당근서비스",
        speakerName: "이현희",
        jobLevel: "COO"
      },
      {
        speakerPhoto: "https://github.com/akns27/CHANNEL_CON_clone/blob/master/src/assets/speaker/%EA%B0%95%ED%9D%AC%EC%A7%84.png?raw=true", 
        companyPhoto: "https://raw.githubusercontent.com/akns27/CHANNEL_CON_clone/master/src/assets/company/%ED%86%A0%EC%8A%A4.webp",
        explainTexts: "토스 (비바리퍼블리카) 의 고객상담 계열사 토스CX 대표. 외주 컨택 센터 상담팀 리딩부터 스타트업 CX팀장을 거쳐,토스CX자회사를 설립한 CX 업계 전문가.",
        companyName: "토스씨엑스",
        speakerName: "강희진",
        jobLevel: "대표"
      },
      {
        speakerPhoto: "https://github.com/akns27/CHANNEL_CON_clone/blob/master/src/assets/speaker/%EB%B0%95%EC%B0%A8%EC%A7%84.png?raw=true", 
        companyPhoto: "https://raw.githubusercontent.com/akns27/CHANNEL_CON_clone/master/src/assets/company/%ED%83%80%EC%9E%84%ED%8A%B8%EB%A6%AC.webp",
        explainTexts: "5300만 명이 사용하는 일본 국민 캘린더 앱 ‘타임트리’를 만든 대표. 창업 10년 만에 흑자 전환을 만들어 내며 글로벌 서비스로 성장하고 있다. 일본 라이프 25년 차. 놀랍게도 카카오 프렌즈 ‘프로도’의 실제 인물이기도 하다.",
        companyName: "타임트리",
        speakerName: "박차진",
        jobLevel: "대표"
      },
      {
        speakerPhoto: "https://github.com/akns27/CHANNEL_CON_clone/blob/master/src/assets/speaker/%ED%9B%84%EC%BF%A0%EB%8B%A4%EC%95%BC%EC%8A%A4%ED%83%80%EC%B9%B4.png?raw=true", 
        companyPhoto: "https://raw.githubusercontent.com/akns27/CHANNEL_CON_clone/master/src/assets/company/%ED%9B%84%EC%BF%A0%EB%8B%A4%EC%95%BC%EC%8A%A4%ED%83%80%EC%B9%B4_%EB%8D%94%EB%AA%A8%EB%8D%B8.webp",
        explainTexts: "일본 오라클 세일즈 컨설턴트를 거쳐 일본 세일즈포스 수석 부사장을 지냈다. 미국 현지에서 직접 세일즈를 배워, 일본 세일즈 프로세스 변화를 선도한 장본인.",
        companyName: `"더 모델:IT 솔루션 영업 프로세스" 저자`,
        speakerName: "후쿠다 야스타카",
        // jobLevel: "대표"
      },
      
      
    
    
  ];

  return (
    <div className="people-introduce-background">
      {/* <div className="people-introduce-title"> */}
        <div style={{ color: "#fff" }}>
          <div className="title" style={{ color: "#fff" }}>
            업계 최고 연사들과 이야기하는
          </div>
          <div className="title">비즈니스의 미래</div>
        </div>
        <div className="category-container">
          {categories.map((text, index) => (
            <Category key={index} text={text} />
          ))}
        </div>
        <div className="speakers-container">
          {speakers.map((speaker, index) => (
            <SpeakerCard
              key={index}
              speakerPhoto={speaker.speakerPhoto}
              companyPhoto={speaker.companyPhoto}
              explainTexts={speaker.explainTexts}
              companyName={speaker.companyName}
              speakerName={speaker.speakerName}
              jobLevel={speaker.jobLevel}
            />
          ))}
        </div>
      </div>
    // </div>
  );
}

export default People_Introduce;