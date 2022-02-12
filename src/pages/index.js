import React from "react"
import ToiletCard from "../components/ToiletCard.js"
import "../components/ToiletCard.css"
import Expected from "../components/Expected.js"

const Index = () => {
  return (
    <div className="index">
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
      <Expected avg="15.00" />
    </div>
  )
}

export default Index
