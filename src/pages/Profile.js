/** @format */

import React from "react";

const Profile = () => {
  return (
    <section className="profile scroll">
      <div className="inner">
        {/* 자기소개(인사팀) : 약력, 학력, 업무, 교육, 성격, MBTI */}
        <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          Profile
        </h2>
        <div
          className="contents"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div className="left">
            <span className="img" />

            <p>최금옥</p>
            <p>1991.08.31</p>
            <p>publisher & front-end</p>
            <p>bcaca0831@gmail.com</p>
          </div>
          <div className="right">
            <div className="top">
              <p>꾸준하고 성실하게 진취적으로!</p>
              <p>
                거북이가 토끼와의 경주에서 이길 수 있었던 이유는 쉬지 않고
                끝까지 달렸기 때문입니다.
                <br />
                저는 비록 조금 느릴지라도 꾸준하고 성실하게 성장해 나가는
                사람입니다.
              </p>
            </div>
            <div className="bottom">
              <div className="Education">
                <p>Education</p>
                <p>그린컴퓨터아트학원</p>
                게임콘텐츠개발(MAX게임콘텐츠제작)양성훈련
                <span>201710 201804 </span>
                <p>
                  기업 요구를 반영한 프로젝트 중심 프론트엔드 React(리액트)
                  개발자양성
                  <span>202210 - 202304</span>
                </p>
              </div>
              <div className="Experince">
                <p>Experince</p>
                <p>
                  희일커뮤니케이션 <span> 201108 - 201507</span>
                </p>
                <p>
                  주식회사 베스트(Best) <span> 201901 202203</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
