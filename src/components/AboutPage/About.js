import React from 'react'
import "./About.css"
import image from "../../assets/about.png"

function About() {
  return (
    <div id='about'
      data-aos="fade"
      data-aos-offset="0"
      data-aos-delay="50"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
       className='about'>
    <img className='aboutImage' src={image} alt="image" />
        <div className="aboutHeading">About</div>
          <div className="aboutContent">I bring a wealth of experience with two impactful internships – one as a Software Engineer Intern at Codezyng and another as a Frontend Web Developer at Adeodist. With these experiences i've honed my collaborative skills and demonstrated a strong aptitude for team-based projects. My hands-on experience extends to developing a variety of projects, showcasing proficiency in both frontend and backend functionalities. Through tackling over 150 LeetCode problems and solving 200+ challenges across diverse platforms, I've refined my problem-solving skills and gained a deep understanding of algorithmic complexities. A collaborative team player, I am dedicated to fostering positive work environments. My diverse skill set and proven track record make me confident in my ability to contribute significantly to the success of any team and project.</div>
    </div>
  )
}

export default About