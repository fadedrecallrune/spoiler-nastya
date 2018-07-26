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
  arrows: false,
  dots: false,
  infinite: true,
  speed: 4600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 900
};

const Header = () => (
  <div style={{width:'100%', height:'100vh', }} >

          <Slider {...settings}>


        <div className='header-block' >
          <img src={kyiv} alt='' style={{height:'100vh', width:'100vw',zIndex:'-1', position:'relative'}} />
          <div className='header-caption' >
            <h1 style={{fontSize:'48px', fontWeight:'700', textAlign:'center', letterSpacing:'-1.6px', wordSpacing:'0.16px',textShadow:'rgba(0, 0, 0, 0.75) 0px 1px 2px'}} >Автошкола в Киеве  - "СПОЙЛЕР"</h1>
            <p>ул. Драгоманова, 27а</p>
            <p>ул. Якубовского, 7б</p>
            <div className='header-callbutton'><h1 style={{fontSize:'16px', fontWeight:'700', marginBottom:'20px'}} >(063) 648 49 29</h1></div>
            

          </div>
        </div>

<div className='header-block' >
          <img src={kyiv} alt='' style={{height:'100vh', width:'100vw',zIndex:'-1', position:'relative'}} />
          <div className='header-caption' >
            <h1 style={{fontSize:'48px', fontWeight:'700', textAlign:'center', letterSpacing:'-1.6px', wordSpacing:'0.16px',textShadow:'rgba(0, 0, 0, 0.75) 0px 1px 2px'}} >Автошкола в Киеве  - "СПОЙЛЕР"</h1>
            <p>ул. Драгоманова, 27а</p>
            <p>ул. Якубовского, 7б</p>
            <div className='header-callbutton'><h1 style={{fontSize:'16px', fontWeight:'700', marginBottom:'20px'}} >(063) 648 49 29</h1></div>
            

          </div>
        </div>
        
        {/* <div className='header-block'  >
          <img src={ff} alt=''  style={{height:'100vh', width:'100vw',zIndex:'-1', position:'relative'}} />
          <div className='header-caption' >
            <h1>test test test</h1>
          </div>
        </div> */}
        {/* <div className='header-block' >
        <img src={second} alt='' style={{height:'100vh', width:'100vw',zIndex:'-1', position:'relative'}} />
        <div className='header-caption' >
            <h1>test test test</h1>
          </div>
        </div>
        <div className='header-block' >
        <img src={third} alt=''  style={{height:'100vh', width:'100vw',zIndex:'-1', position:'relative'}} />
        <div className='header-caption' >
            <h1>test test test</h1>
          </div>
        </div> */}
      </Slider>
   </div>
)

export default Header;