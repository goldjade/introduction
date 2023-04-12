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
        <h2 data-aos="fade-up">PORTFOLIO</h2>
        <div className="contents">
          {/* 팀프로젝트 */}

          <div className="portfolio-box">
            <h3 data-aos="fade-up">Team Project</h3>
            {/* <div className="portfolio-team burgerwang">
              <div className="portfolio-left">
                <video controls loop muted autoPlay>
                  <source src={`${path}/images/burgerwang.mp4`} />
                </video>
              </div>
              <div className="portfolio-right">
                <ul className="portfilio-team-list">
                  <li className="title">버거왕</li>
                  <li className="period">2023 . 01 . 11 - 2023 . 02 . 06 </li>

                  <li className="sub-title">구현 기능</li>
                  <li>회원 가입 / 정보수정 / 회원 탈퇴 가능</li>
                  <li>매장 위치 / 길찾기 </li>
                  <li>
                    메뉴 / 장바구니 / 주문하기 / 주문내역 / 주소정보 /
                    마이배달지
                  </li>
                  <li className="sub-title">기여도</li>
                  <li>
                    회원기능 (로그인/로그인 인증/회원 정보 수정 / 회원 탈퇴)
                  </li>
                  <li className="sub-title">프로젝트 도구</li>
                  <div className="tool-img">
                    <img
                      src={`${path}/images/skill/skill-html.svg`}
                      alt="html"
                    />
                    <img
                      src={`${path}/images/skill/skill-css.svg`}
                      alt="html"
                    />
                    <img
                      src={`${path}/images/skill/skill-tailwindcss.svg`}
                      alt="html"
                    />
                    <img src={`${path}/images/skill/skill-js.svg`} alt="html" />
                    <img
                      src={`${path}/images/skill/skill-react.svg`}
                      alt="html"
                    />
                    <img
                      src={`${path}/images/skill/skill-redux.svg`}
                      alt="html"
                    />
                  </div>
                  <li className="sub-title"> 프로젝트 보러가기 </li>
                  <li>
                    <a
                      href="https://github.com/goldjade/burgerwang.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      alt="portfolio"
                    >
                      <img
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
                        src={`${path}/images/skill/skill-figma.svg`}
                        alt="html"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}

            <div className="portfolio-team dietdiary">
            
              <div className="portfolio-v">
                <div className="neyong">
                  <p>내용이지롱</p>
                </div>
                <video controls loop muted autoPlay>
                  <source src={`${path}/images/diet.mp4`} />
                </video>
              </div>
              <div className="portfolio-right">
                <ul className="portfilio-team-list">
                  <li className="title">나의 식단일지</li>
                  <li className="period">2023 . 02 . 08 - 2023 . 03 . 03 </li>

                  <li className="sub-title">구현 기능</li>
                  <li>회원 가입 / 정보수정 / 회원 탈퇴 가능</li>
                  <li>
                    샘플 식단 등록 / 직접 식단 등록 / 식단 수정 / 식단 삭제{" "}
                  </li>
                  <li>
                    목표 칼로리 달성여부 / 이전 식단 확인 섭취 약물 등록 / 수정
                    / 삭제
                  </li>

                  <li className="sub-title">기여도</li>
                  <li>
                    디자인 / 식단기능 (식단 등록/수정/삭제 / 칼로리계산 /
                    목표달성 여부 확인)
                  </li>
                  <li className="sub-title">프로젝트 도구</li>
                  <div className="tool-img">
                    <img
                      src={`${path}/images/skill/skill-html.svg`}
                      alt="html"
                    />
                    <img
                      src={`${path}/images/skill/skill-css.svg`}
                      alt="html"
                    />
                    <img
                      src={`${path}/images/skill/skill-tailwindcss.svg`}
                      alt="html"
                    />
                    <img src={`${path}/images/skill/skill-js.svg`} alt="html" />
                    <img
                      src={`${path}/images/skill/skill-react.svg`}
                      alt="html"
                    />
                    <img
                      src={`${path}/images/skill/skill-redux.svg`}
                      alt="html"
                    />
                  </div>
                  <li className="sub-title"> 프로젝트 보러가기 </li>

                  <li>
                    <a
                      href="https://github.com/goldjade/burgerwang.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      alt="portfolio"
                    >
                      <img
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
                        src={`${path}/images/skill/skill-figma.svg`}
                        alt="html"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>


            {/* <div className="portfolio-team MathEdu">
              <div className="portfolio-left">
                <video controls loop muted autoPlay>
                  <source src={`${path}/images/methedu-team-min.mp4`} />
                </video>
              </div>
              <div className="portfolio-right">
                <ul className="portfilio-team-list">
                  <li className="title">MathEdu LMS</li>
                  <li className="period">2023 . 02 . 08 - 2023 . 03 . 03 </li>

                  <li className="sub-title">구현 기능</li>
                  <li>회원 가입 / 정보수정 / 회원 탈퇴 가능</li>
                  <li>
                    샘플 식단 등록 / 직접 식단 등록 / 식단 수정 / 식단 삭제{" "}
                  </li>
                  <li>
                    목표 칼로리 달성여부 / 이전 식단 확인 섭취 약물 등록 / 수정
                    / 삭제
                  </li>

                  <li className="sub-title">기여도</li>
                  <li>
                    디자인 / 식단기능 (식단 등록/수정/삭제 / 칼로리계산 /
                    목표달성 여부 확인)
                  </li>
                  <li className="sub-title">프로젝트 도구</li>
                  <div className="tool-img">
                    <img
                      src={`${path}/images/skill/skill-html.svg`}
                      alt="html"
                    />
                    <img
                      src={`${path}/images/skill/skill-css.svg`}
                      alt="html"
                    />
                    <img
                      src={`${path}/images/skill/skill-tailwindcss.svg`}
                      alt="html"
                    />
                    <img src={`${path}/images/skill/skill-js.svg`} alt="html" />
                    <img
                      src={`${path}/images/skill/skill-react.svg`}
                      alt="html"
                    />
                    <img
                      src={`${path}/images/skill/skill-redux.svg`}
                      alt="html"
                    />
                    <img
                      src={`${path}/images/skill/skill-type.svg`}
                      alt="html"
                    />
                  </div>
                  <li className="sub-title"> 프로젝트 보러가기 </li>

                  <li>
                    <a
                      href="https://github.com/goldjade/MathEdu"
                      target="_blank"
                      rel="noopener noreferrer"
                      alt="portfolio"
                    >
                      <img
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
                        src={`${path}/images/skill/skill-figma.svg`}
                        alt="html"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}
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
