import React from 'react'
import Pages from './components/pages'
import Social from './components/social'

const Center_Section = () => {
  return (
    <>
      <div className="col-span-4 border-r border-gray-300 border-l border-gray-300 grid grid-cols-4 flex items-stretch">
        <ul className="col-span-3 flex justify-start flex-wrap content-center pl-5">
          <Pages />
        </ul>
        <div className="flex justify-end flex-wrap content-center pr-4">
          <Social />
        </div>
      </div>
    </>
  )
}

export default Center_Section