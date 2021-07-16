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
    <div className="bg-red-300">content</div>
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