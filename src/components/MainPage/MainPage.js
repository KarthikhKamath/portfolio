import React from 'react'
import Navbar from '../Navbar/Navbar'
import Home from '../HomePage/Home'
import About from '../AboutPage/About'
import Experience from '../Experience/Experience'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Socials from '../Socials/Socials'
import Footer from '../Footer/Footer'

function MainPage() {
  return (
      <div className="app-container">
          <div className="firstPage">
              <Navbar />
              <Home />
          </div>
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Socials />
          <Footer />
      </div>
  )
}

export default MainPage