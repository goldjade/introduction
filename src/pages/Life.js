/** @format */

import React from "react";

const Life = ({ path }) => {
  return (
    <section className="life scroll">
      <div className="inner">
        <h2>Life</h2>
        <div className="contents">
          {/* 나의 대외활동, 취미, 회사 대표가 바라는 인재상 */}
          <ul className="life-list">
            <li className="life-list-item item1"> 
            <p className="neyong">
              <span>#캠핑</span>
            </p>
            </li>
            <li className="life-list-item item2"> 
            <p className="neyong">
              <span>#기타 #7080</span>
            </p>
            </li>
            <li className="life-list-item item3"> 
            <p className="neyong">
              <span>#여행 #제주</span>
            </p>
            </li>
            <li className="life-list-item item4"> 
            <p className="neyong">
              <span>#홍차</span>
            </p>
            </li>
            <li className="life-list-item item5"> 
            <p className="neyong">
              <span>#휴식</span>
            </p>
            </li>
            <li className="life-list-item item6"> 
            <p className="neyong">
              <span>#디저트</span>
            </p>
            </li>
            <li className="life-list-item item7"> 
            <p className="neyong">
              <span>#산책</span>
            </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Life;
