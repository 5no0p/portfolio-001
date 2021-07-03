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
      <div className="hero-background">
        <img className="home-1" src="https://uploads-ssl.webflow.com/60c74fe5b452ab1532ecd76b/60ccb9d140b53206e0f7315b_home_1-slider_01.png"/>
        <img className="home-2" scr="https://uploads-ssl.webflow.com/60c74fe5b452ab1532ecd76b/60ccb9d11a16e354659e5254_home_1-slider_04.png"/>
      </div>
    </>
  )
}

export default Hero;