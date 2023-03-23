/** @format */

import React from "react";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Portfolio = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <section className="portfolio scroll">
      <div className="inner">
        {/* 개발담당자 : 팀프로젝트, 개인 작업(5개 목표(퍼블리싱 > 프론트)) */}
        <h2 data-aos="fade-up">Portfolio</h2>
        <div className="contents">
          {/* 팀프로젝트 */}

          <div className="portfolio-box">
            <h3 data-aos="fade-up">Team Project</h3>
            <div className="portfolio-team burgerwang">
              <div className="portfolio-left">
                <a
                  href="https://github.com/goldjade/burgerwang.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <video autoplay controls loop muted>
                    <source src={`${path}/images/burgerwang.mp4`} />
                  </video>
                </a>
                (이미지 클릭시 프로젝트 페이지로 이동합니다.)
              </div>
              <div className="portfolio-right">
                <ul className="portfilio-team-list">
                  <li>프로젝트명 :버거왕</li>
                  <li>프로젝트 기간 :2023.01.11 - 2023. 02.06 </li>
                  <li>프로젝트 주제 : 배달 서비스 </li>
                  <li>
                    프로젝트 기여도 : 회원 (로그인/로그인 인증/회원 정보
                    수정/아이디 찾기/비밀번호 찾기/회원 탈퇴/쿠폰)
                  </li>
                  <li>프로젝트 도구 : </li>
                  <li>
                    프로젝트 사용언어 : html css javaScript tailwind react redux
                  </li>
                  <li>프로젝트 피그마 : </li>
                  <li>
                    프로젝트 Git :
                    <a
                      href="https://github.com/goldjade/burgerwang.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      alt="portfolio"
                    >
                      깃허브 링크
                    </a>
                  </li>
                  <li>프로젝트 노션 : </li>
                </ul>
              </div>
            </div>
            <div className="portfolio-team dietdiary">
              <div className="portfolio-left">
                <a
                  href="https://github.com/goldjade/dietdiary.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <video autoplay controls loop muted>
                    <source src={`${path}/images/diet.mp4`} />
                  </video>
                </a>
                (이미지 클릭시 프로젝트 페이지로 이동합니다.)
              </div>
              <div className="portfolio-right">
                <ul className="portfilio-team-list">
                  <li>프로젝트명 :dietdiary </li>
                  <li>프로젝트 기간 :2023.02.07 - 2023. 03. 06 </li>
                  <li>
                    프로젝트 주제 : 현대인의 대부분은 건강을 챙기지 못하면서
                    살아감. 건강하지 못한 사람도, 건강한 사람도 식단 관리 /
                    운동을 할 수 있다는 생각에서 나온 기획. 질병 관리(약 복용)와
                    운동을 함께 병행 할 수 있음.
                  </li>
                  <li>
                    프로젝트 기여도 : 식단 페이지 오늘의 식단 출력 추천 식단
                    식단 달성도 여부 달력 관련 UI 작업 전체{" "}
                  </li>
                  <li>프로젝트 도구 : </li>
                  <li>프로젝트 사용언어 : </li>
                  <li>
                    프로젝트 피그마 :{" "}
                    <a href="https://www.figma.com/file/W8oVNeFTNm7SAsIfPOtgGI/2%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?node-id=0-1&t=P8EEe8q4LEkx2Tgh-0"></a>{" "}
                  </li>
                  <li>
                    프로젝트 Git :{" "}
                    <a
                      href="https://github.com/goldjade/dietdiary.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      alt="portfolio"
                    >
                      작업물보기
                    </a>
                  </li>
                  <li>프로젝트 노션 : </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 개인 스터디 프로젝트 */}
          <div className="portfolio-box">
            <h3>Study Project</h3>
            {/* Swiper 배치 */}
            <Swiper
              loop={true}
              slidesPerView={1}
              spaceBetween={0}
              pagination={true}
              navigation={true}
              breakpoints={{
                860: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                960: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1180: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              modules={[Pagination, Navigation]}
              className="portfolio-slide"
            >
              <SwiperSlide>
                <a
                  href="https://goldjade.github.io/stx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src={`${path}/images/stx.jpg`} alt="portfolio" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src={`${path}/images/sample.png`} alt="portfolio" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src={`${path}/images/sample.png`} alt="portfolio" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src={`${path}/images/sample.png`} alt="portfolio" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src={`${path}/images/sample.png`} alt="portfolio" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src={`${path}/images/sample.png`} alt="portfolio" />
                </a>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
