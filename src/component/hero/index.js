import React from 'react'

const Hero = () => {

  return (
    <>
      <div className="hero">
        <Background/>
      </div>
    </>
  
  )
}

const Background = () => {

  return (
    <>
      <div className="relative">
        <img class="absolute -mt-20" src="https://uploads-ssl.webflow.com/60c74fe5b452ab1532ecd76b/60ccb9d140b53206e0f7315b_home_1-slider_01.png"/>
      </div>
    </>
  )
}

export default Hero;