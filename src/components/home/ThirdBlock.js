import React from 'react'
import './Home.css'

import car from '../../images/third.jpg'

const ThirdBlock = () => (
  <div className='thirdblock-container'>
    <div className='colorblock'>
      <div className='secondblock-text'>
       <h1 style={{fontSize:'40px', fontWeight:'700',letterSpacing:'-1.5px'}} >Наш Автопарк</h1>
       <p style={{ margin:'5% 0'}} >Обучение проводится на автомобилях на любой вкус: класса А - Daewoo Matiz до внедорожника - SsangYong Kyron. В Вашем распоряжении автомобили с автоматической коробкой передач, а также автомобили с традиционной механической коробкой передач.</p>
        <div className='secondblock-button'>Наш Автопарк</div>
      </div>

      <div className='secondblock-image'>
       <img  style={{width:'100%', borderRadius:'6px'}} src={car} alt='' />
      </div>

    </div>
  </div>
)

export default ThirdBlock;