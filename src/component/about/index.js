import React from 'react' 


const About = () => {

  return (
    <>
    <div className="grid grid-cols-2">
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
      <div className="bg-blue-500">about me</div>
    </>
  )
}

export default About;