import react from 'react'

const ToiletCard = (toilet) => {
  return (
    <div className="toilet-card">
      <img
        src="http://pngimg.com/uploads/toilet/toilet_PNG17753.png"
        width="100px"
        height="100px"
        alt={toilet.title}
      ></img>
      <h1 className="toilet-card-title">{toilet.title}</h1>
      <h2 className="toilet-card-time">{toilet.time}</h2>
      <h2 className="toilet-card-elapsed">{toilet.elapsed}</h2>
    </div>
  )
}

export default ToiletCard
