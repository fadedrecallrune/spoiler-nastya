import React from 'react'
import './Home.css'


const Hours = () => (
  <div className='hours-container'>
    <div className='colorblock'>
      <div  className='secondblock-text'>
        <div className='hours-box'>
        <h1>Время Работы</h1></div>
        <p style={{ marginTop:'2%'}} >Понедельник: 9 – 18</p>
        <p style={{ marginTop:'-1.5%'}}>Вторник: 9 – 18</p>
        <p style={{ marginTop:'-1.5%'}}>Среда: 9 – 18</p>
        <p style={{ marginTop:'-1.5%'}}>Четверг: 9 – 18</p>
        <p style={{ marginTop:'-1.5%'}}>Пятница: 9 – 18</p>
        <p style={{ marginTop:'-1.5%'}}>Суббота: 9 – 16</p>
        <p style={{ marginTop:'-1.5%'}}>Воскресенье: ЗАКРЫТО</p>

        <div className='secondblock-button' style={{}}>(063) 648 49 29</div>
      </div>

      <div className='secondblock-text'>
        <div className='hours-box2'>
          <h1 >Занятия проводятся</h1>
        </div>
        <p style={{fontSize:'19px', letterSpacing:'0.25px', fontWeight:'300', marginTop:'2%'}} >ул. Соломенская, 33</p>
        <p style={{fontSize:'19px', letterSpacing:'0.25px', fontWeight:'300'}} >ул. Драгоманова, 27а</p>
        <p style={{fontSize:'19px', letterSpacing:'0.25px', fontWeight:'300'}} >ул. Якубовского, 7б </p>

      </div>
    </div>
  </div>
)

export default Hours;