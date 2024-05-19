import React from 'react'
import "./Socials.css"
import EachSocial from '../EachSocial/EachSocial'
import image from "../../assets/socials.png"

function Socials() {
  return (
    <div id='socials'
      data-aos="fade"
      data-aos-offset="0"
      data-aos-delay="50"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
      className='socials'>
      
          <img className='socialImage' src={image} alt="social" />
        <div className="socialsHeading">Socials</div>
        <div className="social">
        <div className="right">
              <EachSocial name="LinkedIn" link="https://www.linkedin.com/in/karthikhkamath/"/>
        </div>
        <div className="left">
              <EachSocial name="Github" link="https://github.com/karthikhkamath"/>
        </div>
        <div className="right">
              <EachSocial name="WhatsApp" link="https://wa.me/+918792124529"/>
        </div>
        <div className="left">
              <EachSocial name="Twitter" link="https://twitter.com/karthikhkamath_"/>
        </div>
        <div className="right">
              <EachSocial name="Leetcode" link="https://leetcode.com/karthikhkamath/"/>
        </div>
        <div className="left">
              <EachSocial name="Email" link="mailto:karthikhkamath72002@gmail.com"/>
        </div>
        </div>
    </div>
  )
}

export default Socials