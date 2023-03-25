/** @format */

import React from 'react';

const Vision = ({path}) => {
  return (
    <section className="vision scroll">
      <div className="inner">
        {/* 1년 목표, 3년후 목표, 5년후 목표 */}
        <h2>Vision</h2>
        <div className="contents">
          <ul className="vision-list">
            <li>
              1년후 : 취업성공한 응애 개발자
            </li>
            <li>
              3년후 : 풀스택 가즈아
            </li>
            <li>
              5년후 : AI에서 살아남은 휴먼 개발자
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Vision;
