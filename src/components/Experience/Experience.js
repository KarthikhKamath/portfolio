import React from 'react'
import EachExperience from '../EachExperience/EachExperience'
import "./Experience.css"
import image from "../../assets/experience.png"
function Experience() {
    return (
        <div id='experience'
            data-aos="fade"
            data-aos-offset="0"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            className='experience'>
            <img src={image} alt="experience" className="experienceImage" />
            <div className="experienceHeading">Experience</div>
            <div className="allExp">
                <EachExperience company="CodeZyng" role="Software Engineer Intern" date="Jan 2024 - Present" />

                <EachExperience company="AdeoDist" role="Frontend Developer Intern" date="Feb 2023 - July 2023" />
            </div>
        </div>
    )
}

export default Experience