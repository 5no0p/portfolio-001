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
      <div className="bg-blue-500 grid grid-cols-12 flex">
        <div className="col-span-1 bg-red-500 w-1/5"></div>
        <div className="bg-gray-300 col-span-11 flex-grow"></div>
      </div>
    </>
  )
}

export default About;