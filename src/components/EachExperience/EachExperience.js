import React from 'react'
import "./EachExperience.css"

function EachExperience(props) {
  return (
    <div className='animate__animated animate__fadeIn animate__delay-1s eachExperience'>
      <div className="company">{props.company}</div>
      <div className="role">{props.role}</div>
      <div className="date">{props.date}</div>
    </div>
  )
}

export default EachExperience