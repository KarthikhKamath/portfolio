import React from 'react'
import "./Skills.css"
import image from "../../assets/skills.png"
import EachSkill from '../EachSkill/EachSkill'
function Skills() {
    return (
        <div id='skills' 
            data-aos="fade"
            data-aos-offset="0"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center" 
            className='skills'>
            <img src={image} alt="skills" className="skillsImage" />
            <div className="skillsHeading">Skills</div>
            <div
                className="allSkills">
                <div  className="eachType">
                    <div className="skillSide">Languages</div>
                    <div className="indiSkill">
                        <EachSkill content="C++" />
                        <EachSkill content="JavaScript" />
                        <EachSkill content="SQL" />
                    </div>
                </div>

                <div
                    className="eachType">
                    <div className="skillSide">Technologies</div>
                    <div className="indiSkill">
                        <EachSkill content="HTML" />
                        <EachSkill content="CSS" />
                        <EachSkill content="MaterialUI" />
                        <EachSkill content="Bootstrap" />
                        <EachSkill content="ReactJs" />
                        <EachSkill content="NodeJs" />
                        <EachSkill content="ExpressJs" />
                        <EachSkill content="MongoDB" />
                        <EachSkill content="REST API" />
                    </div>
                </div>

                <div
                    className="eachType">
                    <div className="skillSide">Tools</div>
                    <div className="indiSkill">
                        <EachSkill content="VS Code" />
                        <EachSkill content="Git and Github" />
                        <EachSkill content="Postman" />
                        <EachSkill content="Canva" />
                        <EachSkill content="Figma" />
                        <EachSkill content="NodeJs" />
                        <EachSkill content="Photoshop" />
                    </div>
                </div>

                <div className="eachType">
                    
                    <div className="skillSide">Specialised Areas</div>
                    <div className="indiSkill">
                        <EachSkill content="Computer Networks" />
                        <EachSkill content="Full Stack Web Development" />
                        <EachSkill content="Data Structures and Algorithms" />
                        <EachSkill content="OOPS using C++" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills