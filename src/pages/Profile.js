import React from "react";
import { BsPersonFill } from "react-icons/bs";
import { TiHeartFullOutline } from "react-icons/ti";
import { HiCake } from "react-icons/hi";
import { RiGitBranchFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
const Profile = ({ path }) => {
  return (
    <section className="profile scroll">
      <div className="inner">
        {/* 자기소개(인사팀) : 약력, 학력, 업무, 교육, 성격, MBTI */}
        <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          ABOUT ME
        </h2>
        <div
          className="contents"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="600"
        >
          <span className="img" />

          <div className="a-profile about-card">
            <span className="about-title">Profile</span>
            <span className="about-name">
              <BsPersonFill className="a-icon" />
              최금옥
            </span>
            <span>
              <TiHeartFullOutline className="a-icon" />
              INFP
            </span>
            <span>
              <HiCake className="a-icon" />
              1991.08.31
            </span>
            <span>
              <RiGitBranchFill className="a-icon" />
              publisher & front-end
            </span>
            <span>
              <MdEmail className="a-icon" />
              bcaca0831@gmail.com
            </span>
          </div>
          <div className="a-education about-card">
            <span className="about-title">Education</span>
            <span className="about-period">2017.10 - 2018.04 </span>
            게임콘텐츠개발(MAX게임콘텐츠제작)양성훈련
            <span className="about-period">2022.10 - 2023.04</span>
            <span>
              기업 요구를 반영한 프로젝트 중심 프론트엔드 React(리액트)
              개발자양성
            </span>
          </div>
          <div className="a-experince about-card">
            <span className="about-title">Experince</span>
            <span className="about-period"> 2011.08 - 2015.07</span>
            <span>희일커뮤니케이션</span>
            <span className="about-period"> 201901 202203</span>
            <span>주식회사 베스트(Best)</span>
          </div>
        </div>
        <div className="contact">
          <a
            href="#"
            download
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="700"
          >
            이력서받기
          </a>
        </div>
      </div>
    </section>
  );
};

export default Profile;
