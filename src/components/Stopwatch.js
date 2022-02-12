import React, { useState } from "react"
import Timer from "./Timer"

function Stopwatch() {
  const [isActive, setIsActive] = useState(false)
  const [time, setTime] = useState(0)

  React.useEffect(() => {
    let interval = null

    if (isActive === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10)
      }, 10)
    } else {
      clearInterval(interval)
    }
    return () => {
      clearInterval(interval)
    }
  }, [isActive])
  return (
    <div className="stop">
      เข้ามาแล้ว
      <Timer time={time} />
    </div>
  )
}

export default Stopwatch
