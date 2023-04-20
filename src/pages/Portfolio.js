/** @format */

import React from "react";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Portfolio = ({ path }) => {
  return (
    <section className="portfolio scroll">
      <div className="inner">
        {/* 개발담당자 : 팀프로젝트, 개인 작업(5개 목표(퍼블리싱 > 프론트)) */}
        <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
          PORTFOLIO
        </h2>
        <div className="contents">
          {/* 팀프로젝트 */}
          <div className="portfolio-box Team">
            <h3
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="700"
            >
              Team Project
            </h3>
            {/* Swiper 배치 */}
            <Swiper
              loop={true}
              slidesPerView={1}
              spaceBetween={0}
              pagination={true}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="portfolio-slide"
            >
              <SwiperSlide>
                <div
                  className="portfolio-team burgerwang"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="800"
                >
                  <div className="portfolio-v">
                    <video controls loop muted autoPlay>
                      <source src={`${path}/images/burgerwang.mp4`} />
                    </video>
                  </div>
                  <div className="portfolio-right">
                    <ul className="portfilio-team-list">
                      <li className="title">버거왕</li>
                      <li className="period">
                        2023 . 01 . 11 - 2023 . 02 . 06
                      </li>
                      <li className="sub-title">기여도</li>
                      <li>
                        회원기능 (로그인/로그인 인증/회원 정보 수정 / 회원 탈퇴)
                      </li>
                      <li className="sub-title">프로젝트 도구</li>
                      <div className="tool-img">
                        <img
                          className="p-img"
                          src={`${path}/images/skill/skill-html.svg`}
                          alt="html"
                        />
                        <img
                          className="p-img"
                          src={`${path}/images/skill/skill-css.svg`}
                          alt="css"
                        />
                        <img
                          className="p-img"
                          src={`${path}/images/skill/skill-tailwindcss.svg`}
                          alt="tailwindcss"
                        />
                        <img
                          className="p-img"
                          src={`${path}/images/skill/skill-js.svg`}
                          alt="js"
                        />
                        <img
                          className="p-img"
                          src={`${path}/images/skill/skill-react.svg`}
                          alt="react"
                        />
                        <img
                          className="p-img"
                          src={`${path}/images/skill/skill-redux.svg`}
                          alt="redux"
                        />
                      </div>
                      <li className="sub-title"> 프로젝트 보러가기 </li>
                      <div className="tool-img">
                        <a
                          href="https://github.com/goldjade/burgerwang.git"
                          target="_blank"
                          rel="noopener noreferrer"
                          alt="portfolio"
                        >
                          <img
                            className="p-img"
                            src={`${path}/images/skill/skill-git.svg`}
                            alt="html"
                          />
                        </a>
                        <a
                          href="https://www.figma.com/file/S1cnkoI5L2jX64EYB6l0lZ/burgerwang?node-id=0-1&t=wSRZLRmBW5kEAiyx-0"
                          target="_blank"
                          rel="noopener noreferrer"
                          alt="portfolio"
                        >
                          <img
                            className="p-img"
                            src={`${path}/images/skill/skill-figma.svg`}
                            alt="html"
                          />
                        </a>
                      </div>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="portfolio-team dietdiary">
                  <div className="portfolio-v">
                    <video controls loop muted autoPlay>
                      <source src={`${path}/images/diet.mp4`} />
                    </video>
                  </div>
                  <div className="portfolio-right">
                    <ul className="portfilio-team-list">
                      <li className="title">나의 식단일지</li>
                      <li className="period">
                        2023 . 02 . 08 - 2023 . 03 . 03{" "}
                      </li>

                      <li className="sub-title">기여도</li>
                      <li>
                        디자인 / 식단기능 (식단 등록/수정/삭제 / 칼로리계산 /
                        목표달성 여부 확인)
                      </li>
                      <li className="sub-title">프로젝트 도구</li>
                      <div className="tool-img">
                        <img
                          className="p-img"
                          src={`${path}/images/skill/skill-html.svg`}
                          alt="html"
                        />
                        <img
                          className="p-img"
                          src={`${path}/images/skill/skill-css.svg`}
                          alt="html"
                        />
                        <img
                          className="p-img"
                          src={`${path}/images/skill/skill-tailwindcss.svg`}
                          alt="html"
                        />
                        <img
                          className="p-img"
                          src={`${path}/images/skill/skill-js.svg`}
                          alt="html"
                        />
                        <img
                          className="p-img"
                          src={`${path}/images/skill/skill-react.svg`}
                          alt="html"
                        />
                        <img
                          className="p-img"
                          src={`${path}/images/skill/skill-redux.svg`}
                          alt="html"
                        />
                      </div>
                      <li className="sub-title"> 프로젝트 보러가기 </li>

                      <div className="tool-img">
                        <a
                          href="https://github.com/goldjade/burgerwang.git"
                          target="_blank"
                          rel="noopener noreferrer"
                          alt="portfolio"
                        >
                          <img
                            className="p-img"
                            src={`${path}/images/skill/skill-git.svg`}
                            alt="html"
                          />
                        </a>
                        <a
                          href="https://www.figma.com/file/W8oVNeFTNm7SAsIfPOtgGI/2%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?node-id=0-1&t=D1GaooW4bZsewGKy-0"
                          target="_blank"
                          rel="noopener noreferrer"
                          alt="portfolio"
                        >
                          <img
                            className="p-img"
                            src={`${path}/images/skill/skill-figma.svg`}
                            alt="html"
                          />
                        </a>
                      </div>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="portfolio-team MathEdu">
                  <div className="portfolio-v">
                    <video controls loop muted autoPlay>
                      <source src={`${path}/images/methedu-team-min.mp4`} />
                    </video>
                  </div>
                  <div className="portfolio-right">
                    <ul className="portfilio-team-list">
                      <li className="title">MathEdu LMS</li>
                      <li className="period">
                        2023 . 02 . 08 - 2023 . 03 . 03{" "}
                      </li>
                      <li className="sub-title">기여도</li>
                      <li>
                        디자인 / 차트 기능( 성적 관리 및 테스트 차트 제작 /
                        주간,월간 성적 확인 / 데이터 그래프 출력)
                      </li>

                      <li className="sub-title">프로젝트 도구</li>
                      <div className="tool-img">
                        <img
                          className="p-img"
                          src={`${path}/images/skill/skill-html.svg`}
                          alt="html"
                        />
                        <img
                          className="p-img"
                          src={`${path}/images/skill/skill-css.svg`}
                          alt="html"
                        />
                        <img
                          className="p-img"
                          src={`${path}/images/skill/skill-tailwindcss.svg`}
                          alt="html"
                        />
                        <img
                          className="p-img"
                          src={`${path}/images/skill/skill-js.svg`}
                          alt="html"
                        />
                        <img
                          className="p-img"
                          src={`${path}/images/skill/skill-react.svg`}
                          alt="html"
                        />
                        <img
                          className="p-img"
                          src={`${path}/images/skill/skill-redux.svg`}
                          alt="html"
                        />
                        <img
                          className="p-img"
                          src={`${path}/images/skill/skill-type.svg`}
                          alt="html"
                        />
                      </div>
                      <li className="sub-title"> 프로젝트 보러가기 </li>

                      <div className="tool-img">
                        <a
                          href="https://github.com/goldjade/MathEdu"
                          target="_blank"
                          rel="noopener noreferrer"
                          alt="portfolio"
                        >
                          <img
                            className="p-img"
                            src={`${path}/images/skill/skill-git.svg`}
                            alt="html"
                          />
                        </a>
                        <a
                          href="https://www.figma.com/file/UizFng1xH46itn3D6XnrlY/%EC%97%90%EB%A5%B4%EB%A9%94%EC%8A%A4?t=wohUlbRU1SStGzAp-1"
                          target="_blank"
                          rel="noopener noreferrer"
                          alt="portfolio"
                        >
                          <img
                            className="p-img"
                            src={`${path}/images/skill/skill-figma.svg`}
                            alt="html"
                          />
                        </a>
                      </div>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          {/* 개인 스터디 프로젝트 */}
          <div className="portfolio-box study">
            <h3
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="700"
            >
              Study Project
            </h3>
            {/* Swiper 배치 */}

            <Swiper
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="800"
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
                  <img src={`${path}/images/study1.jpg`} alt="portfolio" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="https://goldjade.github.io/hansalim/"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src={`${path}/images/study2.jpg`} alt="portfolio" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="https://goldjade.github.io/hyundai-clone"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src={`${path}/images/study3.jpg`} alt="portfolio" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="https://github.com/goldjade/wonderplace-clone"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src={`${path}/images/study4.jpg`} alt="portfolio" />
                </a>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="portfolio-box ect">
            <h3
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="700"
            >
              ECT
            </h3>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="800"
              className="ect-list"
            >
              <div className="ect-list-img">
                <img src={`${path}/images/ect4.jpg`} alt="portfolio" />
                <p className="neyong">
                  <span>#패키지 디자인 #배너이미지</span>
                </p>
              </div>
              <div className="ect-list-img">
                <img src={`${path}/images/ect5.jpg`} alt="portfolio" />
                <p className="neyong">
                  <span>#패키지 디자인 #배너이미지</span>
                </p>
              </div>
              <div className="ect-list-img">
                <img src={`${path}/images/ect6.jpg`} alt="portfolio" />
                <p className="neyong">
                  <span>#배너이미지</span>
                </p>
              </div>
              <div className="ect-list-img">
                <img src={`${path}/images/ect3.jpg`} alt="portfolio" />
                <p className="neyong">
                  <span>#캐리커처</span>
                </p>
              </div>
              <div className="ect-list-img">
                <img src={`${path}/images/ect2.jpg`} alt="portfolio" />
                <p className="neyong">
                  <span>#일상 #일러스트</span>
                </p>
              </div>
              <div className="ect-list-img">
                <img src={`${path}/images/ect0.jpg`} alt="portfolio" />
                <p className="neyong">
                  <span>#컷툰</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
