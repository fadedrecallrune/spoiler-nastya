import React from 'react'
import './PriceCard.css'


const SecondPriceCard = () => (
  <div className='firstpricecard-container'>
    <h1 style={{fontSize:'34px', fontWeight:'700', borderBottom:'3px solid #E3E3E3', letterSpacing:'-0.2px', wordSpacing:'0.16px'}} >Практика</h1>

    <p style={{fontWeight:'700', marginTop:'2%'}} >Для выпускников</p>
    <p style={{marginTop:'-3%'}} >200 грн.(АКПП - 220 грн.)</p>

    <p style={{fontWeight:'700'}}>Для посторонних лиц</p>
    <p style={{marginTop:'-3%'}}>220 грн.(АКПП - 240 грн.)</p>

  <p style={{textAlign:'center', margin:'20% 10% 0% 10%',fontFamily:'roboto',}} >длительность одного занятия составляет 60 минут</p>
  <p style={{textAlign:'center', margin:'0% 10%',fontFamily:'roboto',}} >Рекомендуемый курс вождения – от 10 до 30 занятий</p>

    <div className='prices-button2' style={{}}>(063) 648 49 29</div>

  </div>
)


export default SecondPriceCard;