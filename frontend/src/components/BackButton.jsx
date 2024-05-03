import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

const BackButton = () => {
  return (
    <div className='flex'>
      <Link to='/' className='w-full bg-sky-800 text-white px-4 py-1 rounded -lg'>
        <BsArrowLeft className ='text-2xl'/>
      </Link>
    </div>
  )
}

export default BackButton
