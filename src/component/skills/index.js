import React,{useEffect} from 'react'
import { useInView } from 'react-intersection-observer'
import anime from 'animejs/lib/anime.es.js';



const Skills = () => {
  
  
  return (
    <>
    <div className="skills grid grid-cols-2">
    <Content />
    <Skill/>
    </div>
    </>

  )
}

const Content = () => {

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  })

  useEffect(()=>{
    inView
    ? (anime({
        targets: '#javascript-skills-bar',
        width: '80%',
        duration: 1750,
        easing:'easeOutQuart',
        loop: false
      }),anime({
        targets: '#Python-skills-bar',
        width: '90%',
        duration: 1750,
        easing:'easeOutQuart',
        loop: false
      }),anime({
        targets: '#figma-skills-bar',
        width: '75%',
        duration: 1750,
        easing:'easeOutQuart',
        loop: false
      }))
    :"" 
  })

  

  return (

    <>
      <div className="section-content skills-content grid grid-cols-12 flex mx-4" ref={ref}>
        <div className="col-span-1">
          <h5 className="vhead">my skills</h5>
          <div className="vl" style={{left:"17%"}}></div>
        </div>
        <div className="col-span-11">
          <div className="section-header">
            <span>what my skills included</span>
          </div>
          <div className="my-3 section-paragraph">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est tellus consectetur sit mi mattis sed integer lorem.</p>
          </div>
          <div className="">
            <div className="relative my-4">
              <div className="my-2 flex justify-between">
              <h3 className="uppercase">javascript</h3>
              <h3 className="uppercase flex justify-end">80%</h3>
              </div>
              <div className="skills-bar" id="javascript-skills-bar" style={{backgroundColor:"#ffae00",height:"10px",width:"0%",zIndex:"20"}}></div>
              <div style={{borderTop: "1px solid #adadad",height:"1px",position:"relative",top:"-5px",zIndex:"10"}}></div>
            </div>
            <div className="relative my-4">
              <div className="my-2 flex justify-between">
              <h3 className="uppercase">Python</h3>
              <h3 className="uppercase flex justify-end">90%</h3>
              </div>
              <div className="skills-bar" id="Python-skills-bar" style={{backgroundColor:"#ffae00",height:"10px",width:"0%",zIndex:"20"}}></div>
              <div style={{borderTop: "1px solid #adadad",height:"1px",position:"relative",top:"-5px",zIndex:"10"}}></div>
            </div>
            <div className="relative my-4">
              <div className="my-2 flex justify-between">
              <h3 className="uppercase">figma</h3>
              <h3 className="uppercase flex justify-end">75%</h3>
              </div>
              <div className="skills-bar" id="figma-skills-bar" style={{backgroundColor:"#ffae00",height:"10px",width:"0%",zIndex:"20"}}></div>
              <div style={{borderTop: "1px solid #adadad",height:"1px",position:"relative",top:"-5px",zIndex:"10"}}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const Skill = () => {

  const infoBoxTopLeft = {
    iconUrl: "https://uploads-ssl.webflow.com/60c74fe5b452ab1532ecd76b/60f47b23604a7568e6930fef_Group%2014.svg",
    title: "modern design",
    content: "We believe direct collaboration with our clients is essential to bringing unique"
  }

  const infoBoxBottenLeft = {
    iconUrl: "https://uploads-ssl.webflow.com/60c74fe5b452ab1532ecd76b/60f47b23d565b666d0df4069_Group%2020.svg",
    title: "fast and scall",
    content: "We believe direct collaboration with our clients is essential to bringing unique"
  }
  const infoBoxTopRight = {
    iconUrl: "https://uploads-ssl.webflow.com/60c74fe5b452ab1532ecd76b/60f47b235accac48a6f8e2a9_Group%2017.svg",
    title: "responsive design",
    content: "We believe direct collaboration with our clients is essential to bringing unique"
  }
  const infoBoxBottenRight = {
    iconUrl: "https://uploads-ssl.webflow.com/60c74fe5b452ab1532ecd76b/60f47b23d5febb154af16602_Group%2016.svg",
    title: "Ready to Upload",
    content: "We believe direct collaboration with our clients is essential to bringing unique"
  }

  return (
    <>
    <div className="my-skills">
      <div className="sk-left-layout">
        <div className="sk-layout">
          <InfoBox component={infoBoxTopLeft}/>
        </div>
        <div className="sk-layout">
          <InfoBox component={infoBoxBottenLeft} />
        </div>
      </div>
      <div className="sk-right-layout">
      <div className="sk-layout">
      <InfoBox component={infoBoxTopRight} />
      </div>
      <div className="sk-layout">
      <InfoBox component={infoBoxBottenRight} />
      </div>
      </div>
    </div>
    <div className="col-span-2 sk-info">
      <div className="sk-background-layout">
        <span className="right">
          <img src="https://uploads-ssl.webflow.com/60c74fe5b452ab1532ecd76b/60f8567e843b0196e05c06e0_Vector%201.svg"/>
        </span>
        <span className="left">
          <img src="https://uploads-ssl.webflow.com/60c74fe5b452ab1532ecd76b/60f8567ebcb3979c13592c23_Vector%202.svg"/>
        </span>
      </div>

      <div className="sk-content-layout">
        <div className="sk-content">
          <div className="sk-content-value">120</div>
          <div className="sk-content-title">Happy Clients</div>
        </div>
        <div className="sk-content">
          <div className="sk-content-value">10</div>
          <div className="sk-content-title">Years of Experience</div>
        </div>
        <div className="sk-content">
          <div className="sk-content-value">230</div>
          <div className="sk-content-title">Incredible Projects</div>
        </div>
        <div className="sk-content">
          <div className="sk-content-value">18</div>
          <div className="sk-content-title">Awards Winning
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

const InfoBox = ({component}) => {
  return (
    <>
      <div className="sk-background-layout"></div>
        <div className="sk-infobox-warp sk-top-layout">
          <div className="icon-warp">
            <span className="sk-icon">
            <img src={component.iconUrl} />
            </span>
          </div>
          <div className="content-warp">
            <div className="sk-infobox-title-warp">
              <h3 className="sk-infobox-title">{component.title}</h3>
            </div>
            <div className="sk-infobox-content">
              <p>{component.content}</p>
            </div>
          </div>
        </div>
    </>
  )
}

export default Skills;