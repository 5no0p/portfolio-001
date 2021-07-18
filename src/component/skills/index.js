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

  return (
    <>
    <div className="my-skills grid grid-cols-2">
      <div className="sk-left-layout">
        <div className="sk-layout">
        <div className="sk-background-layout"></div>
        <div className="sk-infobox-warp sk-top-layout">
          
          <div className="icon-warp">
            <span className="sk-icon">
            <svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="60.5" cy="60" r="60" fill="#212121"/>
              <path d="M70.9167 50.6667C67.4583 50.6667 64.6667 47.875 64.6667 44.4167V23.5834C64.6667 20.125 67.4583 17.3334 70.9167 17.3334C74.375 17.3334 77.1667 20.125 77.1667 23.5834V44.4167C77.1667 47.875 74.375 50.6667 70.9167 50.6667Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M95.9167 50.6666H89.6667V44.4166C89.6667 40.9583 92.4584 38.1666 95.9167 38.1666C99.375 38.1666 102.167 40.9583 102.167 44.4166C102.167 47.875 99.375 50.6666 95.9167 50.6666Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M50.0833 67.3334C53.5417 67.3334 56.3333 70.125 56.3333 73.5834V94.4167C56.3333 97.8751 53.5417 100.667 50.0833 100.667C46.625 100.667 43.8333 97.8751 43.8333 94.4167V73.5834C43.8333 70.125 46.625 67.3334 50.0833 67.3334Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M25.0833 67.3334H31.3333V73.5834C31.3333 77.0417 28.5417 79.8334 25.0833 79.8334C21.625 79.8334 18.8333 77.0417 18.8333 73.5834C18.8333 70.125 21.625 67.3334 25.0833 67.3334Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M68.8333 69.4166C68.8333 65.9583 71.625 63.1666 75.0833 63.1666H95.9167C99.375 63.1666 102.167 65.9583 102.167 69.4166C102.167 72.875 99.375 75.6666 95.9167 75.6666H75.0833C71.625 75.6666 68.8333 72.875 68.8333 69.4166Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M75.0833 88.1666H68.8333V94.4166C68.8333 97.875 71.625 100.667 75.0833 100.667C78.5417 100.667 81.3333 97.875 81.3333 94.4166C81.3333 90.9583 78.5417 88.1666 75.0833 88.1666Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M52.1667 48.5834C52.1667 45.125 49.375 42.3334 45.9167 42.3334H25.0833C21.625 42.3334 18.8333 45.125 18.8333 48.5834C18.8333 52.0417 21.625 54.8334 25.0833 54.8334H45.9167C49.375 54.8334 52.1667 52.0417 52.1667 48.5834Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M45.9167 29.8334H52.1667V23.5834C52.1667 20.125 49.375 17.3334 45.9167 17.3334C42.4583 17.3334 39.6667 20.125 39.6667 23.5834C39.6667 27.0417 42.4583 29.8334 45.9167 29.8334Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </div>
          <div className="content-warp">
            <div className="sk-infobox-title-warp">
              <h3 className="sk-infobox-title">modern design</h3>
            </div>
            <div className="sk-infobox-content">
              <p>We believe direct collaboration with our clients is essential to bringing unique</p>
            </div>
          </div>
        </div>
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
export default Skills;