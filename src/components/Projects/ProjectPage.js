import React, { useEffect, useRef } from 'react'
import "./Projects.css"
import EachProject from '../EachProject/EachProject'
import writify from "../../assets/writify.png"
import url from "../../assets/url.png"
import movieTime from "../../assets/movieTime.png"
import image from "../../assets/projects.png"
import calculator from "../../assets/calculator.png"
import Landing from "../../assets/landing.png"
import Gamezo from "../../assets/gamezo.png"
import Bubble from "../../assets/bubble.png"
import Tic from "../../assets/tic.png"
import Dice from "../../assets/dice.png"
import jobs from "../../assets/jobs.png"
import user from "../../assets/user.png"
import infinite from "../../assets/infinite.png"
import todo from "../../assets/todo.png"
import timetable from "../../assets/timetable.png"
import { Link } from 'react-router-dom'

function ProjectPage() {
    const projectPart = useRef(null);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div
            ref={projectPart}
            id='project'
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
            <Link to={"/"} className='viewAll'><button>Home</button></Link>
            <div className="allProj">
            <EachProject heading="Timetable Maker" image={timetable} live="https://kart-timetable-maker.netlify.app/" github="https://github.com/KarthikhKamath/make-a-timetable" techUsed="ReactJs, Express Js, SQLite, Rest API" />

                <EachProject heading="Job Portal" image={jobs} live="https://kartjobs.netlify.app/" github="https://github.com/KarthikhKamath/kartjobfullstack" techUsed="ReactJs, ExpressJs, MongoDB, JWT Auth, Rest API" />

                <EachProject heading="Writify-Blogging Site" image={writify} live="https://kartblogs.netlify.app/" github="https://github.com/KarthikhKamath/Writify_fullStackApp" techUsed="ReactJs, MUI, ExpressJs, MongoDB, JWT Auth, Rest API" />

                <EachProject heading="Movie Website" image={movieTime} live="https://kart-movie-time.netlify.app/" github="https://github.com/KarthikhKamath/movie-time" techUsed="ReactJs, Redux, Scss, TMDB API, Infinite Scroll" />

                <EachProject heading="Infinite Users" image={infinite} live="https://kart-infinite-jobs.netlify.app/" github="https://github.com/KarthikhKamath/post-infinite-scroll" techUsed="ReactJs, WeekDay API, Infinite Scroll" />

                <EachProject heading="Todo app" image={todo} live="https://kart-todo.netlify.app/" github="https://github.com/KarthikhKamath/todo-fastapi-backend.git" techUsed="ReactJs, FastAPI, MongoDB" />

                <EachProject heading="Dummy user dashboard" image={user} live="https://kart-user-management.netlify.app/" github="https://github.com/KarthikhKamath/user-management" techUsed="ReactJs" />

                <EachProject heading="URL Shortener" image={url} live="https://urlshortener-27oh.onrender.com/" github="https://github.com/KarthikhKamath/urlShortener" techUsed="ReactJs, MongoDB, ExpressJs" />

                <EachProject heading="Calculator" image={calculator} live="https://kartcalculator.netlify.app/" github="https://github.com/KarthikhKamath/Calculator" techUsed="HTML, CSS, Javascript" />

                <EachProject heading="Landing Page" image={Landing} live="https://kartlandingpage.netlify.app/" github="https://github.com/KarthikhKamath/Landing-Page" techUsed="HTML, CSS" />

                <EachProject heading="Gamezo" image={Gamezo} live="https://gamezo.netlify.app/" github="https://github.com/KarthikhKamath/WebDevProject" techUsed="HTML, CSS, Javascript"  />

                <EachProject heading="Bubble Game" image={Bubble} live="https://kartbubblegame.netlify.app/" github="https://github.com/KarthikhKamath/bubble-game" techUsed="HTML, CSS, Javascript" />

                <EachProject heading="Tic Tac Toe Game" image={Tic} live="https://kart-tictactoe.netlify.app/" github="https://github.com/KarthikhKamath/tic-tac-toe" techUsed="HTML, CSS, Javascript" />

                <EachProject heading="Dice Game" image={Dice} live="https://kartdicegame.netlify.app/" github="https://github.com/KarthikhKamath/DicePage" techUsed="HTML, CSS, Javascript" />

            </div>
        </div>
    )
}

export default ProjectPage