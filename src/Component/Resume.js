import React from 'react'
import "../Css/Resume.css"
import resumedow from "../images/Pranali.pdf"
const Resume = () => {
  return (
    <div className='resume-page'>
      <div style={{ display: 'flex', alignItems: 'center' }}>
            <h1>DownLoad My Resume</h1>
            <a href={resumedow} download="PRANALI_MALI" target='_blank' rel="noreferrer">
              <button className='beautiful-button'>📜 Download</button>
            </a>
          </div>
    </div>
  )
}

export default Resume