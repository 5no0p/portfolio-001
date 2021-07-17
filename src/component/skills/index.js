import React from 'react'
import { SocialIcon } from 'react-social-icons';


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
    <div className="bg-blue-300">skills</div>

    </>
  )
}
export default Skills;