/** @format */

import React, { useRef } from "react";
// Swiper
import { Swiper } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
// import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Skills = ({ path }) => {
  return (
    <section className="skills scroll">
      <div className="inner">
        {/* 기술적 역량: 기술적 내용설명,자격증,운전면허 등..  */}
        <h2>SKILLS & TOOL</h2>
        <div className="contents">
          <ul
            className="skills-list"
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="600"
          >
            <li>
              <img
                className="html"
                src={`${path}/images/skill/skill-html.svg`}
                alt="skill"
              />
              <div className="s-r">
                <span className="skill-name">HTML</span>
                <span>
                  웹 표준성과 접근성을 준수하여 시맨틱 마크업과 SEO 최적화 수행
                  가능.
                </span>
                <div className="progress-bar">
                  <div className="html"></div>
                </div>
              </div>
            </li>
            <li>
              <img
                className="css"
                src={`${path}/images/skill/skill-css.svg`}
                alt="skill"
              />
              <div className="s-r">
                <span className="skill-name">CSS</span>
                <span>스타일시트 표준을 준수하여 반응형 사이트 작업가능</span>
                <div className="progress-bar">
                  <div className="css"></div>
                </div>
              </div>
            </li>
            <li>
              <img
                className="js"
                src={`${path}/images/skill/skill-js.svg`}
                alt="skill"
              />
              <div className="s-r">
                <span className="skill-name">JavaScript</span>
                <span>웹사이트 제작에 필요한 기본적인 작업 가능</span>
                <div className="progress-bar">
                  <div className="js"></div>
                </div>
              </div>
            </li>
            <li>
              <img
                className="react"
                src={`${path}/images/skill/skill-react.svg`}
                alt="skill"
              />
              <div className="s-r">
                <span className="skill-name">React</span>
                <span>
                  데이터 연동 CRUD redux-tollkit을 사용한 상태 관리와 라이브러리
                  사용 가능
                </span>
                <div className="progress-bar">
                  <div className="react"></div>
                </div>
              </div>
            </li>

            <li>
              <img src={`${path}/images/skill/skill-ps.svg`} alt="skill" />
              <span>photoshp</span>
              <div className="progress-bar">
                <div className="ps"></div>
              </div>
            </li>

            <li>
              <img src={`${path}/images/skill/skill-ai.svg`} alt="skill" />
              <span>illustrator</span>
              <div className="progress-bar">
                <div className="ai"></div>
              </div>
            </li>

            <li>
              <img src={`${path}/images/skill/skill-figma.svg`} alt="skill" />
              <span>pigma</span>
              <div className="progress-bar">
                <div className="pigma"></div>
              </div>
            </li>

            <li>
              <img
                src={`${path}/images/skill/skill-tailwindcss.svg`}
                alt="skill"
              />
              <span>tailwindcss</span>
              <div className="progress-bar">
                <div className="tailwindcss"></div>
              </div>
            </li>

            <li>
              <img src={`${path}/images/skill/skill-sass.svg`} alt="skill" />
              <span>sass</span>
              <div className="progress-bar">
                <div className="sass"></div>
              </div>
            </li>

            <li>
              <img src={`${path}/images/skill/skill-git.svg`} alt="skill" />
              <span>github</span>
              <div className="progress-bar">
                <div className="git"></div>
              </div>
            </li>

            <li>
              <img src={`${path}/images/skill/skill-jquery.svg`} alt="skill" />
              <span>jQuery</span>
              <div className="progress-bar">
                <div className="jquery"></div>
              </div>
            </li>

            <li>
              <img src={`${path}/images/skill/skill-type.svg`} alt="skill" />
              <span>typescript</span>
              <div className="progress-bar">
                <div className="typescript"></div>
              </div>
            </li>

            <li>
              <img src={`${path}/images/skill/skill-redux.svg`} alt="skill" />
              <span>redux</span>
              <div className="progress-bar">
                <div className="redux"></div>
              </div>
            </li>

            <li>
              <img src={`${path}/images/skill/skill-postman.svg`} alt="skill" />
              <span>Postman</span>
              <div className="progress-bar">
                <div className="postman"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
