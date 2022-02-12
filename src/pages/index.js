import react from 'react'
import ToiletCard from '../components/ToiletCard.js'
import '../components/ToiletCard.css'

const Index = () => {
  return (
    <div>
      <div className="page-title">
        <h1>Toilet Management</h1>
      </div>
      <div className="toilets-section">
        <ToiletCard
          img="../closed-door.jpg"
          title="Test Toilet 1"
          time="13.00"
          elapsed="02.00"
        />
        <ToiletCard title="Test Toilet 2" time="13.00" elapsed="02.00" />
        <ToiletCard title="Test Toilet 3" time="13.00" elapsed="02.00" />
      </div>
    </div>
  )
}

export default Index
