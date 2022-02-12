import React, { useEffect, useState } from 'react'
import ToiletCard from '../components/ToiletCard.js'
import '../components/ToiletCard.css'
import Banner from '../components/Banner.js'
import Background from '../background.jpg'
import Expected from '../components/Expected.js'
import axios from 'axios'

const Index = () => {
  const [toilet, setToilet] = useState([])
  const [estimatedTime, setEstimatedTime] = useState('')

  useEffect(() => {
    getToiletStatus()
  }, [])

  async function getToiletStatus() {
    const mockData = [
      {
        time: '12.59',
        status: 'open',
      },
      {
        time: '12.59',
        status: 'closed',
      },
      {
        time: '12.59',
        status: 'open',
      },
    ]
    const status = await prepareToiletData(mockData)
    setToilet(status)
    console.log(2)
    setInterval(updateToiletStatus, 1000)

    setEstimatedTime('15.00')
  }

  async function updateToiletStatus() {
    const mockData = [
      {
        time: '12.59',
        status: 'open',
      },
      {
        time: '12.59',
        status: 'closed',
      },
      {
        time: '12.59',
        status: 'open',
      },
    ]
    const status = await prepareToiletData(mockData)
    setToilet(status)
    setEstimatedTime('15.01')
  }

  async function prepareToiletData(data) {
    const now = new Date()
    const status = []
    var Christmas = new Date('2012-12-25')
    var diffMs = Christmas - now // milliseconds between now & Christmas
    for (let i = 0; i < data.length; i++) {
      let diffHrs = Math.floor((diffMs % 86400000) / 3600000) // hours
      let diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000) // minutes
      let diffSecs = Math.round(
        (((diffMs % 86400000) % 3600000) % 60000) / 60000
      ) // seconds
      status.push({
        id: i,
        status: data[i].status,
        time: data[i].time,
        timerHrs: diffHrs,
        timerMins: diffMins,
        timerSecs: diffSecs,
      })
      console.log(status)
    }
    return status
  }

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
          {toilet.map((t) => (
            <ToiletCard
              key={t.id}
              title={'Test Toilet ' + t.id}
              time={t.time}
              timer={t.timer}
              status={t.status}
            />
          ))}
        </div>
      </div>
      <Expected avg={estimatedTime} />
    </div>
  )
}

export default Index
