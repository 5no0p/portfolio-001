import React from 'react' 
import { SocialIcon } from 'react-social-icons';

const About = () => {

  return (
    <>
    <div className="about grid grid-cols-2">
    <Image/>
    <Content/>
    </div>
    </>
  )

}

const Image = () => {

  return (
    <>
      <div>
        <img src="http://nimbus.wgl-demo.net/wp-content/uploads/2020/02/home_01-1.png"/>
      </div>
    </>
  )
}
const Content = () => {

  return (
    <>
      <div className="about-content grid grid-cols-12 flex" style={{marginLeft: "1.75rem",marginRight: "8rem"}}>
        <div className="col-span-1">
          <h5 className="dd-fon">about me</h5>
          <div className="vl"></div>
        </div>
        <div className="col-span-11">
          <div className="about-header">
            <span>Need Creative Design? I can Help You!</span>
          </div>
          <div className="my-3 about-paragraph">
            <p>Product Designer and Digital Creative Director working in design field for 13 years so far, specialized in UI/UX, Branding and digital designs. These are the words we live by in everything we do. Every story we tell, every brand we build, and every interaction we create must not only look beautiful. beautifully, too.</p>
          </div>
          <div className="font-bold my-4 about-follow">
          You Can Follow Me also Here:
          </div>
          <div className="flex space-x-5 my-5 about-social">
            <a href="#" className="flex space-x-4">
            <SocialIcon network="youtube" fgColor="#ffffff" bgColor="#ff3333"/>
            <h1 className="uppercase font-bold flex items-center" style={{color:"#ff3333"}}>youtube</h1>
            </a>
            <a href="#" className="flex space-x-4">
            <SocialIcon network="github" fgColor="#ffffff" bgColor="#24292e"/>
            <h1 className="uppercase font-bold flex items-center" style={{color:"#24292e"}}>github</h1>
            </a>
            <a href="#" className="flex space-x-4">
            <SocialIcon network="instagram" fgColor="#ffffff" bgColor="#FFC13E"/>
            <h1 className="uppercase font-bold flex items-center" style={{color:"#FFC13E"}}>insta</h1>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;