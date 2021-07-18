import React from 'react'


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

  return (

    <>
      <div className="section-content skills-content grid grid-cols-12 flex mx-4">
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
              <h3 className="uppercase">80%</h3>
              </div>
              <div style={{backgroundColor:"#ffae00",height:"10px",width:"80%",zIndex:"20"}}></div>
              <div style={{borderTop: "1px solid #adadad",height:"1px",position:"relative",top:"-5px",zIndex:"10"}}></div>
            </div>
            <div className="relative my-4">
              <div className="my-2 flex justify-between">
              <h3 className="uppercase">Python</h3>
              <h3 className="uppercase">90%</h3>
              </div>
              <div style={{backgroundColor:"#ffae00",height:"10px",width:"90%",zIndex:"20"}}></div>
              <div style={{borderTop: "1px solid #adadad",height:"1px",position:"relative",top:"-5px",zIndex:"10"}}></div>
            </div>
            <div className="relative my-4">
              <div className="my-2 flex justify-between">
              <h3 className="uppercase">figma</h3>
              <h3 className="uppercase">75%</h3>
              </div>
              <div style={{backgroundColor:"#ffae00",height:"10px",width:"75%",zIndex:"20"}}></div>
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

  return (
    <>
    <div className="my-skills grid grid-cols-2">
      <div className="sk-left-layout">
        <div className="sk-layout">
          <InfoBox component={infoBoxTopLeft}/>
        </div>
        <div className=""></div>
      </div>
      <div className="">
      <div className=""></div>
      <div className=""></div>
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