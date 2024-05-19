import React from 'react'
import "./EachSocial.css"

function EachSocial(props) {
  return (
    <div className='animate__animated animate__fadeIn animate__delay-1s eachSocial'>
        <a href={props.link} target='_blank' className="link">{props.name}</a>
    </div>
  )
}

export default EachSocial