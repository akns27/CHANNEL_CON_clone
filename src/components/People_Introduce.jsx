import React from "react";
import "../style.css";
import Category from "./Category";

function People_Introduce() {
  const categories = ["전체보기", "#스타트업", "#이커머스", "#CX", "#글로벌"];
  return (
    <div className="people-introduce-background">
      <div className="people-intoduce-title">
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
      </div>
    </div>
  );
}

export default People_Introduce;
