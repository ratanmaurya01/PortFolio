import React from 'react'
import portPhoto from '../Image/Photo.jpg'
import Playing from '../Image/playing.jpg'
import Image from '../Image/image.jpg'

function Hero() {
  return (
    <div className='bg-black text-white text-center py-16'>
      <img
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transition-transform
  duration-300 hover:scale-105'
        src={Image}
        alt="Hero page"
      />

      <h1 className='text-4xl font-bold'>
        i'm{" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from bg-green-400 to-blue-500'>Ratan kumar maurya </span>
        Front-end Developer
      </h1>
      <p className='mt-4 text-gray-400'>i specialize in building modern and responsive web appilcation. </p>

      <div className='mt-8 space-x-4'>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform-transition
                duration-300 hover:scale-105 px-4 py-2 rounded-full '>Contact with me </button>
        <button className='bg-gradient-to-r from-pink-400 to-yellow-500 text-white hidden md:inline transform-transition
                duration-300 hover:scale-105 px-4 py-2 rounded-full '>Resume </button>
      </div>
    </div>
  )
}

export default Hero
