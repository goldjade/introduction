/** @format */

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const Skills = () => {
  const path = process.env.PUBLIC_URL;

  return (
    <section className="skills scroll">
      <div className="inner">
        {/* 기술적 역량: 기술적 내용설명,자격증,운전면허 등..  */}
        <h2>Skills</h2>
        <div className="contents">
          <ul className="skills-list">
            <li>
              <img
                src={`${path}/images/skill-html.png`}
                alt="skill"
                data-aos="fade-up"
                data-aos-duration="300"
                data-aos-delay="300"
              />
            </li>
            <li>
              <img
                src={`${path}/images/skill-css.png`}
                alt="skill"
                data-aos="fade-up"
                data-aos-duration="300"
                data-aos-delay="400"
              />
            </li>
            <li>
              <img
                src={`${path}/images/skill-js.png`}
                alt="skill"
                data-aos="fade-up"
                data-aos-duration="300"
                data-aos-delay="500"
              />
            </li>
            <li>
              <img
                src={`${path}/images/skill-react.png`}
                alt="skill"
                data-aos="fade-up"
                data-aos-duration="300"
                data-aos-delay="600"
              />
            </li>
          </ul>
          <ul className="skills-sub">
            <Swiper
              style={{ height: "280px", padding: "0 100px 0 100px" }}
              spaceBetween={150}
              slidesPerView={3}
              onSlideChange={() => console.log("slide change")}
              pagination={{ clickable: true }}
              navigation={true}
              loop={true}
              autoplay={true}
              breakpoints={{
                860: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                960: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
                1180: {
                  slidesPerView: 5,
                  spaceBetween: 150,
                },
              }}
              modules={[Navigation, Pagination, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <li
                  data-aos="fade-up"
                  data-aos-duration="300"
                  data-aos-delay="700"
                >
                  <img src={`${path}/images/skill-ps.png`} alt="skill" />
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
                  <img src={`${path}/images/skill-ai.png`} alt="skill" />
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
                  <img src={`${path}/images/skill-figma.png`} alt="skill" />
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
                    src={`${path}/images/skill-tailwindcss.png`}
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
                  <img src={`${path}/images/skill-sass.png`} alt="skill" />
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
                  <img src={`${path}/images/skill-git.png`} alt="skill" />
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
                  <img src={`${path}/images/skill-jquery.png`} alt="skill" />
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
                  <img src={`${path}/images/skill-type.png`} alt="skill" />
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
                  <img src={`${path}/images/skill-redux.png`} alt="skill" />
                  <p>redux</p>
                  <div className="progress-bar">
                    <div className="redux"></div>
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
