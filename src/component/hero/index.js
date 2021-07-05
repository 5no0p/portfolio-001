import React from 'react'

const Hero = () => {

  return (
    <>
      <div className="hero">
        <Background/>
        <Main/>
      </div>
    </>
  
  )
}

const Background = () => {

  return (
    <>
      <div className="hero-background">
        <img className="home-1 right-left-anime" src="https://uploads-ssl.webflow.com/60c74fe5b452ab1532ecd76b/60ccb9d140b53206e0f7315b_home_1-slider_01.png"/>
        <img className="home-2 rotate" src="https://uploads-ssl.webflow.com/60c74fe5b452ab1532ecd76b/60ccb9d11a16e354659e5254_home_1-slider_04.png"/>
        <img className="home-3" src="https://uploads-ssl.webflow.com/60c74fe5b452ab1532ecd76b/60ccc49930890e39a780d77d_home_1-slider_02.png"/>
        <img className="home-4" src="https://uploads-ssl.webflow.com/60c74fe5b452ab1532ecd76b/60ccc498472f824a09a0b93a_ameli.png"/>
      </div>
    </>
  )
}

const Main = () => {

  return (
    <>
      <div className="main-hero">
        <h1 className="dd-font primery">Hi! I’m Mohammed Almustafa -</h1>
        <h1 className="dd-font secondery">Full Stack Developer</h1>
        <p className="dd-menu primery-paragraph">Front End designer and Back end Developer,<br/>specialized in CRM, Portfolio and E-commerce</p>
        <div className="grid grid-cols-2" style={{width:"300px"}}>
          <div>
            <h3 className="dd-font">email</h3>
          </div>
          <div>
            <h3 className="dd-font">behance</h3>
          </div>
        </div>
      </div>
    </>

  )
}

export default Hero;