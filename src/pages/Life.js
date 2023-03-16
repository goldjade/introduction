/** @format */

import React from 'react';

const Life = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <section className="life scroll">
      <div className="inner">
        <h2>Life</h2>
        <div className="contents">
          {/* 나의 대외활동, 취미, 회사 대표가 바라는 인재상 */}
          <ul className="life-list">
            <li className="life-list-item">
              <img src={`${path}/images/life1.jpg`} alt="life" />
            </li>
            <li className="life-list-item">
              <img src={`${path}/images/life2.jpg`} alt="life" />
            </li>
            <li className="life-list-item">
              <img src={`${path}/images/life4.jpg`} alt="life" />
            </li>
            <li className="life-list-item">
              <img src={`${path}/images/life5.jpg`} alt="life" />
            </li>
            <li className="life-list-item">
              <img src={`${path}/images/life6.jpg`} alt="life" />
            </li>
            <li className="life-list-item">
              <img src={`${path}/images/life7.jpg`} alt="life" />
            </li>
            <li className="life-list-item">
              <img src={`${path}/images/life8.jpg`} alt="life" />
            </li>
            <li className="life-list-item">
              <img src={`${path}/images/life9.jpg`} alt="life" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Life;
