import React from 'react'
import './Home.css'

import megan from '../../images/megan.jpg'


const SecondBlock = () => (
  <div className='secondblock-container'>
    <div className='colorblock'>
      <div className='secondblock-image'>
       <img  style={{width:'100%', borderRadius:'6px'}} src={megan} alt='' />

      </div>

      <div className='secondblock-text'>
        <h1 style={{fontSize:'40px', fontWeight:'700',letterSpacing:'-1.5px'}} >Автошкола "Спойлер"</h1>
        <p style={{fontFamily:'roboto', margin:'5% 0'}} >Наша автошкола была организована в 1998 году, и на протяжении всего времени своего существования мы сохраняем высокое качество подготовки наших слушателей, а также стремимся сделать процесс обучения максимально комфортным для вас.</p>
        <div className='secondblock-button'>Автошкола "Спойлер</div>

      </div>
    </div>
  </div>
)

export default SecondBlock;