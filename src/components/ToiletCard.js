import React from "react"
import "./ToiletCard.css"
import Open from "../open-door.png"
import Closed from "../closed-door.jpg"

const ToiletCard = (toilet) => {
  let spic
  if (toilet.status === "open") {
    spic = Open
  } else {
    spic = Closed
  }
  return (
    <div className="toilet-card-border">
      <div className="toilet-card">
        <div className="card-title">
          <h1>{toilet.title}</h1>
        </div>
        <div className="card-pic">
          <img src={spic} alt={toilet.status} className="pic-only" />
        </div>
        <div className="time">
          <h3>เวลาที่เข้า {toilet.time}</h3>
        </div>
        <div className="timer">
          <h3>เข้ามาแล้ว {toilet.timer}</h3>
        </div>
      </div>
    </div>
  )
}

export default ToiletCard
