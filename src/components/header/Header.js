import React from "react";
import "./Header.css";
import Slider from "react-slick";

import ff from "../../images/first.jpg";
import kyiv from "../../images/kyiv.jpg";
import door from "../../images/cardoor.jpg";

const settings = {
  arrows: false,
  dots: false,
  infinite: true,
  pauseOnDotsHover:false,
  pauseOnHover: false,
  speed: 4600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000
};

const Header = () => (
  <div style={{ width: "100%", height: "100vh" }}>
    <Slider {...settings}>
      <div className="header-block">
        <img src={kyiv} alt="" />
        <div className="header-caption">
          <h1>Автошкола в Киеве "СПОЙЛЕР"</h1>
          <p>ул. Драгоманова, 27а</p>
          <p>ул. Якубовского, 7б</p>
          <div className="header-callbutton">
            <h1>(063) 648 49 29</h1>
          </div>
        </div>
      </div>

      <div className="header-block">
        <img src={door} alt="" />
        <div className="header-caption">
          <h1>Автошкола в Киеве "СПОЙЛЕР"</h1>
          <p>Школа обучение безопасному вождению автомобиля в условиях города.</p>
          <div className="header-callbutton">
            <h1>(063) 648 49 29</h1>
          </div>
        </div>
      </div>

      <div className="header-block">
        <img src={ff} alt="" />
        <div className="header-caption">
          <h1>Автошкола в Киеве "СПОЙЛЕР"</h1>
          <p>Лучшая цена и условия обучения на вождение в 2018 году.</p>
          <div className="header-callbutton">
            <h1>(063) 648 49 29</h1>
          </div>
        </div>
      </div>
    </Slider>
  </div>
);

export default Header;
