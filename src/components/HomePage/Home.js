import React, { useState, useEffect } from 'react';
import image from "../../assets/profile-pic.png";
import "./Home.css";

function Home() {
    const roles = ['Full Stack Developer', 'Problem Solver']; // Add more roles as needed
    const [roleIndex, setRoleIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');

    useEffect(() => {
        const typeWriter = () => {
            const currentRole = roles[roleIndex];
            if (currentText.length < currentRole.length) {
                setCurrentText(currentRole.substring(0, currentText.length + 1));
            } else {
                setTimeout(() => {
                    setCurrentText('');
                    setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
                }, 1000);
            }
        };

        const interval = setInterval(typeWriter, 250);

        return () => clearInterval(interval);
    }, [currentText, roleIndex, roles]);

    return (
        <div data-aos="fade"
            data-aos-offset="0"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center" className="homePage">
            <div id='home'

                className="container">
                <div className="left-content">
                    <div className="line1">Hey there</div>
                    <div className="line2">I'm <span className='karthik'>Karthik</span></div>
                    <div className="line3">I'm a <span className='typer'>{currentText}</span> </div>
                    <a target='_blank' href="https://karthikresume.netlify.app">
                        <button className="cv" >View Resume</button>
                    </a>
                </div>
                <div className="right-content">
                    <img
                        src={image}
                        alt="Placeholder"
                        className="myimage"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
