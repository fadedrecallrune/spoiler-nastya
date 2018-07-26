import React from 'react'
import './Header.css'
import Slider from 'react-slick'


import first from '../../images/test.jpg'
import ff from '../../images/first.jpg'
import kyiv from '../../images/kyiv.jpg'


import second from '../../images/second.jpg'
import third from '../../images/third.jpg'
import forth from '../../images/forth.jpg'


const settings = {
  arrows: true,
  dots: false,
  infinite: true,
  speed: 4600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 900
};


const HeaderT = () => (
  <Slider {...settings}>
  <div className='item_slider' style={{ backgroundImage:`url(${kyiv})`}}>
    fasdasd
  </div>
  </Slider>
)


export default HeaderT