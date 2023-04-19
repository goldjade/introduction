import React, { useEffect, useRef } from "react";

// import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Skills = ({ path }) => {

  return (
    <section className="skills scroll">
      <div className="inner">
        {/* 기술적 역량: 기술적 내용설명,자격증,운전면허 등..  */}
        <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          SKILLS & TOOL
        </h2>
        <div
          className="contents"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="800"
        >
          <ul className="skills-list">
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
                <span>스타일시트 표준을 준수하여 반응형 사이트 제작 가능</span>
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
                  사용
                </span>
                <div className="progress-bar">
                  <div className="react"></div>
                </div>
              </div>
            </li>

            <li>
              <img src={`${path}/images/skill/skill-ps.svg`} alt="skill" />
              <div className="s-r">
                <span className="skill-name">Photoshp</span>
                <span>보정 및 합성 이미지 편집과 디자인 작업</span>
                <div className="progress-bar">
                  <div className="ps"></div>
                </div>
              </div>
            </li>

            <li>
              <img src={`${path}/images/skill/skill-ai.svg`} alt="skill" />
              <div className="s-r">
                <span className="skill-name">Illustrator</span>
                <span>이미지 소스 제작</span>
                <div className="progress-bar">
                  <div className="ai"></div>
                </div>
              </div>
            </li>

            <li>
              <img src={`${path}/images/skill/skill-figma.svg`} alt="skill" />
              <div className="s-r">
                <span className="skill-name">Pigma</span>
                <span>피그마를 활용한 디자인 및 Prototype </span>
                <div className="progress-bar">
                  <div className="pigma"></div>
                </div>
              </div>
            </li>

            <li>
              <img
                src={`${path}/images/skill/skill-tailwindcss.svg`}
                alt="skill"
              />
              <div className="s-r">
                <span className="skill-name">TailwindCss</span>
                <span> TailwindCss를 활용한 디자인 작업 </span>
                <div className="progress-bar">
                  <div className="tailwindcss"></div>
                </div>
              </div>
            </li>

            <li>
              <img src={`${path}/images/skill/skill-sass.svg`} alt="skill" />
              <div className="s-r">
                <spa className="skill-name" n>
                  SASS
                </spa>
                <span>스타일시트 표준을 준수한 CSS작업 </span>
                <div className="progress-bar">
                  <div className="sass"></div>
                </div>
              </div>
            </li>
            <li>
              <img
                src={`${path}/images/skill/skill-StyledComponents.svg`}
                alt="skill"
              />
              <div className="s-r">
                <spa className="skill-name" n>
                  StyledComponents
                </spa>
                <span>StyledComponents를 활용한 CSS 가능</span>
                <div className="progress-bar">
                  <div className="sass"></div>
                </div>
              </div>
            </li>

            <li>
              <img src={`${path}/images/skill/skill-git.svg`} alt="skill" />
              <div className="s-r">
                <span className="skill-name">GitHub</span>
                <span>SourceTree를 이용한 데이터 백업 및 page 배포</span>
                <div className="progress-bar">
                  <div className="git"></div>
                </div>
              </div>
            </li>

            <li>
              <img src={`${path}/images/skill/skill-jquery.svg`} alt="skill" />
              <div className="s-r">
                <span className="skill-name">jQuery</span>
                <span>웹사이트 제작에 필요한 기본적인 작업 가능</span>
                <div className="progress-bar">
                  <div className="jquery"></div>
                </div>
              </div>
            </li>

            <li>
              <img src={`${path}/images/skill/skill-type.svg`} alt="skill" />
              <div className="s-r">
                <span className="skill-name">typescript</span>
                <span>타입을 지정하여 사용 가능 </span>
                <div className="progress-bar">
                  <div className="typescript"></div>
                </div>
              </div>
            </li>

            <li>
              <img src={`${path}/images/skill/skill-redux.svg`} alt="skill" />
              <div className="s-r">
                <span className="skill-name">Redux</span>
                <span>Redux/redux-tollkit을 사용하여 상태 관리 가능</span>
                <div className="progress-bar">
                  <div className="redux"></div>
                </div>
              </div>
            </li>

            <li>
              <img src={`${path}/images/skill/skill-postman.svg`} alt="skill" />
              <div className="s-r">
                <span className="skill-name">Postman</span>
                <span>API test 가능</span>
                <div className="progress-bar">
                  <div className="postman"></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
