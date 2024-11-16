import React from 'react'
import portPhoto from '../Image/Photo.jpg'

function About() {
    return (
        <div className='bg-black text-white py-20 mt-[-5%]' id='about'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                    <img
                        //                 className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transition-transform
                        // duration-300 hover:scale-105'

                        className='w-90 h-80 rounded object-cover mb-8 md:mb-0'
                        // src="https://img.freepik.com/free-photo/stylish-handsome-indian-man-tshirt-pastel-wall_496169-1571.jpg" 

                        src={portPhoto} 

                        alt="Hero page " />

                    <div className='flex-1'>
                        <p className='text-lg mb-8'>
                            I am a passionate website developer with expertise in React.js, focused on creating dynamic and responsive web applications. 
                            my skills help bring modern, user-friendly interfaces to life using the power of React's component-based architecture.
                        </p>
                        <div className='space-y-4'>
                            <div className='flex items-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'> React js </label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                                     transform transition-transform duration-300 hover:scale-105 w-12/12'>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'> Node js </label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                                     transform transition-transform duration-300 hover:scale-105 w-9/12'>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'> MongoDb</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                                     transform transition-transform duration-300 hover:scale-105 w-8/12'>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'> html & Css</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                                     transform transition-transform duration-300 hover:scale-105 w-11/12'>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='mt-12 flex justify-between text-center'>
                            <div>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 '>1+</h3>
                                <p>Years of Experience</p>
                            </div>

                            <div>
                                   <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 '>3+</h3>
                                <p>Project Completed </p>
                            </div>

                            <div>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 '>001+</h3>
                                <p>Happy Consomter</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
