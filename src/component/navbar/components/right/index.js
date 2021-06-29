import React from 'react'

const Right_Section = () => {
  return (
    <>
      <div className="grid grid-cols-4 flex flex-wrap content-center pr-4">
        <div className="col-span-1 flex flex-wrap content-center px-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <div className="contact-button text-white font-bold capitalize flex justify-center flex-wrap content-center rounded-md">
          contact me
        </div>
      </div>
    </>
  )
}

export default Right_Section