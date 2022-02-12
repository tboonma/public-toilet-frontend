import React from "react"
import "./ToiletCard.css"

const ToiletCard = (toilet) => {
  let spic
  if (toilet.status === "open") {
    spic =
      "https://scontent.fbkk6-1.fna.fbcdn.net/v/t1.15752-9/272446858_659431898816758_3283531329096483918_n.png?_nc_cat=105&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeHkh0FIVMRbXir4z4k0BRPoTR3oxvLlc7dNHejG8uVzt0Zpdot-MhuDWLW2TaN-d6t_Fahw_i72s04tfs5iQ9xB&_nc_ohc=SFRervthtfYAX90psPs&_nc_ht=scontent.fbkk6-1.fna&oh=03_AVJaSw7IrE3CePCVHP3RNSI-K1Uv1Cs7pzcD6_Unxs0-Jg&oe=622B495F"
  } else {
    spic =
      "https://scontent.fbkk6-1.fna.fbcdn.net/v/t1.15752-9/272454366_924636898235804_1042689245515901037_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeG_VLQDep4Pl5vb7uNVi556HuGIgurN9Kke4YiC6s30qXQFh5Fx2pyCUqPtlGl8bAy7r6ACcsfHIDkBKnY6_Yu5&_nc_ohc=RRswCyO3uqgAX8HnfUE&_nc_ht=scontent.fbkk6-1.fna&oh=03_AVLFzM1GcYkhRZB_oR2PeLeaI5GkYaiXRqg0SZ8nUCxCMA&oe=622C2795"
  }
  return (
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
  )
}

export default ToiletCard
