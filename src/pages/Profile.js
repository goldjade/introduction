import React, { useRef } from "react";
import { BsGithub, BsPersonFill } from "react-icons/bs";
import { TiHeartFullOutline } from "react-icons/ti";
import { HiCake, HiDocumentDownload } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { AiFillMessage, AiFillStar } from "react-icons/ai";
import { IoMail } from "react-icons/io5";
const Profile = ({ path }) => {
  const tooltipRef = useRef(null);

  const handleMouseMove = (event) => {
    const tooltip = tooltipRef.current;
    tooltip.style.top = event.clientY - 480 + "px"; // 마우스 Y 좌표에 10px 추가
    tooltip.style.right = -35 + "px"; // 마우스 X 좌표에서 20px 뺌
  };

  return (
    <section className="profile scroll">
      <div className="inner">
        <h2>ABOUT ME</h2>
        <div className="contents">
          <span alt="프로필이미지" className="profile-img" />
          <ul className="profile-list">
            <li className="list-card">
              <span className="list-title">Profile</span>
              <span>
                <BsPersonFill className="a-icon" />
                최금옥
              </span>
              <span>
                <TiHeartFullOutline className="a-icon" />
                INTP
              </span>
              <span>
                <HiCake className="a-icon" />
                1991.08.31
              </span>
              <span>
                <AiFillStar className="a-icon" />
                publisher & front-end
              </span>
              <span>
                <MdEmail className="a-icon" />
                bcaca0831@gmail.com
              </span>
            </li>
            <span className="bar" />
            <li className="list-card">
              <span className="list-title">Education</span>
              <span className="list-period">2017.10 - 2018.04 </span>
              <span className="a-mb">
                게임콘텐츠개발(MAX게임콘텐츠제작)양성훈련
              </span>
              <span className="list-period">2022.10 - 2023.04</span>
              <span>
                기업 요구를 반영한 프로젝트 중심 프론트엔드 React(리액트)
                개발자양성
              </span>
            </li>
            <span className="bar" />
            <li className="list-card">
              <span className="list-title">Experince</span>
              <span className="list-period"> 2011.08 - 2015.07</span>
              <span className="a-mb">희일커뮤니케이션</span>
              <span className="list-period"> 2019.01 2022.03</span>
              <span>주식회사 베스트(Best)</span>
            </li>
          </ul>
        </div>
        <div className="contact">
          <a href="https://open.kakao.com/o/sEVLYIef" target="_blank">
            <AiFillMessage className="c-icon" />
            <span className="tooltip talk">Talk</span>
          </a>
          <a href="mailto:bcaca0831@gamil.com" target="_blank">
            <IoMail className="c-icon" />
            <span className="tooltip email">Email</span>
          </a>
          <a href="https://github.com/goldjade" target="_blank">
            <BsGithub className="c-icon github" />
            <span className="tooltip">GitHub</span>
          </a>
          <a
            href={`${path}/최금옥_이력서.pdf`}
            download
            onMouseMove={handleMouseMove}
          >
            <HiDocumentDownload className="c-icon" />
            <span className="tooltip cv">이력서</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Profile;

{
  /* <div className="inner">
<h2>
  list ME
</h2>
<div className="contents">
  <span className="img" />

  <div className="list-card">
    <span className="list-title">Profile</span>
    <span>
      <BsPersonFill className="a-icon" />
      최금옥
    </span>
    <span>
      <TiHeartFullOutline className="a-icon" />
      INTP
    </span>
    <span>
      <HiCake className="a-icon" />
      1991.08.31
    </span>
    <span>
      <AiFillStar className="a-icon" />
      publisher & front-end
    </span>
    <span>
      <MdEmail className="a-icon" />
      bcaca0831@gmail.com
    </span>
  </div>
  <span className="bar" />
  <div className="list-card">
    <span className="list-title">Education</span>
    <span className="list-period">2017.10 - 2018.04 </span>
    <span className="a-mb">
      게임콘텐츠개발(MAX게임콘텐츠제작)양성훈련
    </span>
    <span className="list-period">2022.10 - 2023.04</span>
    <span>
      기업 요구를 반영한 프로젝트 중심 프론트엔드 React(리액트)
      개발자양성
    </span>
  </div>
  <span className="bar" />
  <div className="list-card">
    <span className="list-title">Experince</span>
    <span className="list-period"> 2011.08 - 2015.07</span>
    <span className="a-mb">희일커뮤니케이션</span>
    <span className="list-period"> 2019.01 2022.03</span>
    <span>주식회사 베스트(Best)</span>
  </div>
</div>
<div className="contact">
  <a href="https://open.kakao.com/o/sEVLYIef" target="_blank">
    <AiFillMessage className="c-icon" />
  </a>
  <a href="mailto:bcaca0831@gamil.com" target="_blank">
    <IoMail className="c-icon" />
  </a>
  <a href="https://github.com/goldjade" target="_blank">
    <BsGithub className="c-icon" />
  </a>
  <a
    href={`${path}/최금옥_이력서.pdf`}
    download
    onMouseMove={handleMouseMove}
  >
    <HiDocumentDownload className="c-icon" />
    <span ref={tooltipRef} className="download-tooltip">
      이력서 다운로드
    </span>
  </a>
</div>
</div> */
}
