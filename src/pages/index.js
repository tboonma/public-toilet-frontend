import React from 'react'
import ToiletCard from '../components/ToiletCard.js'
import '../components/ToiletCard.css'
import Banner from '../components/Banner.js'
import Background from '../background.jpg'

const Index = () => {
  return (
    <div
      className="screen"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <div className="window-padding">
        <Banner />
        <div className="allcard">
          <ToiletCard
            title="Test Toilet 1"
            time="12.59"
            timer="15.00"
            status="open"
          />
          <ToiletCard
            title="Test Toilet 2"
            time="13.59"
            timer="10.00"
            status="closed"
          />
          <ToiletCard
            title="Test Toilet 3"
            time="1.59"
            timer="11.00"
            status="open"
          />
        </div>
      </div>
    </div>
  )
}

export default Index
