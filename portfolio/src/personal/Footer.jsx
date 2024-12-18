import React from 'react'
import { FaFacebook, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

function Footer() {
    return (
        <footer className='bg-black text-white py-8 '>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4'>
                    <div className='flex-1 mb-4 md:mb-0'>
                        <h3 className='text-2xl font-bold mb-2'>Name</h3>
                        <p className='text-gray-400'>Full stack developer</p>
                    </div>
                    <div className='flex-1 w-full'>
                        <form action="" className='flex items-center justify-center'>
                            <input type="email" placeholder='Enter Email'
                                className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-gray-300' />
                            <button
                                className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-r-lg'
                            >Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className='border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center'>
                    <p className='text-gray-400'>&copy; {new Date().getFullYear()}</p>
                    <div className='flex space-x-4 my-4 md:my-0'>
                        <a href="#" target="_blank" className='text-white hover:text-gray-400'>
                            <FaFacebook />
                        </a>
                        <a href="https://www.linkedin.com/in/ratan-kumar-maurya-515751159/" target="_blank" className='text-white hover:text-gray-400'>
                            <FaLinkedin />
                        </a>

                        <a href="https://github.com/ratanmaurya01" target="_blank" className='text-white hover:text-gray-400'>
                            <FaGithub />
                        </a>
                        <a href="#" target="_blank" className='text-white hover:text-gray-400'>
                            <FaWhatsapp />
                        </a>
                    </div>
                    
                    <div className='flex space-x-4'>
                        <a href="#" className='text-white hover:text-gray-400'>Privacy</a>
                        <a href="#" className='text-white hover:text-gray-400'>Terms & Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
