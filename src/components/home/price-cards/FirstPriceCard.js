import React from 'react'
import './PriceCard.css'


const FirstPriceCard = () => (
  <div className='firstpricecard-container'>
      <h1 style={{fontSize:'34px', fontWeight:'700', borderBottom:'3px solid #E3E3E3', letterSpacing:'-0.2px', wordSpacing:'0.16px'}}>Теория</h1>

      <p style={{fontWeight:'500', fontSize:'34px', color:'#3498db'}} > 2000 грн.</p>

      <p style={{margin:'4% 0% 4% 0%', fontWeight:'700'}} >Курс включает:</p>
      <ul style={{margin:'0% 4% 15% 0%',fontFamily:'roboto'}} >
        <li>оформление всех документов;</li>
        <li>обеспечение необходимой литературой;</li>
        <li>запись компакт-диска с необходимыми программами и документацией;</li>
        <li>полное сопровождение до сдачи экзаменов в ГАИ и получение водительского удостоверения.</li>
      </ul>

      <div className='prices-button'><a href='tel:063 648 49 29'>(063) 648 49 29</a></div>

  </div>
)


export default FirstPriceCard;