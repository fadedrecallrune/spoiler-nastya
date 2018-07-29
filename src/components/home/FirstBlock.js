import React from 'react'
import './Home.css'


const FirstBlock = () => (
  <div className='firstblock-container'>
    <h1>Мы Предлагаем</h1>

    <div className='font-container'>
      <div className='font-box'>
      <i class="fas fa-6x fa-car"></i>
      <h1>Навыки Вождения</h1>
      <p>Основная задача школы не просто подготовить ученика к сдаче экзамена в МРЭО ГАИ, но и дать возможность получить навыки практического вождения.</p>
      </div>

      <div className='font-box'>
      <i  class="fas fa-6x fa-id-card"></i>
      <h1>Теоретический курс</h1>
      <p>включает в себя изучение правил дорожного движения, устройство автомобилей, навыков оказания первой медицинской помощи, а также решение экзаменационных билетов.</p>
      </div>

      <div className='font-box'>
      <i class="fas fa-6x fa-money-check-alt"></i>
      <h1>Низкие Цены</h1>
      <p>В автошколе действует гибкая система скидок, постоянно проводятся акции - наши цены одни из самых низких в Киеве.</p>
      </div>
      </div>
  </div>
)

export default FirstBlock;