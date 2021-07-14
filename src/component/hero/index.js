import React,{useEffect} from 'react'
import anime from 'animejs/lib/anime.es.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from '@fortawesome/free-solid-svg-icons'
import CheckIcon from './check_circle.svg'

const Hero = () => {

  return (
    <>
      <div className="hero">
        <Background/>
        <Main/>
        <AbourMe/>
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

    anime.timeline({loop: false})
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

    anime.timeline({loop: false})
      .add({
        targets: '.ml14 .letter',
        translateY: [20,0],
        rotateX: [80, 0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 800,
        delay: (el, i) => 300 + 100 * i
  }).add({
    targets:'.main-hero .primery-paragraph',
    opacity:[0,1],
    translateY:[100,0],
    duration:800,
    easing: 'easeInOutSine',
  }, '-=2000').add({
    targets:'.contacts .email h3',
    opacity:[0,1],
    translateY:[100,0],
    duration:800,
    easing: 'easeInOutSine',
  }, '-=1500').add({
    targets:'.contacts .email p',
    opacity:[0,1],
    translateY:[100,0],
    duration:700,
    easing: 'easeInOutSine',
  }, '-=1000').add({
    targets:'.contacts .github h3',
    opacity:[0,1],
    translateY:[100,0],
    duration:800,
    easing: 'easeInOutSine',
  }, '-=600').add({
    targets:'.contacts .github p',
    opacity:[0,1],
    translateY:[100,0],
    duration:700,
    easing: 'easeInOutSine',
  }, '-=200').add({
    targets: '.contact .download-btn',
    opacity:[0,1],
    duration:800,
    easing: 'easeInSine'
  }).add({
    targets: '.contact .hire-btn',
    opacity:[0,1],
    duration:800,
    easing: 'easeInSine'
  },'-=300')
  },[])



  return (
    <>
      <div className="main-hero">
        <h1 className="dd-font primery ml13 mb-4">Hi! I’m Mohammed Almustafa -</h1>
        <h1 className="dd-font secondery ml14 mt-4">Full Stack Developer</h1>
        <p className="dd-menu primery-paragraph mt-5">Front End designer and Back end Developer,<br/>specialized in CRM, Portfolio and E-commerce</p>
        <div className="grid grid-cols-2 contacts" style={{width:"300px"}}>
          <div className="email">
            <h3 className="dd-font">email</h3>
            <p>mmoaaa1989@hotmail.com</p>
          </div>
          <div className="github">
            <h3 className="dd-font">github</h3>
            <p>github.com/5no0p</p>
          </div>
        </div>
        <div className="grid grid-cols-2 flex space-x-4 mt-5 h-12 text-white font-black dd-menu contact" style={{width:"300px"}}>
          <img className="download-btn" src="https://uploads-ssl.webflow.com/60c74fe5b452ab1532ecd76b/60eb7165b63de73e198d343b_Group%202.png"/>
          <img className="hire-btn" src="https://uploads-ssl.webflow.com/60c74fe5b452ab1532ecd76b/60eb71648f379b1d2d2c2ddf_Group%203.png"/>  
        </div>
      </div>
    </>

  )
}

const AbourMe = () => {

  return (
    <>
      <div className="flex place-items-center about-me">
      <div className="grid grid-cols-4 justify-items-center">
      <div>
      <FontAwesomeIcon icon={Icons.faCheckCircle} size="3x" className="check-icon"/>
      <span></span>
      </div> 
      <div className="col-span-2 w-3/5 ">1</div>
      <div><FontAwesomeIcon icon={Icons.faAngleRight} size="lg"/></div>
      </div>
      <div className="grid grid-cols-4">
      2
      </div>
      <div className="grid grid-cols-4">
      3
      </div>
      </div>
    </>
  )
}

export default Hero;