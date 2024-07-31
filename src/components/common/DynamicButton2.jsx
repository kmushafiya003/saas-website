import React from 'react'

const DynamicButton2 = ({text}) => {
  return (
    <button className='py-3 px-8 rounded-[15px] w-max bg-primary-crocus-purple text-lg font-medium text-white'>
      {text}

    </button>
  )
}

export default DynamicButton2