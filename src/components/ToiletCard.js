import react from 'react'

const ToiletCard = (toilet) => {
  return (
    <div className="toilet-card">
      <img
        src={toilet.img}
        width="100px"
        height="100px"
        alt={toilet.title}
      ></img>
      <h1 className="toilet-card-title">{toilet.title}</h1>
      <div className="toilet-card-time">
        <h3>Time Entered</h3>
        <h2>{toilet.time}</h2>
      </div>
      <div className="toilet-card-elapsed">
        <h3>Time Elapsed</h3>
        <h2>{toilet.elapsed}</h2>
      </div>
    </div>
  )
}

export default ToiletCard
