import React from 'react'
import image from "../assets/Image/landing page.jpg"

const Traning = () => {
  return (
    <div className=' flex items-center justify-between'>
        <div >
            <img className='w-[300px] rounded-md' src={image} alt="" />
        </div>
        <div>
            <h1><span className=' rounded-full text-2xl bg-gray-100'>1</span>Traning</h1>


        </div>
      
    </div>
  )
}

export default Traning
