import React from 'react'
import './Home.css'

import bwm from '../../images/4.jpg'


const ForthBlock = () => (
  <div className='forthblock-container'>
    <div className='colorblock'>
      <div className='secondblock-image'>
       <img  style={{width:'100%', borderRadius:'6px', marginTop:'10%'}} src={bwm} alt='' />
      </div>

      <div className='forthblock-text'>
        <h1 >Курс Обучения</h1>
        
        <p style={{margin:'5% 0% 0% 0%'}}>Продолжительность обучения - до 2,5 месяцев.</p>

        <p>Курс обучения состоит из теоретических и практических занятий.</p>

        <p>Теоретические занятия проводятся 2 раза в неделю.</p>

        <p style={{margin:'0% 0% 5% 0%'}} >Практические занятия (вождение) начинаются, примерно, через 10-15 дней после начала обучения и проводятся по индивидуальному графику.</p>
        <div className='secondblock-button'>Курс Обучения</div>
      </div>
    </div>
  </div>
)

export default ForthBlock;