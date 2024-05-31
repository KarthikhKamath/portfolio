import React from 'react'
import "./EachProject.css"

function EachProject(props) {
    return (
        <div className='eachProject'>
            <div className="heading">{props.heading}</div>
            <img className='image' src={props.image} alt="image" />
            <div className="buttons">
                <button className='btn liveButton'><a className='plink' href={props.live} target='_blank'>Live</a></button>
                <button className='btn githubButton'><a className='plink' href={props.github} target='_blank'>Github</a></button>
            </div>
            <p className='tech'>Tech used : {props.techUsed}</p>
        </div>
    )
}

export default EachProject