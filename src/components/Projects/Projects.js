import React from 'react'
import "./Projects.css"
import EachProject from '../EachProject/EachProject'
import writify from "../../assets/writify.png"
import jobs from "../../assets/jobs.png"
import movieTime from "../../assets/movieTime.png"
import image from "../../assets/projects.png"

import { Link } from 'react-router-dom'

function Projects() {
  return (
    <div id='projects'
      data-aos="fade"
      data-aos-offset="0"
      data-aos-delay="50"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
      className='projects'>
      <img src={image} alt="projects" className="projectsImage" />
      <div className="projectsHeading">Projects</div>
      <div className="allProj">

      <EachProject heading="Job Portal" image={jobs} live="https://kartjobs.netlify.app/" github="https://github.com/KarthikhKamath/kartjobfullstack" techUsed="ReactJs, ExpressJs, MongoDB, JWT Auth, Rest API" />

<EachProject heading="Writify-Blogging Site" image={writify} live="https://kartblogs.netlify.app/" github="https://github.com/KarthikhKamath/Writify_fullStackApp" techUsed="ReactJs, MUI, ExpressJs, MongoDB, JWT Auth, Rest API" />

<EachProject heading="Movie Website" image={movieTime} live="https://kart-movie-time.netlify.app/" github="https://github.com/KarthikhKamath/movie-time" techUsed="ReactJs, Redux, Scss, TMDB API, Infinite Scroll" />

      </div>
      <Link to={"/projects"} className='viewAll'><button>View All</button></Link>
    </div>
  )
}

export default Projects