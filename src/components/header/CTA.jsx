import React from 'react'
import './CTA.css'

const CTA = () => {
  const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeIyYyHaHuQaF5UmlyT-HlWWsHyGgonRSfgtNLhdQ88JcKEaw/viewform?embedded=true';

  return (
    <div className='cta'>
        <a href={formUrl} className='btn' target="_blank" rel="noopener noreferrer">Take Survey</a>
        <a href="#contact" className='btn btn-primary feedback-btn'> Give Feedback</a>
    </div>
  );
}

export default CTA