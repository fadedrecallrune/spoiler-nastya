import React from 'react'
import "./Home.css"

import backimage from '../../images/1.jpeg'
import FirstPriceCard from './price-cards/FirstPriceCard';
import SecondPriceCard from './price-cards/SecondPriceCard';

const Prices = () => (
  <div style={{}} className='prices-container'>

    <h1 >Цены на Занятие</h1>
    <div className='cardbox-container' >
    <FirstPriceCard />
    <SecondPriceCard />
    </div>
  </div>
)

export default Prices;