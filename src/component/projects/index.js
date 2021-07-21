import React from 'react'


const Projects = () => {

  return (
    <>
      <div className="projects">
        <Content/>
        <Project/>
      </div>
    </>
  )
}

const Content = () => {

  return (
    <>
      <div className="grid grid-cols-12 flex mx-4">
        <div className="col-span-1">
          <h5 className="vhead">my works</h5>
          <div className="vl" style={{left:"17%"}}></div>
        </div>
        <div className="col-span-11">
          <div className="section-header">
            <span>Meet My Projects</span>
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