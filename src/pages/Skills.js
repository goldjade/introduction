/** @format */

import React, { useRef } from "react";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
// import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Skills = ({ path }) => {
  return (
    <section className="skills scroll">
      <div className="inner">
        {/* 기술적 역량: 기술적 내용설명,자격증,운전면허 등..  */}
        <h2>SKILLS</h2>
        <div className="contents">
          <ul className="skills-list">
            <li data-aos="fade-up" data-aos-duration="300" data-aos-delay="300">
              <img
                className="html"
                src={`${path}/images/skill/skill-html.svg`}
                alt="skill"
              />
            </li>
            <li data-aos="fade-up" data-aos-duration="300" data-aos-delay="400">
              <img
                className="css"
                src={`${path}/images/skill/skill-css.svg`}
                alt="skill"
              />
            </li>
            <li data-aos="fade-up" data-aos-duration="300" data-aos-delay="500">
              <img
                className="js"
                src={`${path}/images/skill/skill-js.svg`}
                alt="skill"
              />
            </li>
            <li data-aos="fade-up" data-aos-duration="300" data-aos-delay="600">
              <img
                className="react"
                src={`${path}/images/skill/skill-react.svg`}
                alt="skill"
              />
            </li>
          </ul>
          <ul
            className="skills-list-b"
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="600"
          >
            <Swiper
              style={{ height: 250 }}
              loop={true}
              slidesPerView={3}
              spaceBetween={30}
              navigation={true}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                860: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                960: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                1180: {
                  slidesPerView: 5,
                  spaceBetween: 30,
                },
              }}
              modules={[Navigation, Autoplay]}
              className="skill-slide mySwiper"
            >
              <SwiperSlide>
                <li
                  data-aos="fade-up"
                  data-aos-duration="300"
                  data-aos-delay="700"
                >
                  <img src={`${path}/images/skill/skill-ps.svg`} alt="skill" />
                  <p>photoshp</p>
                  <div className="progress-bar">
                    <div className="ps"></div>
                  </div>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li
                  data-aos="fade-up"
                  data-aos-duration="300"
                  data-aos-delay="800"
                >
                  <img src={`${path}/images/skill/skill-ai.svg`} alt="skill" />
                  <p>illustrator</p>
                  <div className="progress-bar">
                    <div className="ai"></div>
                  </div>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li
                  data-aos="fade-up"
                  data-aos-duration="300"
                  data-aos-delay="900"
                >
                  <img
                    src={`${path}/images/skill/skill-figma.svg`}
                    alt="skill"
                  />
                  <p>pigma</p>
                  <div className="progress-bar">
                    <div className="pigma"></div>
                  </div>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li
                  data-aos="fade-up"
                  data-aos-duration="300"
                  data-aos-delay="1000"
                >
                  <img
                    src={`${path}/images/skill/skill-tailwindcss.svg`}
                    alt="skill"
                  />
                  <p>tailwindcss</p>
                  <div className="progress-bar">
                    <div className="tailwindcss"></div>
                  </div>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li
                  data-aos="fade-up"
                  data-aos-duration="300"
                  data-aos-delay="1100"
                >
                  <img
                    src={`${path}/images/skill/skill-sass.svg`}
                    alt="skill"
                  />
                  <p>sass</p>
                  <div className="progress-bar">
                    <div className="sass"></div>
                  </div>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li
                  data-aos="fade-up"
                  data-aos-duration="300"
                  data-aos-delay="1200"
                >
                  <img src={`${path}/images/skill/skill-git.svg`} alt="skill" />
                  <p>github</p>
                  <div className="progress-bar">
                    <div className="git"></div>
                  </div>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li
                  data-aos="fade-up"
                  data-aos-duration="300"
                  data-aos-delay="1300"
                >
                  <img
                    src={`${path}/images/skill/skill-jquery.svg`}
                    alt="skill"
                  />
                  <p>jQuery</p>
                  <div className="progress-bar">
                    <div className="jquery"></div>
                  </div>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li
                  data-aos="fade-up"
                  data-aos-duration="300"
                  data-aos-delay="1400"
                >
                  <img
                    src={`${path}/images/skill/skill-type.svg`}
                    alt="skill"
                  />
                  <p>typescript</p>
                  <div className="progress-bar">
                    <div className="typescript"></div>
                  </div>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li
                  data-aos="fade-up"
                  data-aos-duration="300"
                  data-aos-delay="1500"
                >
                  <img
                    src={`${path}/images/skill/skill-redux.svg`}
                    alt="skill"
                  />
                  <p>redux</p>
                  <div className="progress-bar">
                    <div className="redux"></div>
                  </div>
                </li>
              </SwiperSlide>

              <SwiperSlide>
                <li
                  data-aos="fade-up"
                  data-aos-duration="300"
                  data-aos-delay="1500"
                >
                  <img
                    src={`${path}/images/skill/skill-postman.svg`}
                    alt="skill"
                  />
                  <p>Postman</p>
                  <div className="progress-bar">
                    <div className="postman"></div>
                  </div>
                </li>
              </SwiperSlide>
            </Swiper>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
