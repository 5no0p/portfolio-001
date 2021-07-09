import React,{useEffect} from 'react'
import anime from 'animejs/lib/anime.es.js';

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

  useEffect(()=>{
    const textWrapper = document.querySelector('.ml13');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: true})
      .add({
        targets: '.ml13 .letter',
        translateY: [0,20],
        rotateX: [80, 0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 800,
        delay: (el, i) => 300 + 100 * i
  })
  },[])

  useEffect(()=>{
    const textWrapper = document.querySelector('.ml14');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: true})
      .add({
        targets: '.ml14 .letter',
        translateY: [20,0],
        rotateX: [0, 10],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 800,
        delay: (el, i) => 300 + 100 * i
  })
  },[])



  return (
    <>
      <div className="main-hero">
        <h1 className="dd-font primery ml13 mb-4">Hi! I’m Mohammed Almustafa -</h1>
        <h1 className="dd-font secondery ml14 mt-4">Full Stack Developer</h1>
        <p className="dd-menu primery-paragraph">Front End designer and Back end Developer,<br/>specialized in CRM, Portfolio and E-commerce</p>
        <div className="grid grid-cols-2 contacts" style={{width:"300px"}}>
          <div>
            <h3 className="dd-font">email</h3>
            <p>mmoaaa1989@hotmail.com</p>
          </div>
          <div className="github">
            <h3 className="dd-font">github</h3>
            <p>github.com/5no0p</p>
          </div>
        </div>
      </div>
    </>

  )
}

export default Hero;