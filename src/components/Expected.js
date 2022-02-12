import React from "react"
import "./Expected.css"

const Expected = (toilet) => {
  return (
    <div className="expected">
      <h4>เวลาที่ใช้ในการเข้าโดยประมาณ {toilet.avg}</h4>
    </div>
  )
}

export default Expected
