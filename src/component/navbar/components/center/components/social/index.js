import React from 'react'
import { SocialIcon } from 'react-social-icons';

const Soical = () => {
  
  return (
    <>
      <SocialIconWepper name="twitter" />
      <SocialIconWepper name="facebook" />
      <SocialIconWepper name="instagram" />
      <SocialIconWepper name="linkedin" />
    </>
  )

}

const SocialIconWepper = ({name}) => {

  return (

    <>
      <div className="px-2">
        <a href="#" className="border border-gray-300 rounded-full h-7 w-7 flex items-center justify-center hover:shadow-lg hover:border-transparent">
          <SocialIcon network={name} fgColor="#282828" bgColor="#ffffff" style={{ height: 25, width: 25 }}/>
        </a>
      </div>
    </>

  )

}

export default Soical