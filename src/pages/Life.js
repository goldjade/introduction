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
              1
              {/* <img src={`${path}/images/life1.jpg`} alt="life" /> */}
            </li>
            <li className="life-list-item item2">2
              {/* <img src={`${path}/images/life2.jpg`} alt="life" /> */}
            </li>
            <li className="life-list-item item3">3
              {/* <img src={`${path}/images/life3.jpg`} alt="life" /> */}
            </li>
            <li className="life-list-item item4">4
              {/* <img src={`${path}/images/life4.jpg`} alt="life" /> */}
            </li>
            <li className="life-list-item item5">5
              {/* <img src={`${path}/images/life5.jpg`} alt="life" /> */}
            </li>
            <li className="life-list-item item6">6
              {/* <img src={`${path}/images/life6.jpg`} alt="life" /> */}
            </li>
            <li className="life-list-item item7">7
              {/* <img src={`${path}/images/life7.jpg`} alt="life" /> */}
            </li>

          </ul>
        </div>
      </div>
    </section>
  );
};

export default Life;
