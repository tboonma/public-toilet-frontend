import React from 'react'
import './banner.css'
import Clock from 'react-live-clock'

const banner = () => {
  return (
    <div className="banner-border">
      <div className="banner">
        <h1>Toilet Management</h1>
        <div className="clock">
          <Clock format={'h:mm:ss A'} ticking={true} interval="1000" />
        </div>
      </div>
    </div>
  )
}

export default banner
