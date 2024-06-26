import React from "react";
import "../style.css";

function HeroPage() {
  return (
    <div className="hero-container">
      <div className="hero-banner">
      <div className="hero-content">
        <div className="hero-text-container">
          <div className="hero-img-container">
            <div className="hero-logo">
              <img src="https://raw.githubusercontent.com/akns27/CHANNEL_CON_clone/68280e5d8707ec254c8bbcc00304132f77d2d01d/src/assets/Logo.svg" alt="Logo" />
            </div>
            <div className="hero-title">
              <img src="https://raw.githubusercontent.com/akns27/CHANNEL_CON_clone/caf25204dfddbcbfe42101a6c241737c34213ced/src/assets/HeroTitle.svg" alt="Hero Title" />
            </div>
          </div>
          <div className="hero-description">
            2024.04.03 그랜드 인터컨티넨탈 서울 파르나스
          </div>
        </div>
        <div className="hero-btn">
          <span className="hero-btn-text">응모가 마감되었습니다</span>
        </div>
      </div>
      </div>
    </div>
  );
}

export default HeroPage;