import React from 'react'


const Projects = () => {

  return (
    <>
      <Content/>
      <Project/>
    </>
  )
}

const Content = () => {

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
        </div>
      </div>
    </>
  )

}

const Project = () => {

  return (
    <>

    </>
  )
}

export default Projects