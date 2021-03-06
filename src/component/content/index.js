import React from 'react'
import { SocialIcon } from 'react-social-icons';
import ReactHtmlParser,{ processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'

const Content = ({content}) => {

  return (
    <>
      <div className="section-content grid grid-cols-12 flex mx-4">
        <div className="col-span-1">
          <h5 className="vhead">{content.vhead}</h5>
          <div className="vl"></div>
        </div>
        <div className="col-span-11">
          <div className="section-header">
            <span>{content.header}</span>
          </div>
          <div className="my-3 section-paragraph">
            <p>{content.paragraph}</p>
          </div>
          {ReactHtmlParser(content.special)}
        </div>
      </div>
    </>
  )
}

export default Content