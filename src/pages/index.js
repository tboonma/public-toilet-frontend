import react from 'react'
import ToiletCard from '../components/ToiletCard.js'
import '../components/ToiletCard.css'

const Index = () => {
  return (
    <div>
      <div class="page-title">
        <h1>Toilet Management</h1>
      </div>
      <div class="toilets-section">
        <ToiletCard title="Test Toilet 1" />
        <ToiletCard title="Test Toilet 1" />
        <ToiletCard title="Test Toilet 1" />
      </div>
    </div>
  )
}

export default Index
