import React from 'react'
import { SocialIcon } from 'react-social-icons';
import ContentCreater from '../content'


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

  const content = {
    vhead: "about me",
    header: "Need Creative Design? I can Help You!",
    paragraph: "Product Designer and Digital Creative Director working in design field for 13 years so far, specialized in UI/UX, Branding and digital designs. These are the words we live by in everything we do. Every story we tell, every brand we build, and every interaction we create must not only look beautiful. beautifully, too.",
    special: `<div className="font-bold my-4 about-follow">
    You Can Follow Me also Here:
    </div>
    <div className="flex space-x-5 my-5 about-social">
      <a href="#" className="flex space-x-4 youtube-link">
      <SocialIcon network="youtube"/>
      <h1 className="uppercase font-bold flex items-center" style={{color:"#ff3333"}}>youtube</h1>
      </a>
      <a href="#" className="flex space-x-4 github-link">
      <SocialIcon network="github" fgColor="#ffffff" bgColor="#24292e"/>
      <h1 className="uppercase font-bold flex items-center" style={{color:"#24292e"}}>github</h1>
      </a>
      <a href="#" className="flex space-x-4 instagram-link">
      <SocialIcon network="instagram" fgColor="#ffffff" bgColor="#FFC13E"/>
      <h1 className="uppercase font-bold flex items-center" style={{color:"#FFC13E"}}>insta</h1>
      </a>
    </div>`
  }

  return (

    <>
         <ContentCreater content={content} />
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