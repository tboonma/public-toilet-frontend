import react from "react"

const ToiletCard = (toilet) => {
  return (
    <div className="toilet-card">
      <div className="card-title">
        <h1>{toilet.title}</h1>
      </div>
      <div className="card-pic">
        <img
          src="https://scontent.fbkk6-1.fna.fbcdn.net/v/t1.15752-9/272446858_659431898816758_3283531329096483918_n.png?_nc_cat=105&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeHkh0FIVMRbXir4z4k0BRPoTR3oxvLlc7dNHejG8uVzt0Zpdot-MhuDWLW2TaN-d6t_Fahw_i72s04tfs5iQ9xB&_nc_ohc=SFRervthtfYAX90psPs&_nc_ht=scontent.fbkk6-1.fna&oh=03_AVJaSw7IrE3CePCVHP3RNSI-K1Uv1Cs7pzcD6_Unxs0-Jg&oe=622B495F"
          alt="open"
        />
      </div>
    </div>
  )
}

export default ToiletCard
