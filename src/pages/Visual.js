// import Anime from "../assets/Anime";

const Visual = () => {
  const path = process.env.PUBLIC_URL;

  return (
    <div className="visual scroll">
      <div className="inner">
        <div className="introduction">
          <span className="title">I CREATE WORLD</span>
          <span className="sub-title">FRONTEND DEVELOPER</span>

          <img src={`${path}/images/me.png`} alt="visual" className="me" />
          <span className="name">CHOI.GEUM.OK</span>
          <span className="greetings">
            안녕하세요 <br />
            세상 모든걸 구현하고 싶은 <br />
            프론트앤드 개발자 최금옥 입니다.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Visual;
